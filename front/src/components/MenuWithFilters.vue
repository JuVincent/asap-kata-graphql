<script lang="ts" setup>

import { ref } from "vue";
import { fetchMenu } from "../api";
import type { Meal } from "../domain/meal";




const filters = ref<any>({
  category: null,
  minPrice: null,
  maxPrice: null
})

// Exécution de la requête GraphQL
const menu = ref<Meal[]>(await fetchMenu(filters.value))
const categories = ref<string[]>([...new Set(menu.value.map((meal: any) => meal.category))].sort() as string[])

async function setFilterCategory(category: string) {
  filters.value.category = category;
  const res = await fetchMenu(filters.value);
  console.log(res)
  menu.value = res
}

</script>
<template>
  <div>
    <h2>Le menu</h2>
    <div class="menu">
      <ul class="categories">
        <li v-for="category in categories">
          <img :src="`../assets/${category}.png`" alt="pizza" v-on:click="setFilterCategory(category)">
        </li>
      </ul>
      <ul class="meals">
        <li v-for="meal in menu" :key="meal.id" class="meal">
          <h3 class="meal-name">{{ meal.name }} - {{ meal.price }}$</h3>
          <p class="meal-description">{{ meal.description }}</p>
          <p class="meal-ingredients">Ingrédients : {{ meal.ingredients.join(", ") }}</p>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>
<style lang="scss">
.menu{
  width: 500px;
}
.categories { 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;

  img{
    width: 50px;
    height: 50px;

    &:hover{
      cursor: pointer;
    }
  }
}
.meal{
  list-style: none;
}
</style>
