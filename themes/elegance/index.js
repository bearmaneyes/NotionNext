import CONFIG from './config'
import LayoutIndex from './LayoutIndex'
import LayoutSlug from './LayoutSlug'

// 【关键修复】使用动态导入，如果当前主题没写，就回退到默认主题的组件
import { useLayoutByTheme } from '@/themes/theme'
import * as ThemeComponents from '@theme-components'

// 动态获取兜底组件
const LayoutBase = ThemeComponents.LayoutBase
const LayoutSearch = ThemeComponents.LayoutSearch
const LayoutArchive = ThemeComponents.LayoutArchive
const Layout404 = ThemeComponents.Layout404
const LayoutCategoryIndex = ThemeComponents.LayoutCategoryIndex
const LayoutCategory = ThemeComponents.LayoutCategory
const LayoutTagIndex = ThemeComponents.LayoutTagIndex
const LayoutTag = ThemeComponents.LayoutTag
const LayoutPage = ThemeComponents.LayoutPage

export {
  CONFIG as THEME_CONFIG,
  CONFIG,
  LayoutBase,
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug,
  Layout404,
  LayoutCategoryIndex,
  LayoutCategory,
  LayoutTagIndex,
  LayoutTag,
  LayoutPage
}
