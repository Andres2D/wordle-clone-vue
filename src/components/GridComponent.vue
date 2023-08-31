<script setup lang="ts">
import { onMounted } from 'vue';
import InputComponent from './InputComponent.vue';
import { 
  gridWords, 
  wordsCompleted, 
  currentWord, 
  alertInfo,
  newGame
} from '../composables/useState';
import Alert from './AlertComponent.vue';

onMounted(() => {
  newGame();
})

const getBoxColorByPosition = (row: number, column: number) => {
  const currentWordArray: string[] = currentWord.value.split('');
  const currentLetter = gridWords.value[row][column];
  const containsLetter = currentWordArray.includes(currentLetter);
  const isRepeatedLetter = currentWordArray.filter(letter => letter === currentLetter).length > 1;

  if(wordsCompleted.value[row]) {
    return currentWordArray[column] === currentLetter
      ? 'green' 
      : ( containsLetter && isRepeatedLetter ? 'orange' : '');
  }
  return '';
}

</script>
<template>
  <container class="grid">
    <Alert
      v-if="alertInfo.show" 
      :message="alertInfo.message"
    />
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
  position: relative;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
}
</style>
