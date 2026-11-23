import Link from 'next/link';

export const metadata = {title:'页面不存在 | Corbu Beach',robots:{index:false,follow:false}};

export default function NotFound() {
  return <html lang="zh-CN"><body className="min-h-screen" style={{background:'var(--bg-primary)',color:'var(--text-primary)'}}>
    <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 min-h-screen">
      <p className="text-sm uppercase tracking-widest mb-4" style={{color:'var(--accent)'}}>404</p>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">页面不存在</h1>
      <p className="text-lg leading-relaxed mb-10" style={{color:'var(--text-secondary)'}}>
        当前链接无法打开。你可以返回科尔布海滩指南，或选择英文版本继续浏览。
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="px-5 py-3 rounded-full font-medium" style={{background:'var(--accent)',color:'#fff'}}>中文首页</Link>
        <Link href="/en" className="px-5 py-3 rounded-full font-medium" style={{border:'1px solid var(--border-color)',color:'var(--text-primary)'}}>English</Link>
      </div>
    </main>
  </body></html>;
}
