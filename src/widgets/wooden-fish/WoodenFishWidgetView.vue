<template>
  <widget-wrapper>
    <div class="root">
      <Music class="bgm" :class="{active:playBgm}" @click="onBgmClick"/>
      <img src="@/assets/images/wooden_fish.png" @click="hit" class="fish">
    </div>
    <audio src="./audio/hit.mp3" ref="hitRef"></audio>
    <audio src="./audio/bgm.mp3" ref="bgmRef"></audio>
  </widget-wrapper>
</template>

<script lang="ts" setup>
import { WidgetData } from '@widget-js/core';
import { useWidget } from '@widget-js/vue3';
import { Music } from '@icon-park/vue-next';
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

useWidget(WidgetData);
const playBgm = useStorage('play-music',false)
const hitRef = ref<HTMLAudioElement>()
const bgmRef = ref<HTMLAudioElement>()

const keyframes = [
  { transform: 'translateY(0)',opacity: 1 },
  { transform: 'translateY(-40px)',opacity: 0 }
]

const animationOptions = {
  duration: 1000,
  iterations: 1,
}
const hit = ()=>{
  const node = hitRef.value?.cloneNode() as HTMLAudioElement
  node.play()

  const merits = document.createElement('div')
  merits.classList.add('merits')
  merits.innerText = '功德+1'
  const rootElement = document.querySelector('.root')
  rootElement?.appendChild(merits)
  merits.animate(keyframes,animationOptions)

  setTimeout(()=>{
    rootElement?.removeChild(merits)
  }, 1000)
}

const onBgmClick = ()=>{
  playBgm.value = !playBgm.value
  if (playBgm.value) {
    bgmRef.value?.play()
  } else {
    bgmRef.value?.pause()
  }
}

</script>

<style lang="scss">
.root{
  background-color: var(--widget-background-color);
  border-radius: var(--widget-border-radius);
  color: var(--widget-color);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  .merits {
    position: absolute;
    right: 15vw;
    top: 20vh;
    color: white;
    font-size: 1.2rem;
  }
  .bgm{
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 1.2rem;
    opacity: 0.2;
    cursor: pointer;
    &.active{
      opacity: 1;
    }
  }

  .fish{
    width: 70vw;
    height: 70vh;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease-out;
    &:active{
      scale: 0.9;
    }
  }
}
</style>
