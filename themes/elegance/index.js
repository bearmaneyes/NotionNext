// themes/elegance/index.js
import CONFIG from './config'
import LayoutIndex from './LayoutIndex'
import LayoutSlug from './LayoutSlug'
// NotionNext 需要的其他基础布局，如果暂时没写，可以先 fallback 到 Index
import LayoutSearch from './LayoutIndex' 
import LayoutArchive from './LayoutIndex'
import Layout404 from './LayoutIndex'

export {
  CONFIG,
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug,
  Layout404
}
