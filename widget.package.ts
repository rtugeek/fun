import { WidgetPackage } from '@widget-js/core'

export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': '有趣的桌面组件',
  },
  entry: '/',
  hash: true,
  homepage: 'widgetjs.cn',
  remote: {
    hostname: 'widgetjs.cn',
    entry: 'https://widgetjs.cn/fun',
    base: '/fun',
  },
  name: 'widget.js.fun',
  title: {
    'zh-CN': '有趣的桌面组件',
  },
  devOptions: {
    folder: './src/widgets/',
  },
})
