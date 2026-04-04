import Link from 'next/link'

const Sidebar = (props) => {
  const { latestPosts, categoryOptions, tagOptions } = props

  return (
    <aside className="w-full md:w-[25%] space-y-10 pt-4">
      {/* 最近文章 */}
      <div>
        <h3 className="text-xs text-[#8C857B] tracking-[0.2em] uppercase font-serif mb-4 border-b border-[#E5E0D8] pb-2">
          Recent
        </h3>
        <ul className="space-y-3">
          {latestPosts?.slice(0, 5).map(post => (
            <li key={post.id} className="cursor-pointer group">
              <Link href={`/${post.slug}`}>
                <div className="text-[#4A4641] group-hover:text-[#2C2A29] transition-colors line-clamp-2 text-sm leading-relaxed">
                  {post.title}
                </div>
                <div className="text-[11px] text-[#8C857B] mt-1 italic">{post.publishDay}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 分类 */}
      {categoryOptions && (
        <div>
          <h3 className="text-xs text-[#8C857B] tracking-[0.2em] uppercase font-serif mb-4 border-b border-[#E5E0D8] pb-2">
            Categories
          </h3>
          <ul className="space-y-2">
            {categoryOptions.map(cat => (
              <li key={cat.name} className="text-[#5C5853] hover:text-[#2C2A29] cursor-pointer transition-colors flex justify-between text-sm">
                <Link href={`/category/${cat.name}`}>
                  <span>{cat.name}</span>
                </Link>
                <span className="text-[#8C857B] text-xs">({cat.count})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 标签 */}
      {tagOptions && (
        <div>
          <h3 className="text-xs text-[#8C857B] tracking-[0.2em] uppercase font-serif mb-4 border-b border-[#E5E0D8] pb-2">
            Tags
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
            {tagOptions.map(tag => (
              <Link key={tag.name} href={`/tag/${encodeURIComponent(tag.name)}`}>
                <span className="font-serif italic cursor-pointer hover:text-[#2C2A29] text-[#5C5853] transition-colors duration-300 text-sm">
                  #{tag.name} ({tag.count})
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
export default Sidebar
