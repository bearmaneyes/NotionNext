import Link from 'next/link'
import CONFIG from '../config'

export default function Header({ siteInfo }) {
  return (
    <div className="relative w-full h-48 md:h-56 flex flex-col mb-8">
      <div className="absolute inset-0 bg-[#2A2522]">
        <img 
          src={CONFIG.ELEGANCE_BANNER_IMAGE} 
          alt="Banner Background" 
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white/90">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="font-serif text-lg font-medium tracking-wide">
              {siteInfo?.title || '拾光笔记'}
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">首页</span></Link>
          <Link href="/about"><span className="hover:text-white transition-colors cursor-pointer">关于</span></Link>
        </nav>
      </header>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-medium tracking-wider mb-2 drop-shadow-md">
          {siteInfo?.title || '拾光笔记'}
        </h1>
        <p className="text-white/80 font-serif tracking-widest text-sm drop-shadow">
          {siteInfo?.description || '记录生活与光影'}
        </p>
      </div>
    </div>
  )
}
