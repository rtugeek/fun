import type { MonitorType } from '@/widgets/hitler/MonitorType'

export class MonitorUtils {
  static getShortTitle(type: MonitorType) {
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
