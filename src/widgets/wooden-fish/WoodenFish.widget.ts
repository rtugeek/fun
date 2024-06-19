import { Widget, WidgetKeyword } from '@widget-js/core';

const WoodenFishWidget = new Widget({
  name: 'widget.js.fun.wooden_fish',
  title: { 'zh-CN': '电子木鱼' },
  description: { 'zh-CN': '修电子福报' },
  keywords: [WidgetKeyword.RECOMMEND],
  lang: 'zh-CN',
  width: 2,
  height: 2,
  categories:['fun'],
  previewImage: '修改为组件预览图地址',
  path: '/widget/wooden_fish',
  configPagePath: '/widget/config/wooden_fish',
});

export default WoodenFishWidget;
