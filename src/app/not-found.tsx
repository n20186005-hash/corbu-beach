import Link from 'next/link';
export const metadata = { title: 'Page not found | Corbu Beach', robots: {index:false, follow:false} };
export default function NotFound() {
 return <html lang="en"><body style={{fontFamily:'system-ui',padding:'3rem',lineHeight:1.8}}><main><h1>Page not found / 页面不存在</h1><p>The requested page could not be found.</p><Link href="/en">English guide</Link> · <Link href="/">中文指南</Link></main></body></html>;
}
