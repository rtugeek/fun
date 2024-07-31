<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'

useWidget()
</script>

<template>
  <widget-wrapper>
    <div class="root">
      <img class="speedometer" src="@/assets/speedometer.png">
      <img class="hand" src="@/assets/hitler_hand.png">
      <img src="@/assets/hitler_body.png">
      <div class="value">
        CPU 58%
      </div>
    </div>
  </widget-wrapper>
</template>

<style scoped lang="scss">
*{
  user-select: none;
  -webkit-user-drag: none;
}
.root{

  .value{
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
  &.hand{
    transition: all 1s ease-out;
    transform: rotate(-80deg);
  }

  &.speedometer{
    width: 75vw;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }

}
</style>
