import { Widget, WidgetKeyword } from '@widget-js/core';
//TODO 修改组件信息，标题，描述，关键词
const WoodenFishWidget = new Widget({
  name: 'widget.js.fun.wooden_fish',
  title: { 'zh-CN': '电子木鱼' },
  description: { 'zh-CN': '' },
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  width: 4,
  height: 4,
  minWidth: 4,
  maxWidth: 4,
  minHeight: 4,
  maxHeight: 4,
  previewImage: '修改为组件预览图地址',
  path: '/widget/wooden_fish',
  configPagePath: '/widget/config/wooden_fish',
});

export default WoodenFishWidget;
