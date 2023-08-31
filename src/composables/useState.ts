import { ref, reactive } from 'vue';
import { fullWordsList } from '../constants/five-letter-words';

const defaultGridWordsValue = ['', '', '', '', '', ''];
const defaultCompleteWordsValue = [false, false, false, false, false, false]

export const gridWords = ref(defaultGridWordsValue);
export const currentWord = ref('');
export const wordsCompleted = ref(defaultCompleteWordsValue);
export const alertInfo = reactive({
  show: false,
  message: ''
});

export const newGame = () => {
  const randomIndex = Math.floor(Math.random() * fullWordsList.length - 1);
  gridWords.value = defaultGridWordsValue;
  wordsCompleted.value = defaultCompleteWordsValue;
  currentWord.value = fullWordsList[randomIndex];
  // console.log(fullWordsList[randomIndex]);
};

export const addWord = (word: string) => {
  const row = wordsCompleted.value.findIndex((completed: string) => !completed);
  if(word === 'ENTER') {
    console.log(gridWords.value[row]);
    if(gridWords.value[row].length < 5) {
      displayTemporalAlert('No enough words.');
      return;
    }

    if(!fullWordsList.includes(gridWords.value[row])) {
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
