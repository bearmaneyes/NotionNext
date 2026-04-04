import CONFIG from './config'
import LayoutIndex from './LayoutIndex'
import LayoutSlug from './LayoutSlug'

// 【关键修复】从自带的 hexo 主题借用你还没写的必须组件，防止网页崩溃！
import LayoutBase from '../hexo/LayoutBase'
import LayoutSearch from '../hexo/LayoutSearch'
import LayoutArchive from '../hexo/LayoutArchive'
import Layout404 from '../hexo/Layout404'
import LayoutCategoryIndex from '../hexo/LayoutCategoryIndex'
import LayoutCategory from '../hexo/LayoutCategory'
import LayoutTagIndex from '../hexo/LayoutTagIndex'
import LayoutTag from '../hexo/LayoutTag'
import LayoutPage from '../hexo/LayoutPage'

export {
  CONFIG as THEME_CONFIG, // theme.js 第 21 行强依赖 THEME_CONFIG 这个名字
  CONFIG,
  LayoutBase, // theme.js 第 50 行强依赖这个
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug, // theme.js 第 73 行强依赖这个作为兜底
  Layout404,
  LayoutCategoryIndex,
  LayoutCategory,
  LayoutTagIndex,
  LayoutTag,
  LayoutPage
}
