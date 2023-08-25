<script setup lang="ts">
import Header from './components/HeaderComponent.vue'; 
import Grid from './components/GridComponent.vue';
import { addWord } from './composables/useState';
</script>

<template>
  <section class="container">
    <Header />
    <Grid />
    <button @click="addWord('A')">A</button>
    <button @click="addWord('B')">B</button>
    <button @click="addWord('C')">C</button>
    <button @click="addWord('D')">D</button>
    <button @click="addWord('F')">F</button>
    <button @click="addWord('G')">G</button>
    <button @click="addWord('H')">H</button>
    <button @click="addWord('I')">I</button>
  </section>
</template>

<style lang="scss">
.container {
  margin: 20px auto;
  max-width: 280px;
  width: 100%;
}
</style>
