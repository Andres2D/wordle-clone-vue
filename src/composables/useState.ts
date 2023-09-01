import { getRandomNumber } from '@/helpers/random';
import { ref, reactive } from 'vue';
import type { Ref } from 'vue';
import { fullWordsList } from '../constants/five-letter-words';

const currentTry = ref(0);
export const gridWords: Ref<any[]> = ref([[],[],[],[],[],[]]);
export const currentWord: Ref<string> = ref('');
export const alertInfo = reactive({
  show: false,
  message: ''
});
export const guessedWords: Ref<any[]> = ref([]);
export const existingWords: Ref<any[]> = ref([]);
export const modalRef: Ref<boolean> = ref(false);
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

export const toggleModal = (newValue: boolean) => {
  modalRef.value = newValue;
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

const showModalSummary = (status: string) => {
  toggleModal(true);
  gameStatus.value = status;
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
}
