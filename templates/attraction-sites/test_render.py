import json
import unittest
from html.parser import HTMLParser
from render import BASE, render


class Reader(HTMLParser):
    def __init__(self):
        super().__init__()
        self.body = False
        self.text = []
        self.urls = []

    def handle_starttag(self, tag, attrs):
        if tag == 'main':
            self.body = True
        self.urls.extend(value for key, value in attrs if key in ('href', 'src'))

    def handle_endtag(self, tag):
        if tag == 'main':
            self.body = False

    def handle_data(self, text):
        if self.body and text.strip():
            self.text.append(text.strip())


class Templates(unittest.TestCase):
    def test_replacing_fields_removes_all_source_text(self):
        for kind in ('home', 'guide'):
            d = json.loads((BASE / kind / 'reference.json').read_text())
            d.update(example=False, title='Harbor', description='Harbor', lang='en', canonical='https://example.com/')
            d['values'] = {k: '/visit' if k.split('.')[1] in ('href', 'src') else 'Harbor' for k in d['values']}
            result = Reader()
            result.feed(render(kind, d))
            self.assertEqual(set(result.text), {'Harbor'})
            self.assertEqual(set(result.urls), {'https://example.com/', '/visit'})
            d.update(photos=[], photoHeading='Photos', photoFallback='No local photo yet',
                     nearbyHeading='Nearby', nearby=[dict(path=f'/place/{i}', label=f'Place {i}') for i in range(31)])
            d['values']['hero.src.1'] = ''
            result = Reader()
            result.feed(render(kind, d))
            self.assertIn('No local photo yet', result.text)
            self.assertEqual(sum(u.startswith('/place/') for u in result.urls), 31)
            self.assertTrue(any(u.startswith('data:image/svg+xml,') for u in result.urls))


if __name__ == '__main__':
    unittest.main()
