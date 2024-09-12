<script lang="ts" setup>
import { WidgetConfigOption, useWidget } from '@widget-js/vue3'
import { SystemApi } from '@widget-js/core'
import { ref } from 'vue'
import type { MonitorType } from '@/widgets/hitler/MonitorType'
import { useStorage } from '@vueuse/core'

const { widgetParams } = useWidget()

// 修改成需要设置组件参数配置
const widgetConfigOption = new WidgetConfigOption({
  custom: true,
  theme: {
    backgroundColor: true,
    borderRadius: true,
    color: true,
  },
})

const selectedMonitorType = useStorage<MonitorType>('MonitorType', 'memory')
const hasGraphic = ref(false)
SystemApi.getHardware('Gpu').then((gpuList) => {
  console.log(gpuList)
  if (gpuList.length > 0) {
    hasGraphic.value = true
  }
})
</script>

<template>
  <widget-edit-dialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
  >
    <el-form-item label="监控类型" prop="backgroundColor">
      <el-select v-model="selectedMonitorType">
        <el-option label="CPU" value="cpu"></el-option>
        <el-option label="内存" value="memory"></el-option>
        <el-option v-if="hasGraphic" label="GPU" value="gpu"></el-option>
      </el-select>
    </el-form-item>
  </widget-edit-dialog>
</template>

<style scoped></style>
