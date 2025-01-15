import { getRandomNumber } from '@/helpers/random';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { fullWordsList } from '../constants/five-letter-words';
import { toggleModal } from './modalState';
import { displayTemporalAlert } from './alertState';

const urlDictionaryApi = 'https://api.dictionaryapi.dev/api/v2/entries/en';
export const currentTry = ref(0);
export const gridWords: Ref<any[]> = ref([[],[],[],[],[],[]]);
export const currentWord: Ref<string> = ref('');
export const guessedWords: Ref<any[]> = ref([]);
export const existingWords: Ref<any[]> = ref([]);
export const wrongLetters: Ref<any[]> = ref([]);

export const gameStatus: Ref<string> = ref('playing');

export const newGame = () => {
  const randomIndex = getRandomNumber(fullWordsList.length - 1);
  currentTry.value = 0;
  currentWord.value = fullWordsList[randomIndex];
  gridWords.value = [[],[],[],[],[],[]];
  guessedWords.value = [];
  existingWords.value = [];
  wrongLetters.value = [];
  gameStatus.value = 'playing';
  toggleModal(false);
};

export const addLetter = (letter: string) => {

  if(gameStatus.value !== 'playing' || gridWords.value[currentTry.value].length === 5) {
    return;
  }
  
  gridWords.value[currentTry.value].push(letter);
};

export const removeLetter = () => {
  if(gameStatus.value !== 'playing') {
    return;
  }
  gridWords.value[currentTry.value].pop();
};

export const evaluateWord = async() => {
  if(gameStatus.value !== 'playing') {
    return;
  }

  if(gridWords.value[currentTry.value].length < 5) {
    displayTemporalAlert('No enough words.');
    return;
  }

  const dictionaryResponse = await fetch(`${urlDictionaryApi}/${gridWords.value[currentTry.value].join('')}`);

  if(!dictionaryResponse.ok) {
    displayTemporalAlert('No in words list.');
    return;
  }
  
  defineKeyCategory();
  validateEndGame();
  
  currentTry.value += 1;
  return;
};

const validateEndGame = () => {
  if(gridWords.value[currentTry.value].join('') === currentWord.value) {
    showModalSummary('win');
    return;
  }
  
  if(currentTry.value === 5 && gridWords.value[currentTry.value].length === 5) {
    showModalSummary('lose');
    return;
  }
}

const showModalSummary = (status: string) => {
  toggleModal(true);
  gameStatus.value = status;
};

const defineKeyCategory = () => {
  const row = currentTry.value;
  const addedWord = gridWords.value[row];
  const correctWord = currentWord.value.split('');
  const wrongLettersList: string[] = []; 
  
  const filterCorrectWords = addedWord.filter((w: string, index: number) => w === correctWord[index]);
  const includedWords: string[] = [];
  addedWord.forEach((w: string, index: number) => {
    if(correctWord.includes(w)) {
      if(correctWord[index] !== w) {
        includedWords.push(w);
      }
    }else {
      wrongLettersList.push(w);
    }
  });
  
  guessedWords.value[currentTry.value] = [...filterCorrectWords];
  existingWords.value[currentTry.value] = [...includedWords];
  wrongLetters.value[currentTry.value] = [...wrongLettersList];
}
 