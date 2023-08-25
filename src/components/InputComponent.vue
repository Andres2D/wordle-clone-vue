<script setup lang="ts">
defineProps({
  word: {
    type: String,
  }
})
</script>
<template>
  <div class="box">{{ word }}</div>
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
</style>
