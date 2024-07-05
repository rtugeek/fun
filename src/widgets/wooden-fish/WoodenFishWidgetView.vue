<script lang="ts" setup>
import { useWidget } from '@widget-js/vue3'
import { Music } from '@icon-park/vue-next'
import { nextTick, onMounted, ref } from 'vue'
import { useStorage } from '@vueuse/core'

useWidget()
const playBgm = useStorage('play-music', false)
const hitRef = ref<HTMLAudioElement>()
const bgmRef = ref<HTMLAudioElement>()

const keyframes = [
  { transform: 'translateY(0)', opacity: 1 },
  { transform: 'translateY(-40px)', opacity: 0 },
]

const animationDuration = 1000
const animationOptions = {
  duration: animationDuration,
  iterations: 1,
}
function hit() {
  const node = hitRef.value?.cloneNode() as HTMLAudioElement
  node.play()
  const merits = document.createElement('div')
  merits.classList.add('merits')
  merits.textContent = '功德+1'
  const rootElement = document.querySelector('.root')
  rootElement?.appendChild(merits)
  merits.animate(keyframes, animationOptions)

  setTimeout(() => {
    rootElement?.removeChild(merits)
  }, animationDuration)
}

function onBgmClick() {
  playBgm.value = !playBgm.value
  if (playBgm.value) {
    bgmRef.value?.play()
  }
  else {
    bgmRef.value?.pause()
  }
}

onMounted(async () => {
  await nextTick()
  if (playBgm.value) {
    bgmRef.value?.play()
  }
})
</script>

<template>
  <widget-wrapper>
    <div class="root">
      <Music class="bgm" :class="{ active: playBgm }" @click="onBgmClick" />
      <img src="@/assets/images/wooden_fish.png" class="fish" @click="hit">
    </div>
    <audio ref="hitRef" src="./audio/hit.mp3" />
    <audio ref="bgmRef" src="./audio/bgm.mp3" />
  </widget-wrapper>
</template>

<style lang="scss">
*{
  user-select: none;
  -webkit-user-drag: none;
}
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
    color: var(--widget-color);
    font-size: 1.2rem;
  }
  .bgm{
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 1.2rem;
    opacity: 0.2;
    z-index: 99;
    cursor: pointer;
    &.active{
      opacity: 1;
    }
  }

  .fish{
    width: 70vw;
    height: 70vh;
    cursor: pointer;
    filter: drop-shadow(0 1px 2px rgba(51, 51, 51, 0.5));
    user-select: none;
    transition: all 0.3s ease-out;
    &:active{
      scale: 0.9;
    }
  }
}
</style>
