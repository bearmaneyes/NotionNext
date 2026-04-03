// themes/elegance/LayoutSlug.js
import Link from 'next/link'
import NotionPage from '@/components/NotionPage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function LayoutSlug(props) {
  const { post, lock, validPassword } = props

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#3A3532] font-sans selection:bg-[#EBE6E0]">
      <Header siteInfo={props.siteInfo} />
      
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        <main className="flex-1">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-[#8C847D] hover:text-[#3A3532] mb-10 transition-colors font-serif text-sm cursor-pointer">
              &laquo; 返回列表
            </span>
          </Link>

          <article className="font-serif">
            <header className="mb-12 text-center">
              <div className="text-xs text-[#8C847D] tracking-widest uppercase mb-4">
                {post.category} <span className="mx-2">•</span> {post.publishDay}
              </div>
              <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 text-[#3A3532]">
                {post.title}
              </h1>
              <div className="flex justify-center gap-2">
                {post.tags?.map(tag => (
                  <span key={tag} className="text-xs text-[#8C847D] bg-[#EBE6E0]/50 px-2 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {post.pageCover && (
              <figure className="w-full mb-12 flex justify-center bg-[#F4F3F0] rounded-sm overflow-hidden p-2 md:p-4">
                <img 
                  src={post.pageCover} 
                  alt={post.title} 
                  className="max-w-full max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </figure>
            )}

            {/* 这里是 NotionNext 渲染正文的核心组件 */}
            <div className="prose prose-stone max-w-none prose-p:leading-loose prose-p:text-[#4A4540] prose-p:text-lg prose-headings:font-serif prose-headings:font-medium">
              {!lock && <NotionPage post={post} />}
              {lock && validPassword && <NotionPage post={post} />}
            </div>
          </article>
        </main>

        <Sidebar {...props} />
      </div>
    </div>
  )
}
