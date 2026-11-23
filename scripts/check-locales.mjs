import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';

const read=path=>readFileSync(path,'utf8');
const locales=['zh','en'];
const messages=Object.fromEntries(locales.map(locale=>[locale,JSON.parse(read('src/messages/'+locale+'.json'))]));

function leafKeys(value,prefix='') {
  return Object.entries(value).flatMap(([key,v])=>{
    const path=prefix ? prefix+'.'+key : key;
    return v && typeof v==='object' && !Array.isArray(v) ? leafKeys(v,path) : [path];
  });
}
const zhKeys=leafKeys(messages.zh).sort();
const enKeys=leafKeys(messages.en).sort();
assert.deepEqual(zhKeys,enKeys,'Chinese and English message keys must match');
assert.ok(!/[\u3400-\u9fff]/.test(JSON.stringify(messages.en)),'English message file contains Han characters');

const source=read('src/data/nearbyGuides.ts');
const start=source.indexOf('{');
const end=source.lastIndexOf('};');
assert.ok(start!==-1 && end>start,'Cannot locate nearby guide data');
const nearby=JSON.parse(source.slice(start,end+1));
const en=nearby.en;
const zh=nearby.zh;
assert.ok(en.length>=30,'At least 30 new independent destinations are required');
assert.equal(en.length,zh.length,'Nearby guide locale counts differ');

const required=['title','description','intro','category','address','mapQuery','management','hours','tickets','transport','image','highlights','sections','visitorNotes','sources'];
const enMap=new Map(en.map(guide=>[guide.slug,guide]));
const zhMap=new Map(zh.map(guide=>[guide.slug,guide]));
assert.equal(enMap.size,en.length,'Duplicate English slugs');
assert.equal(zhMap.size,zh.length,'Duplicate Chinese slugs');
const englishMaps=new Set();
for (const english of en) {
  const chinese=zhMap.get(english.slug);
  assert.ok(chinese,'No Chinese counterpart for '+english.slug);
  for (const localeData of [english,chinese]) {
    for (const key of required) assert.ok(localeData[key],localeData.slug+': missing '+key);
    assert.ok(localeData.image.url && localeData.image.sourceUrl,localeData.slug+': missing image URL/source');
    assert.ok(localeData.sections.length>=3,localeData.slug+': missing body sections');
    assert.ok(localeData.highlights.length>=3,localeData.slug+': missing highlights');
    assert.ok(localeData.visitorNotes.length>=3,localeData.slug+': missing visitor notes');
  }
  assert.equal(english.mapQuery,chinese.mapQuery,english.slug+': map query differs across languages');
  assert.equal(english.image.url,chinese.image.url,english.slug+': photo differs across languages');
  assert.equal(english.sections.length,chinese.sections.length,english.slug+': body section count differs');
  assert.ok(!englishMaps.has(english.mapQuery),english.slug+': duplicate map query');
  englishMaps.add(english.mapQuery);
  for (const key of ['description','intro','management','hours','tickets','transport']) {
    assert.ok(!/[\u3400-\u9fff]/.test(english[key]),english.slug+': Chinese text in English '+key);
    const chineseText=chinese[key];
    assert.ok(/[\u3400-\u9fff]/.test(chineseText),english.slug+': untranslated Chinese '+key);
  }
}
assert.ok(read('src/i18n/routing.ts').includes("'/guides/[slug]'"),'Localized guides route missing');
console.log('Locale audit passed: '+zhKeys.length+' message keys; '+en.length+' destinations / '+(en.length*2)+' bilingual new pages; independent map and photo data present.');
