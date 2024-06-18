import { WidgetPackage } from '@widget-js/core'

// TODO 完善组件包信息
export default new WidgetPackage({
  author: 'Neo Fu',
  description: {
    'zh-CN': '有趣的桌面组件',
  },
  entry: '/',
  hash: true,
  homepage: '',
  name: 'widget.js.fun',
  title: {
    'zh-CN': '有趣的桌面组件',
  },
  version: '1.0.0',
  devOptions: {
    folder: './src/widgets/',
  },
})
