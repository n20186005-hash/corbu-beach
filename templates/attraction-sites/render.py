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


def photo_section(data):
    photos = data['photos']
    heading = html.escape(data['photoHeading'])
    figures = []
    for photo in photos:
        image = html.escape(checked_link(photo['src']), quote=True)
        credit = html.escape(checked_link(photo['source']), quote=True)
        if not image or not credit or not photo['alt'].strip() or not photo['credit'].strip():
            raise ValueError('Each photograph needs a file, alt text, credit and source.')
        figures.append(f'<figure class="max-w-4xl"><img class="rounded-3xl w-full h-auto" loading="lazy" '
                       f'src="{image}" alt="{html.escape(photo["alt"], quote=True)}">'
                       f'<figcaption><a class="underline" href="{credit}">{html.escape(photo["credit"])}</a></figcaption></figure>')
    content = ''.join(figures) or '<p>' + html.escape(data['photoFallback']) + '</p>'
    return f'<section class="max-w-6xl mx-auto px-6 py-14"><h2 class="text-3xl font-semibold">{heading}</h2>{content}</section>'


def nearby_section(data):
    cards = []
    for place in data['nearby']:
        href = checked_link(place['path'], local=True)
        if not href.startswith('/') or not place['label'].strip():
            raise ValueError('Nearby links need a site-local path and a destination name.')
        cards.append('<a class="block rounded-2xl p-6" style="background:var(--card-bg);border:1px solid var(--border-color)" '
                     f'href="{html.escape(href, quote=True)}">{html.escape(place["label"])}</a>')
    if not cards:
        return ''
    return ('<section class="section-padding"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-semibold">'
            + html.escape(data['nearbyHeading']) + '</h2><div class="grid md:grid-cols-3 gap-6">' + ''.join(cards) + '</div></div></section>')


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
    values = data['values']

    def substitute(match):
        key = match.group(1)
        value = values[key]
        if not isinstance(value, str):
            raise TypeError(f'{key} must be text')
        role = key.split('.')[1]
        if role == 'src' and not value.strip() and not key.startswith('directions.'):
            return html.escape(IMAGE, quote=True)
        if not value.strip() and role != 'alt':
            raise ValueError(f'Fill or remove the empty slot: {key}')
        if role in ('href', 'src'):
            if not value.strip():
                raise ValueError(f'Missing URL: {key}')
            checked_link(value)
            if example and role == 'src':
                value = 'about:blank' if key.startswith('directions.') else IMAGE
        return html.escape(value, quote=True)

    parts = []
    for name in order:
        if name == ('gallery' if kind == 'home' else 'photography') and 'photos' in data:
            parts.append(photo_section(data))
        elif name == 'nearby' and 'nearby' in data:
            parts.append(nearby_section(data))
        else:
            parts.append(SLOT.sub(substitute, blocks[name]))
    if 'nearby' in data and 'nearby' not in order:
        parts.append(nearby_section(data))
    body = '\n'.join(parts)
    if kind == 'guide':
        body = '<article>' + body + '</article>'
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
