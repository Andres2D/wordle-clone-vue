<script setup lang="ts">
import Header from './components/HeaderComponent.vue'; 
import Grid from './components/GridComponent.vue';
import Keyboard from './components/KeyboardComponent.vue';
</script>

<template>
  <section class="container">
    <Header />
    <Grid />
    <Keyboard />
  </section>
</template>

<style lang="scss">
.container {
  margin: 20px auto;
  max-width: 370px;
  width: 100%;
}
</style>
