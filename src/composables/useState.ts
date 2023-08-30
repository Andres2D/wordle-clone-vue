import { ref, reactive } from 'vue';

export const gridWords = ref(['', '', '', '', '', '']);
export const currentWord = ref('WEIRD');
export const wordsCompleted = ref([false, false, false, false, false, false]);
export const alertInfo = reactive({
  show: false,
  message: ''
});
const wordsList = ['WEIRD', 'BLACK', 'WHITE', 'WRITE'];

export const addWord = (word: string) => {
  
  const row = wordsCompleted.value.findIndex((completed: string) => !completed);
  if(word === 'ENTER') {
    if(!wordsList.includes(gridWords.value[row])) {
      console.log('update');
      alertInfo.show = true,
      alertInfo.message = 'No in words list.'
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
