<script setup lang="ts">
</script>

<template>
  <header class="header">
    <h1 class="title">W<span class="green">o</span>rdl<span class="orange">e</span></h1>
    <span class="subtitle">clone</span>
  </header>
</template> 

<style lang="scss">
.header {
  text-align: center;
  position: relative;

  .title {
    font-weight: 900;
    font-size: 50px;

    .orange {
      color: #F1C40F;
    }

    .green {
      color: #44BD32;
    }
  }
}

.subtitle {
  font-size: 30px;
  position: absolute;
  top: 0;
  background: transparent;
  color: white;
  right: 6px;
  transform: rotate(28deg);
}
</style>
