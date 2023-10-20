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
import Alert from './AlertComponent.vue';
import { alertInfo } from '@/composables/alertState';

onMounted(() => {
  newGame();
})

const getBoxColorByPosition = (row: number, column: number) => {
  let color = '';
  if(guessedWords.value[row] || existingWords.value[row]) {
    if(guessedWords.value[row].includes(gridWords.value[row][column])) {
      color = 'green';
    }

    if(existingWords.value[row].includes(gridWords.value[row][column])) {
      color = 'orange';
    }

    if(
      guessedWords.value[row].includes(gridWords.value[row][column]) &&
      existingWords.value[row].includes(gridWords.value[row][column])
    ) {
      const isCorrectIndex = currentWord.value.split('')[column] === guessedWords.value[row][column];
      color = isCorrectIndex ? 'green' : 'orange';
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
