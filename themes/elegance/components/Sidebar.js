import Link from 'next/link'

export default function Sidebar(props) {
  const { latestPosts, categoryOptions, tagOptions } = props

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-12 font-serif">
      {/* Recent Posts */}
      <section>
        <h3 className="text-lg font-medium text-[#3A3532] mb-5 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#D4CFC9]"></span>
          近期文章
        </h3>
        <ul className="space-y-5">
          {latestPosts?.slice(0, 5).map(post => (
            <li key={post.id} className="group cursor-pointer">
              <Link href={`/${post.slug}`}>
                <div className="text-[14px] text-[#5A534E] group-hover:text-[#3A3532] transition-colors line-clamp-2 leading-relaxed">
                  {post.title}
                </div>
                <div className="text-[12px] text-[#A69E98] mt-1.5">{post.publishDay}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section>
        <h3 className="text-lg font-medium text-[#3A3532] mb-5 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#D4CFC9]"></span>
          分类
        </h3>
        <ul className="space-y-3 text-[14px] text-[#5A534E]">
          {categoryOptions?.map(cat => (
            <li key={cat.name} className="flex items-center justify-between hover:text-[#3A3532] cursor-pointer transition-colors">
              <Link href={`/category/${cat.name}`}><span>{cat.name}</span></Link>
              <span className="text-[12px] text-[#A69E98]">{cat.count}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tags */}
      <section>
        <h3 className="text-lg font-medium text-[#3A3532] mb-5 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#D4CFC9]"></span>
          标签
        </h3>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
          {tagOptions?.map((tag, idx) => {
            const sizes = ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm'];
            const sizeClass = sizes[idx % sizes.length];
            return (
              <Link key={tag.name} href={`/tag/${tag.name}`}>
                <span className={`${sizeClass} text-[#8C847D] hover:text-[#3A3532] cursor-pointer transition-colors`}>
                  {tag.name}
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </aside>
  )
}
