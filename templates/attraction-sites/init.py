"""Create a new destination data file without copying reference-site facts."""
import argparse
import json
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('kind', choices=('home', 'guide'))
parser.add_argument('output', type=Path)
parser.add_argument('--lang', required=True)
args = parser.parse_args()
base = Path(__file__).resolve().parent
source = json.loads((base / args.kind / 'reference.json').read_text())
data = dict(lang=args.lang, title='', description='', canonical='',
            sections=source['sections'], values=dict.fromkeys(source['values'], ''))
if args.kind == 'guide':
    data['sections'].remove('management')
    data['sections'].insert(1, 'management')
data.update(nearbyHeading='', nearby=[], photos=[], photoHeading='', photoFallback='')
args.output.parent.mkdir(parents=True, exist_ok=True)
with args.output.open('x') as stream:
    json.dump(data, stream, ensure_ascii=False, indent=2)
    stream.write('\n')
