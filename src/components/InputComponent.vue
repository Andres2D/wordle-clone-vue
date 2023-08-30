<script setup lang="ts">
defineProps({
  word: {
    type: String,
  },
  color: {
    type: String
  }
})
</script>
<template>
  <div 
    class="box" 
    :class="{ 'correct': color === 'green', 'wrong-place': color === 'orange' }"
  >{{ word }}</div>
</template>  
<style lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  text-align: center;
  width: 45px;
  min-height: 45px;
  font-size: 25px;
}
.correct {
  background-color: #44BD32;
  border-color: #44BD32;
}

.wrong-place {
  background-color: #E1B12C;
  border-color: #E1B12C;
}
</style>
