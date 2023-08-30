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

    if(gridWords.value[row].length < 5) {
      displayTemporalAlert('No enough words.');
      return;
    }

    if(!wordsList.includes(gridWords.value[row])) {
      displayTemporalAlert('No in words list.')
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

const displayTemporalAlert = (message: string) => {
  alertInfo.show = true,
  alertInfo.message = message;

  setTimeout(() => {
    alertInfo.show = false,
    alertInfo.message = '';
  }, 1000);
};
