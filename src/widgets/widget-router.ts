import type { RouteRecordRaw } from 'vue-router'
import HitlerWidgetRoutes from './hitler/HitlerWidgetRoutes'
import WoodenFishWidgetRoutes from '@/widgets/wooden-fish/WoodenFishWidgetRoutes'

// FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE
const WidgetRouter: RouteRecordRaw[] = [
  ...WoodenFishWidgetRoutes,
  ...HitlerWidgetRoutes,
  // FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
]
export default WidgetRouter
