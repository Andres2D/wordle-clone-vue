<script setup lang="ts">
import KeyComponent from './KeyComponent.vue';

const keyboard = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','DELETE']
];
</script>
<template>
  <div class="keyboard">
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[0]"
        :key="`key-${key}`"
        :keyLetter="key" 
      />
    </section>
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[1]"
        :key="`key-${key}`"
        :keyLetter="key" 
      />
    </section>
    <section class="key-sections">
      <KeyComponent
        v-for="key in keyboard[2]"
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
