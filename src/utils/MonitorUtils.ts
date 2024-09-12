import type { GraphicsControllerData, GraphicsData } from '@widget-js/core'
import type { MonitorType } from '@/widgets/hitler/MonitorType'

export class MonitorUtils {
  static getShortTitle(type: MonitorType) {
    console.log(type)
    switch (type) {
      case 'cpu':
        return 'CPU'
      case 'gpu':
        return 'GPU'
      case 'memory':
        return 'Mem'
      default:
        return ''
    }
  }
}
