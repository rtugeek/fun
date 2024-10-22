import { Widget, WidgetKeyword } from '@widget-js/core'

const HitlerWidget = new Widget({
  name: 'widget.js.fun.hitler',
  title: { 'zh-CN': '仪表盘', 'en-US': 'Dashboard' },
  description: { 'zh-CN': 'Sieg heil!', 'en-US': 'Sieg heil!' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: ['fun','utilities'],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 4,
  minHeight: 2,
  requiredAppVersion: '24.9.0',
  maxHeight: 4,
  previewImage: '/images/preview_hitler.png',
  path: '/widget/hitler',
  configPagePath:
    '/widget/config/hitler?width=600&height=500&frame=true&transparent=false',
})

export default HitlerWidget
