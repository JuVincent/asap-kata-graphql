<script setup lang="ts">
import MenuWithFilters from './components/MenuWithFilters.vue';
import Menu from './components/Menu.vue'
import PassOrder from './components/PassOrder.vue';
</script>

<template>
  <Suspense>
    <div class="app">
      <div class="header">
        <h1>Julien VINCENT le restaurant, un rêve devenu réalité</h1>
      </div>
      <div class="content">

        <MenuWithFilters />


        <PassOrder />

      </div>
    </div>
  </Suspense>
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
  flex-direction: row;
}
</style>
