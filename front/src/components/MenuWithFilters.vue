<script lang="ts" setup>

import { ref } from "vue";
import { fetchMenu } from "../menu-service-v2";
import type { Meal } from "../domain/meal";
import { addToOrder } from "../order-service";




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
  menu.value = await fetchMenu(filters.value);
}



</script>
<template>
  <div class="menu">
    <h2>Le menu</h2>
    <div>
      <ul class="categories">
        <li v-for="category in categories">
          <img :src="`../assets/${category}.png`" alt="pizza" v-on:click="setFilterCategory(category)">
        </li>
      </ul>
      <ul class="meals">
        <li v-for="meal in menu" :key="meal.id" class="meal">
          <div class="meal-head">
            <h3 class="meal-name">{{ meal.name }} - {{ meal.price }}$</h3>
            <div v-on:click="addToOrder(meal, 1)">Ajouter à ma commande</div>
          </div>

          <p class="meal-description">{{ meal.description }}</p>
          <p class="meal-ingredients">Ingrédients : {{ meal.ingredients.join(", ") }}</p>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>
<style lang="scss">
.menu {
  width: 500px;
  padding: 10px 30px;
  border-right: 1px solid white;
}

.categories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;

  img {
    width: 50px;
    height: 50px;

    &:hover {
      cursor: pointer;
    }
  }
}

.meal {
  list-style: none;

  .meal-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
