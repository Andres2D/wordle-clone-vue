<script setup lang="ts">
import KeyComponent from './KeyComponent.vue'
import { currentWord, gridWords } from '../composables/useState'

const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER-KEY', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE-KEY']
]

const getKeyColor = (key: string) => {
  // let color = 'neutral'

  // gridWords.value.forEach((word: string) => {
  //   if (word.trim() !== '') {
  //     const wordIndex = word.split('').findIndex(k => k === key);
  //     const currentWordIndex = currentWord.value.split('').findIndex((k: string) => k === key);

  //     if (currentWordIndex !== -1) {
  //       if (wordIndex === currentWordIndex) {
  //         color = 'green'
  //       } else {
  //         color = 'orange'
  //       }
  //     }
  //   }
  // })

  // return color
}
</script>
<template>
  <div class="keyboard">
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[0]"
        :keyColor="getKeyColor(key)"
        :key="`key-${key}`"
        :keyLetter="key"
      />
    </section>
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[1]"
        :keyColor="getKeyColor(key)"
        :key="`key-${key}`"
        :keyLetter="key"
      />
    </section>
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[2]"
        :keyColor="getKeyColor(key)"
        :key="`key-${key}`"
        :keyLetter="key"
      />
    </section>
  </div>
</template>
<style lang="scss">
.keyboard {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .key-sections {
    display: flex;
  }
}
</style>
