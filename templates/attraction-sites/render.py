"""Render one page from the extracted layouts with Python 3. No network or packages."""
import argparse
import html
import json
import re
from pathlib import Path
from urllib.parse import urlsplit

BASE = Path(__file__).resolve().parent
SLOT = re.compile(r"\{\{([a-z][a-z0-9.-]+)\}\}")
SECTION = re.compile(r'<section\b[^>]*\bdata-template-section="([^"]+)"[^>]*>.*?</section>', re.S)
IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1000" height="560"%3E%3Crect width="100%25" height="100%25" fill="%23637775"/%3E%3C/svg%3E'


def checked_link(value, local=False):
    url = urlsplit(value)
    if value.startswith('//') or '\\' in value or any(ord(c) < 32 for c in value):
        raise ValueError(f"Invalid URL: {value!r}")
    if url.scheme:
        if local or url.scheme not in {'https', 'http'} or not url.hostname:
            raise ValueError(f"Invalid URL: {value!r}")
    return value


def render(kind, data, example=False):
    if data.get('example') and not example:
        raise ValueError('Use --example for the source fixture, or supply your own localized data.')
    for field in ('lang', 'title', 'description', 'canonical'):
        if not data[field].strip():
            raise ValueError(f'Missing page field: {field}')
    folder = BASE / kind
    layout = (folder / 'layout.html').read_text()
    blocks = {
        m.group(1): m.group() for m in SECTION.finditer(layout)
    }
    order = data['sections']
    if len(set(order)) != len(order) or order.count('hero') != 1:
        raise ValueError('Each section must be unique, including exactly one hero.')
    body = '\n'.join(blocks[name] for name in order)
    values = data['values']

    def substitute(match):
        key = match.group(1)
        value = values[key]
        if not isinstance(value, str):
            raise TypeError(f'{key} must be text')
        if not value.strip():
            raise ValueError(f'Fill or remove the empty slot: {key}')
        role = key.split('.')[1]
        if role in ('href', 'src'):
            if not value.strip():
                raise ValueError(f'Missing URL: {key}')
            checked_link(value)
            if example and role == 'src':
                value = 'about:blank' if key.startswith('directions.') else IMAGE
        return html.escape(value, quote=True)

    body = SLOT.sub(substitute, body)
    if kind == 'guide':
        body = '<article>' + body + '</article>'
    nearby = data.get('nearby', [])
    if nearby:
        items = ''.join('<li><a href="{}">{}</a></li>'.format(
            html.escape(checked_link(item['path'], local=True), quote=True),
            html.escape(item['label'])) for item in nearby)
        body += '<section class="max-w-6xl mx-auto px-6 py-14"><h2>{}</h2><ul>{}</ul></section>'.format(
            html.escape(data['nearbyHeading']), items)
    css = (folder / 'theme.css').read_text()
    esc = html.escape
    canonical = checked_link(data['canonical'])
    if not urlsplit(canonical).hostname:
        raise ValueError('Use an absolute canonical URL')
    robots = '<meta name="robots" content="noindex,nofollow">' if example else ''
    return (f'<!doctype html><html lang="{esc(data["lang"],quote=True)}"><head>'
            f'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
            f'<title>{esc(data["title"])}</title><meta name="description" content="{esc(data["description"],quote=True)}">'
            f'<link rel="canonical" href="{esc(canonical,quote=True)}">{robots}<style>{css}</style></head>'
            f'<body><main>{body}</main></body></html>\n')


if __name__ == '__main__':
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument('kind', choices=('home', 'guide'))
    cli.add_argument('data', type=Path)
    cli.add_argument('output', type=Path)
    cli.add_argument('--example', action='store_true')
    args = cli.parse_args()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(render(args.kind, json.loads(args.data.read_text()), args.example))
