<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header__title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>