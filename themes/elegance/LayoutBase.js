import Common from '@/components/Common'
import React from 'react'

/**
 * Elegance 主题的基础全局布局 (最外层的壳)
 * @param {*} props
 * @returns
 */
const LayoutBase = (props) => {
  const { children, meta } = props

  return (
    <Common meta={meta} {...props}>
      {/* 这里是整个主题的根容器，去掉了 Hexo 的侧边栏和大图 */}
      <div className="min-h-screen w-full bg-white dark:bg-gray-900">
        {/* 这里渲染具体的页面内容 (比如你的 LayoutIndex) */}
        {children}
      </div>
    </Common>
  )
}

export default LayoutBase
