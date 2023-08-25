import { ref } from 'vue';

export const gridWords = ref(['', '', '', '', '']);

export const addWord = (word: string) => {
  const row = gridWords.value.findIndex((a: string) => a.length < 5);
  gridWords.value[row] += word; 
};
