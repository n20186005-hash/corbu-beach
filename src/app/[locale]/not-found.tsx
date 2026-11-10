import { getLocale } from 'next-intl/server';
import { localePath } from '@/lib/seo';
export const metadata = { title: 'Page not found | Corbu Beach', robots: {index:false, follow:false} };
export default async function NotFound() {
 const locale = await getLocale();
 return <main className="max-w-3xl mx-auto px-6 py-24"><h1 className="text-3xl mb-6">{locale === 'zh' ? '页面不存在' : 'Page not found'}</h1><a href={localePath(locale)}>{locale === 'zh' ? '返回指南' : 'Back to the guide'}</a></main>;
}
