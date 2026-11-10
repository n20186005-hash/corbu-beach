import type { MetadataRoute } from 'next';
import { guides } from '@/data/guides';
import { siteUrl, localePath } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
 const paths=['','/privacy-policy','/terms-of-service','/cookie-settings',...guides.en.map(g=>`/guides/${g.slug}`)];
 return paths.flatMap(path=>['zh','en'].map(locale=>({url:siteUrl+localePath(locale,path),alternates:{languages:{zh:siteUrl+localePath('zh',path),en:siteUrl+localePath('en',path)}}})));
}
