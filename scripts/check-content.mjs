import {readFileSync,readdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const read=p=>readFileSync(p,'utf8');
for(const locale of ['en','zh']) {
 const m=JSON.parse(read(`src/messages/${locale}.json`));
 assert.equal(m.reviews.items.length,0,'Only externally sourced review link is permitted');
 assert.equal(m.gallery.captions.length,12,'Keep all original gallery entries');
 assert.ok(m.meta.title&&m.meta.description);
 assert.ok(!/3,000|6,000|150 species|20 kilometers|UNESCO World Heritage/.test(JSON.stringify(m)),'Unsupported precision');
}
const tree=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?tree(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
for (const file of tree('src').filter(p=>/\.(tsx?|json)$/.test(p))) {
 assert.ok(!/warsawbarbican|DNWLjcbrU9ps53RQ8|ca-pub-XXXXXXXXXX|aggregateRating|openingHoursSpecification/.test(read(file)),`Stale identity or unsupported structured data: ${file}`);
}
console.log('Content/source consistency checks passed (2 locales, 12 retained gallery entries each).');
