import CONFIG from './config'
import LayoutIndex from './LayoutIndex'
import LayoutSlug from './LayoutSlug'
// 为了防止报错，把其他必须的 Layout 也导出去，即使它们暂时和首页长一样
import LayoutSearch from './LayoutIndex' 
import LayoutArchive from './LayoutIndex'
import Layout404 from './LayoutIndex'
import LayoutCategoryIndex from './LayoutIndex'
import LayoutTagIndex from './LayoutIndex'

export {
  CONFIG,
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug,
  Layout404,
  LayoutCategoryIndex,
  LayoutTagIndex
}
