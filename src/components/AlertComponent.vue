<script setup lang="ts">
defineProps({
  message: {
    type: String
  }
})
</script>
<template>
  <p class="alert">{{ message }}</p>
</template>
<style lang="scss">
.alert {
  position: absolute;
  background-color: white;
  color: black;
  padding: 5px;
  border-radius: 8px;
  top: 10px;
  right: 73px;
}
</style>
