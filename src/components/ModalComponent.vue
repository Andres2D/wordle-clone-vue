<script setup lang="ts">
import { toggleModal } from '@/composables/modalState';
import { 
  newGame, 
  gameStatus,
  currentWord 
} from '../composables/wordState';

const showSummary = () => {
  return gameStatus.value !== 'playing';
}

const getMessage = () => {
  return gameStatus.value === 'win' ? 'You win!' : 'You lose!'
};

const getCurrentWord = () => {
  return currentWord.value;
}

</script>
<template>
  <div class="backdrop">
    <div class="modal">
      <h1 class="modal-title">Menu</h1>
      <h1 class="modal-title" v-if="showSummary()">{{getMessage()}}</h1>
      <h2 class="modal-subtitle" v-if="showSummary()">Word: {{ getCurrentWord() }}</h2> 
      <button 
        class="button play"
        @click="newGame()"
      >Play again</button>
      <button 
        class="button close"
        @click="toggleModal(false)"
      >Close</button>
    </div>
  </div>
</template>
<style lang="scss">
.backdrop {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);

  .modal {
    text-align: center;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 8px;
    width: 80%;
    max-width: 280px;

    .modal-title,
    .modal-subtitle {
      background-color: #fefefe;
      color: black;
    }

    .modal-subtitle {
      font-size: 20px;
    }

    .button {
      margin: 10px;
      margin-top: 20px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }

    .play {
      background-color: #44BD32;
      border: 2px solid #44BD32;
      transition: all 300ms;
      
      &:hover {
        background-color: white;
        color: #44BD32;
      }
    }
    
    .close {
      background-color: #E74C3C;
      border: 2px solid #E74C3C;
      transition: all 300ms;

      &:hover {
        background-color: white;
        color: #E74C3C;
      }
    }
  }
}
</style>
../composables/wordState