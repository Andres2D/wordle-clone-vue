import { ref } from 'vue';

export const gridWords = ref(['', '', '', '', '', '']);
export const currentWord = 'WEIRD';
const wordsCompleted = ref([false, false, false, false, false, false]);
const wordsList = ['WEIRD', 'BLACK', 'WHITE', 'WRITE'];

export const addWord = (word: string) => {
  
  const row = wordsCompleted.value.findIndex((completed: string) => !completed);
  if(word === 'ENTER') {
    if(!wordsList.includes(gridWords.value[row])) {
      return;
    }
    
    wordsCompleted.value[row] = true;
    return;
  }
  
  if(word === 'DELETE') {
    const deleteWord = gridWords.value[row].length > 0 
      ? gridWords.value[row].slice(0, gridWords.value[row].length - 1)
      : gridWords.value[row]; 
    gridWords.value[row] = deleteWord;
  } else if(gridWords.value[row].length === 5) {
    return;
  } else {
    gridWords.value[row] += word; 
  }
};
