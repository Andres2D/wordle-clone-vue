<script setup lang="ts">
import { addWord } from '../composables/useState';
defineProps({
  keyLetter: {
    type: String
  }
})
</script>
<template>
  <div 
    class="key special-key" 
    v-if="keyLetter === 'ENTER' || keyLetter === 'DELETE'"
    @click="addWord(keyLetter)">
    {{ keyLetter }}
  </div>
  <div 
    v-else 
    class="key" 
    @click="addWord(keyLetter)">
      {{ keyLetter }}
  </div>
</template>
<style>
.key {
  display: inline-block;
  border: 2px solid #718093;
  padding: 8px;
  border-radius: 8px;
  background-color: #718093;
  margin: 2px;
  text-align: center;
  width: 12px;
  cursor: pointer;
}

.special-key {
  width: 35px;
  height: 23px;
  font-size: 9px;
  line-height: 24px;
}
</style>
