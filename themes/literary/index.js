import CONFIG from './config'
import Style from './style'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
import NotionPage from '@/components/NotionPage'

// --- 首页布局 ---
export const LayoutIndex = (props) => {
  const { posts } = props
  return (
    <div className="theme-literary min-h-screen bg-[#F9F8F6] text-[#2C2A29] font-serif selection:bg-[#E5E0D8]">
      <Style />
      <Banner />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-12 md:gap-16">
        <main className="w-full md:w-[75%]">
          <div className="flex flex-col">
            {posts?.map((post) => (
              <article key={post.id} className="group cursor-pointer py-8 border-b border-[#E5E0D8] last:border-0 flex gap-6 items-start">
                <div className="flex-1 min-w-0">
                  <Link href={`/${post.slug}`}>
                    <div className="text-[#8C857B] text-xs tracking-widest mb-2 uppercase">
                      {post.category} · {post.publishDay}
                    </div>
                    <h2 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-[#8C857B] transition-colors duration-300 truncate md:whitespace-normal md:line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[#5C5853] leading-relaxed mb-3 line-clamp-2 text-sm md:text-base">
                      {post.summary}
                    </p>
                  </Link>
                </div>
                {post.pageCoverThumbnail && (
                  <div className="w-24 h-24 sm:w-40 sm:h-28 overflow-hidden flex-shrink-0 mt-1">
                    <img src={post.pageCoverThumbnail} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </main>
        <Sidebar {...props} />
      </div>
      <footer className="text-center text-[#8C857B] text-xs py-8 border-t border-[#E5E0D8] mt-8">
        © {new Date().getFullYear()} {CONFIG.AUTHOR}. {CONFIG.FOOTER_TEXT}
      </footer>
    </div>
  )
}

// --- 文章详情页布局 ---
export const LayoutSlug = (props) => {
  const { post } = props
  return (
    <div className="theme-literary min-h-screen bg-[#F9F8F6] text-[#2C2A29] font-serif selection:bg-[#E5E0D8]">
      <Style />
      <Banner />
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-12 md:gap-16">
        <main className="w-full md:w-[75%] pt-4">
          <article>
            <header className="mb-10">
              <div className="text-[#8C857B] text-xs tracking-widest mb-4 uppercase">
                {post?.category} · {post?.publishDay}
              </div>
              <h1 className="text-3xl md:text-4xl font-normal leading-tight mb-6">
                {post?.title}
              </h1>
            </header>
            {post?.pageCover && (
              <div className="w-full mb-10">
                <img src={post.pageCover} alt={post.title} className="w-full h-auto object-cover" />
              </div>
            )}
            {/* 核心：调用 NotionNext 内置的渲染器渲染文章正文 */}
            <div className="prose prose-stone prose-lg max-w-none font-serif leading-loose text-[#4A4641]">
              {post && <NotionPage post={post} />}
            </div>
          </article>
        </main>
        <Sidebar {...props} />
      </div>
      <footer className="text-center text-[#8C857B] text-xs py-8 border-t border-[#E5E0D8] mt-12">
        © {new Date().getFullYear()} {CONFIG.AUTHOR}. {CONFIG.FOOTER_TEXT}
      </footer>
    </div>
  )
}

// 导出其他页面的回退布局
export const LayoutSearch = LayoutIndex
export const LayoutArchive = LayoutIndex
export const LayoutCategory = LayoutIndex
export const LayoutTag = LayoutIndex
export const Layout404 = LayoutIndex
