import { DeployMode, Widget, WidgetKeyword } from '@widget-js/core'

const WoodenFishWidget = new Widget({
  name: '.wooden_fish',
  title: { 'zh-CN': '电子木鱼', 'en-US': 'Wooden Fish' },
  description: { 'zh-CN': '修电子福报', 'en-US': 'Cultivate digital karma' },
  keywords: [WidgetKeyword.RECOMMEND],
  supportDeployMode: DeployMode.NORMAL | DeployMode.OVERLAP,
  lang: 'zh-CN',
  width: 2,
  height: 2,
  categories: ['fun'],
  previewImage: '/images/preview_wooden_fish.png',
  path: '/widget/wooden_fish',
  configPagePath: '/widget/config/wooden_fish?width=600&height=400&frame=true&transparent=false',
})

export default WoodenFishWidget
