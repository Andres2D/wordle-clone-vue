<script setup lang="ts">
import { addWord } from '../composables/useState';
defineProps({
  keyLetter: {
    type: String
  },
  keyColor: {
    type: String
  }
})
</script>
<template>
  <div 
    class="key special-key" 
    v-if="keyLetter === 'ENTER-KEY' || keyLetter === 'DELETE-KEY'"
    @click="addWord(keyLetter)">
    {{ keyLetter.replace('-KEY', '') }}
  </div>
  <div 
    v-else 
    class="key"
    :class="{ 
      'neutral-key': keyColor === 'neutral',
      'orange-key': keyColor === 'orange',
      'green-key': keyColor === 'green',
    }" 
    @click="addWord(keyLetter)">
      {{ keyLetter }}
  </div>
</template>
<style>
.key {
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  margin: 2px;
  text-align: center;
  width: 12px;
  cursor: pointer;
}

.neutral-key {
  background-color: #718093;
  border: 2px solid #718093;
}

.orange-key {
  background-color: #E1B12C;
  border: 2px solid #E1B12C;
}

.green-key {
  background-color: #44BD32;
  border: 2px solid #44BD32;
}

.special-key {
  width: 35px;
  height: 23px;
  font-size: 9px;
  line-height: 24px;
  background-color: #718093;
  border: 2px solid #718093;
}
</style>
