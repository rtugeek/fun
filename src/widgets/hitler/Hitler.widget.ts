import { Widget, WidgetKeyword } from '@widget-js/core'

const HitlerWidget = new Widget({
  name: 'widget.js.fun.hitler',
  title: { 'zh-CN': '希特勒仪表盘' },
  description: { 'zh-CN': '' },
  keywords: [WidgetKeyword.RECOMMEND],
  categories: [],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  minWidth: 2,
  maxWidth: 4,
  disabled: true,
  minHeight: 2,
  maxHeight: 4,
  previewImage: '修改为组件预览图地址',
  path: '/widget/hitler',
  configPagePath:
    '/widget/config/hitler?width=600&height=500&frame=true&transparent=false',
})

export default HitlerWidget
