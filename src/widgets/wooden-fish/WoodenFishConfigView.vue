<script lang="ts" setup>
import { WidgetConfigOption, useWidget } from '@widget-js/vue3'

const { widgetParams } = useWidget()

function save() {
  window.close()
}

// 修改成需要设置组件参数配置
const widgetConfigOption = new WidgetConfigOption({
  custom: false,
  theme: {
    backgroundColor: true,
    borderRadius: true,
    color: true,
  },
})
</script>

<template>
  <widget-edit-dialog
    :widget-params="widgetParams"
    :option="widgetConfigOption"
    @confirm="save"
  />
</template>

<style scoped></style>
