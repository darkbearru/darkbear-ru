<script setup>
import {RouterView} from 'vue-router'
import Title from '@/components/Title.vue'
import MainNav from '@/components/MainNav.vue'</script>

<template>
  <header>
    <img class="my-photo" src="@/assets/my-photo.png" srcset="@/assets/my-photo@2x.png 2x"/>
    <div class="wrapper">
      <Title msg="Абраменко Алексей"/>
      <MainNav/>
    </div>
  </header>
  <RouterView/>
  
</template>

<style>
</style>
