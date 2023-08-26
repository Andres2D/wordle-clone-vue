<script setup lang="ts">
import InputComponent from './InputComponent.vue';
import { gridWords } from '../composables/useState';
</script>
<template>
  <container class="grid">
    <div 
      class="row"
      v-for="(_, i) in gridWords"
      :key="`row-${i}`"
    >
      <InputComponent 
        v-for="(_, index) in ['','','','','']"
        :word="gridWords[i][index]"
        :key="`column-${index}`"
      />
    </div>
  </container>
</template>  
<style lang="scss">
.grid {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
}
</style>
