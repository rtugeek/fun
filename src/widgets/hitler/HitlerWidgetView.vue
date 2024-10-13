<script lang="ts" setup>
import { useAppVersion, useWidget } from '@widget-js/vue3'
import { ref } from 'vue'
import { useCssVar, useStorage, useTimeoutPoll } from '@vueuse/core'
import { MonitorUtils } from '@/utils/MonitorUtils'
import type { MonitorType } from '@/widgets/hitler/MonitorType'
import { SystemApi } from '@widget-js/core'

useWidget()
const percent = ref('0%')
const selectedMonitorType = useStorage<MonitorType>('MonitorType', 'memory')
const handRef = ref<HTMLImageElement>()
const rotate = useCssVar('--rotate', handRef, {initialValue: '-80deg'})
const setPercent = (percentValue: number) => {
  percent.value = `${Math.round(percentValue * 100)}%`
  rotate.value = `${-80 + percentValue * 80}deg`
}

const appVersion = useAppVersion()
const targetVersion = '24.10.6'
const needUpgrade = ref(false)
appVersion.isLessThan(targetVersion).then((result) => {
  needUpgrade.value = result
})
async function update() {
  try {
    if (selectedMonitorType.value == 'memory') {
      const memoryLoad = await SystemApi.getHardwareSensor('Memory', 'Load')
      const load = memoryLoad.find(it => it.sensorType == 'Load')
      const percent = load.value / 100
      setPercent(percent)
    } else if (selectedMonitorType.value == 'cpu') {
      const cpuLoad = await SystemApi.getHardwareSensor('Cpu', 'Load')
      const totalLoad = cpuLoad.find(it => it.text == 'CPU Total')
      const percent = totalLoad.value / 100
      setPercent(percent)
    } else if (selectedMonitorType.value == 'gpu') {
      const gpuLoad = await SystemApi.getHardwareSensor('Gpu', 'Load')
      const coreLoad = gpuLoad.find(it => it.sensorType == 'Load')
      const percent = coreLoad.value / 100
      setPercent(percent)
    }
  } catch (e) {
    console.error(e)
  }
}

useTimeoutPoll(update, 3000, {immediate: true})
update()
</script>

<template>
  <widget-wrapper>
    <div class="root">
      <img class="speedometer" src="@/assets/speedometer.png">
      <img ref="handRef" class="hand" src="@/assets/hitler_hand.png">
      <img src="@/assets/hitler_body.png">
      <div class="value">
        <template v-if="needUpgrade">
          <div style="font-size: 12px">请升应用版本至 {{ targetVersion }}</div>
        </template>
        <template v-else>
          {{ MonitorUtils.getShortTitle(selectedMonitorType) }} {{ percent }}
        </template>
      </div>
    </div>
  </widget-wrapper>
</template>

<style scoped lang="scss">
* {
  user-select: none;
  -webkit-user-drag: none;
}

.root {

  .value {
    position: absolute;
    bottom: 20px;
    width: calc(100vw - var(--widget-outer-padding) * 2);
    text-align: center;
    color: var(--widget-color);
    font-weight: bold;
  }
}

img {
  position: absolute;
  width: 95vw;
  bottom: 25vh;
  user-select: none;
  -webkit-user-drag: none;

  &.hand {
    transition: all 1s ease-out;
    transform: rotate(var(--rotate, -80deg));
  }

  &.speedometer {
    width: 75vw;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }

}
</style>
