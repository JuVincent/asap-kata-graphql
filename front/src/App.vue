<script setup lang="ts">
import MenuWithFilters from './components/MenuWithFilters.vue';
import Menu from './components/MenuWithFilters.vue'
</script>

<template>
  <div class="app">
    <div class="header">
      <h1>Julien VINCENT le restaurant, un rêve devenu réalité</h1>
    </div>
    <div class="content">
      <Suspense>
        <MenuWithFilters />
      </Suspense>

    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.header {
  height: 50px
}

.content {
  flex: 1;
  background-color: tomato;
  display: flex;
}
</style>
