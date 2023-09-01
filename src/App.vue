<script setup lang="ts">
import Header from './components/HeaderComponent.vue'; 
import Grid from './components/GridComponent.vue';
import Keyboard from './components/KeyboardComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import { modalRef, toggleModal } from './composables/useState';
</script>

<template>
  <section class="container">
    <Header />
    <Grid />
    <Keyboard />
    <ModalComponent v-if="modalRef" />
    <button 
      class="menu-button"
      @click="toggleModal(true)"
    >Menu</button>
  </section>
</template>

<style lang="scss">
.container {
  margin: 20px auto;
  max-width: 370px;
  width: 100%;

  .menu-button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #718093;
    border: 2px solid #718093;
    transition: all 300ms;
    width: 100%;
  }
}
</style>
