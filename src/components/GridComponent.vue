<script setup lang="ts">
import InputComponent from './InputComponent.vue';
import { 
  gridWords, 
  wordsCompleted, 
  currentWord, 
  alertInfo
} from '../composables/useState';

const getBoxColorByPosition = (row: number, column: number) => {
  const currentWordArray = currentWord.value.split('');
  const currentLetter = gridWords.value[row][column];
  const containsLetter = currentWordArray.includes(currentLetter);

  if(wordsCompleted.value[row]) {
    return currentWordArray[column] === currentLetter
      ? 'green' 
      : ( containsLetter ? 'orange' : '');
  }
  return '';
}

</script>
<template>
  <div v-if="alertInfo.show">
    <h1>{{ alertInfo.message }}</h1>
  </div>
  <container class="grid">
    <div 
      class="row"
      v-for="(_, i) in gridWords"
      :key="`row-${i}`"
    >
      <InputComponent 
        v-for="(_, index) in ['','','','','']"
        :word="gridWords[i][index]"
        :color="getBoxColorByPosition(i, index)"
        :key="`column-${index}`"
      />
    </div>
  </container>
</template>  
<style lang="scss">
.grid {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
}
</style>
