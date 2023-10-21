<script setup lang="ts">
import { onMounted } from 'vue';
import InputComponent from './InputComponent.vue';
import { 
  gridWords,
  newGame,
  guessedWords,
  existingWords,
  currentTry,
  currentWord
} from '../composables/wordState';
import { indexOfAll } from '../helpers/basic';
import Alert from './AlertComponent.vue';
import { alertInfo } from '@/composables/alertState';

onMounted(() => {
  newGame();
})

const getBoxColorByPosition = (row: number, column: number) => {
  let color = '';
  const correctWordArray: string[] = currentWord.value.split('');
  const currentRowWord = gridWords.value[row];
  if(guessedWords.value[row] || existingWords.value[row]) { 
    if(correctWordArray[column] === currentRowWord[column]) {
      return 'green';
    }
    
    if(correctWordArray.includes(currentRowWord[column])) {
      const toRemoveArray: number[] = [];
      const inCorrectWord = indexOfAll(correctWordArray, currentRowWord[column]);
      const inGuessedWord = indexOfAll(currentRowWord, currentRowWord[column]);
      const guessedWordRealArray = inGuessedWord.slice(0, inCorrectWord.length);

      guessedWords.value[row].forEach((element: string) => {
        toRemoveArray.push(correctWordArray.indexOf(element));
      });

      const newCorrectArray = correctWordArray.filter((_, index) => {
        return toRemoveArray.indexOf(index) == -1;
      });

      if(newCorrectArray.includes(currentRowWord[column])) {
        return guessedWordRealArray[0] === column ? 'orange' : '';
      }
    }
  }
  return color;
}

const getWord = (x: number, y: number): string => {
  return gridWords.value[x][y] ?? '';
}

const completedAnimation = (row: number) => {
 return row < (currentTry.value - 1) || row === (currentTry.value - 1) ? true : false;
};

</script>
<template>
  <container class="grid">
    <Alert
      v-if="alertInfo.show" 
      :message="alertInfo.message"
    />
    <div 
      class="row"
      v-for="(_, i) in ['','','','','','']"
      :key="`row-${i}`"
    >
    <InputComponent 
      v-for="(_, index) in ['','','','','']"
      :class="{ 'completed': completedAnimation(i)}"
      :word="getWord(i, index)"
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

    .completed {
      transition: all 300ms;
      border-radius: 50%;
    }
  }
}
</style>
