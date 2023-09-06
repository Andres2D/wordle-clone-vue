import { getRandomNumber } from '@/helpers/random';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { fullWordsList } from '../constants/five-letter-words';
import { toggleModal } from './modalState';
import { displayTemporalAlert } from './alertState';

export const currentTry = ref(0);
export const gridWords: Ref<any[]> = ref([[],[],[],[],[],[]]);
export const currentWord: Ref<string> = ref('');
export const guessedWords: Ref<any[]> = ref([]);
export const existingWords: Ref<any[]> = ref([]);

export const gameStatus: Ref<string> = ref('playing');

export const newGame = () => {
  const randomIndex = getRandomNumber(fullWordsList.length - 1);
  currentTry.value = 0;
  currentWord.value = fullWordsList[randomIndex];
  gridWords.value = [[],[],[],[],[],[]];
  guessedWords.value = [];
  existingWords.value = [];
  gameStatus.value = 'playing';
  toggleModal(false);
};

export const addWord = (word: string) => {

  if(gameStatus.value !== 'playing') {
    return;
  }

  if(word === 'ENTER-KEY') {
    if(gridWords.value[currentTry.value].length < 5) {
      displayTemporalAlert('No enough words.');
      return;
    }

    if(!fullWordsList.includes(gridWords.value[currentTry.value].join(''))) {
      displayTemporalAlert('No in words list.')
      return;
    }
    defineKeyCategory();

    if(gridWords.value[currentTry.value].join('') === currentWord.value) {
      showModalSummary('win');
    }
    
    if(currentTry.value === 5 && gridWords.value[currentTry.value].length === 5) {
      showModalSummary('lose');
    }
    currentTry.value += 1;
    return;
  }
  
  if(word === 'DELETE-KEY') {
    gridWords.value[currentTry.value].pop();
  } else {
    if(gridWords.value[currentTry.value].length === 5) {
      return;
    }
    gridWords.value[currentTry.value].push(word);
  }

};

const showModalSummary = (status: string) => {
  toggleModal(true);
  gameStatus.value = status;
};

const defineKeyCategory = () => {
  const row = currentTry.value;
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
}
 