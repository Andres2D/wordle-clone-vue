import { getRandomNumber } from '@/helpers/random';
import { ref, reactive } from 'vue';
import { fullWordsList } from '../constants/five-letter-words';

const currentTry = ref(0);
export const gridWords = ref([[],[],[],[],[],[]]);
export const currentWord = ref('');
export const alertInfo = reactive({
  show: false,
  message: ''
});
export const guessedWords = ref([]);
export const existingWords = ref([]);

export const newGame = () => {
  const randomIndex = getRandomNumber(fullWordsList.length - 1);
  currentTry.value = 0;
  currentWord.value = fullWordsList[randomIndex];
  console.log(currentWord.value);
};

export const addWord = (word: string) => {
  if(word === 'ENTER-KEY') {
    if(gridWords.value[currentTry.value].length < 5) {
      displayTemporalAlert('No enough words.');
      return;
    }

    if(!fullWordsList.includes(gridWords.value[currentTry.value].join(''))) {
      displayTemporalAlert('No in words list.')
      return;
    }
    defineKeyCategory(currentTry.value);
    currentTry.value += 1;
    return;
  }
  
  if(word === 'DELETE-KEY') {
    const deleteWord = gridWords.value[currentTry.value].length > 0 
      ? gridWords.value[currentTry.value].slice(0, gridWords.value[currentTry.value].length - 1)
      : gridWords.value[currentTry.value]; 
    gridWords.value[currentTry.value] = deleteWord;
  } else if(gridWords.value[currentTry.value].length === 5) {
    return;
  } else {
    const nextValIndex = gridWords.value[currentTry.value].length;
    gridWords.value[currentTry.value][nextValIndex] = word;
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

const defineKeyCategory = (row: number) => {
  const addedWord = gridWords.value[row];
  const correctWord = currentWord.value.split('');
  
  const filterCorrectWords = addedWord.filter((w: string, index: number) => w === correctWord[index]);
  const includedWords: string[] = [];
  addedWord.forEach((w: string, index: number) => {
    if(correctWord.includes(w) && correctWord[index] !== w) {
      includedWords.push(w);
    }
  });
  
  guessedWords.value[currentTry.value] = [...filterCorrectWords];
  existingWords.value[currentTry.value] = [...includedWords];
  
  console.log(guessedWords.value);
  console.log(existingWords.value);
}
