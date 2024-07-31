import type { RouteRecordRaw } from 'vue-router'
import HitlerWidget from './Hitler.widget'

const path = HitlerWidget.path
const name = HitlerWidget.name

const configPagePath = HitlerWidget.configPagePath!.split('?')[0]

const HitlerWidgetRoutes: RouteRecordRaw[] = [
  {
    path,
    name: `${name}`,
    component: () =>
      import(
        /* webpackChunkName: "widget.js.fun.hitler" */ './HitlerWidgetView.vue'
      ),
  },
  {
    path: configPagePath,
    name: `${name}.config`,
    component: () =>
      import(
        /* webpackChunkName: "widget.js.fun.hitler.config" */ './HitlerConfigView.vue'
      ),
  },
]

export default HitlerWidgetRoutes
