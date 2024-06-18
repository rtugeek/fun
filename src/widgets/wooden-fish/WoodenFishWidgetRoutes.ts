import type { RouteRecordRaw } from 'vue-router';
import WoodenFishWidget from './WoodenFish.widget';

const path = WoodenFishWidget.path;
const name = WoodenFishWidget.name;

const configPagePath = WoodenFishWidget.configPagePath!;

const WoodenFishWidgetRoutes: RouteRecordRaw[] = [
  {
    path: path,
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
];

export default WoodenFishWidgetRoutes;
