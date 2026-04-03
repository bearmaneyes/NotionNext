// themes/elegance/LayoutIndex.js
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function LayoutIndex(props) {
  const { posts, siteInfo } = props

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#3A3532] font-sans selection:bg-[#EBE6E0]">
      <Header siteInfo={siteInfo} />
      
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <main className="flex-1 space-y-16">
          {posts?.map((post) => (
            <article key={post.id} className="group">
              {post.pageCoverThumbnail && (
                <Link href={`/${post.slug}`}>
                  <div className="w-full h-64 md:h-96 mb-6 overflow-hidden bg-[#EBE6E0] cursor-pointer">
                    <img 
                      src={post.pageCoverThumbnail} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </Link>
              )}
              
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="text-xs text-[#8C847D] tracking-widest uppercase mb-3 font-serif">
                  {post.category} <span className="mx-2">•</span> {post.publishDay}
                </div>
                <Link href={`/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 cursor-pointer hover:text-[#8C847D] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-[#6B635E] leading-relaxed mb-6 font-serif max-w-2xl">
                  {post.summary}
                </p>
                <Link href={`/${post.slug}`}>
                  <span className="inline-flex items-center gap-1 text-sm text-[#3A3532] border-b border-[#3A3532] pb-0.5 hover:text-[#8C847D] hover:border-[#8C847D] transition-colors font-serif cursor-pointer">
                    阅读全文 &raquo;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </main>

        {/* Sidebar */}
        <Sidebar {...props} />
      </div>
    </div>
  )
}
