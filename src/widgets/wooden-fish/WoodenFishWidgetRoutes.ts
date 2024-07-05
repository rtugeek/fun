import type { RouteRecordRaw } from 'vue-router'
import WoodenFishWidget from './WoodenFish.widget'

const path = WoodenFishWidget.path
const name = WoodenFishWidget.name

const configPagePath = WoodenFishWidget.configPagePath!.split('?')[0]

const WoodenFishWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "widget.js.fun.wooden_fish" */ './WoodenFishWidgetView.vue'
      ),
  },
  {
    path: configPagePath,
    name: `${name}.config`,
    component: () =>
      import(
        /* webpackChunkName: "widget.js.fun.wooden_fish.config" */ './WoodenFishConfigView.vue'
      ),
  },
]

export default WoodenFishWidgetRoutes
