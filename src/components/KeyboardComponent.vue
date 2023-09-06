<script setup lang="ts">
import KeyComponent from './KeyComponent.vue'
import { existingWords, guessedWords } from '../composables/wordState'

const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER-KEY', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE-KEY']
]

const getKeyColor = (key: string) => {
  let color = 'neutral';
  const flatExistingLetters = existingWords.value.flatMap((letter: string) => letter)
  const flatGuessedLetters = guessedWords.value.flatMap((letter: string) => letter)
  
  if(flatExistingLetters.includes(key)) {
    color = 'orange';
  }
  
  if(flatGuessedLetters.includes(key)) {
    color = 'green';
  }

  return color;
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
../composables/wordState