<script lang="ts" setup>

import { ref } from "vue";
import { fetchMenu } from "../api";

// Définition de la query GraphQL


const filters = ref<any>({
  category: null,
  minPrice: null,
  maxPrice: null
})

// Exécution de la requête GraphQL
const menu = await fetchMenu(filters.value)
const categories = ref<string[]>([...new Set(menu.map((meal: any) => meal.category))].sort() as string[])

</script>
<template>
  <div>
    <h2>Le menu</h2>
    <div>
      <ul>
        <li v-for="category in categories">
          <h3>{{ category }}</h3>
        </li>
      </ul>
      <ul>
        <li v-for="meal in menu" :key="meal.id">
          <h3>{{ meal.name }} - {{ meal.price }}$</h3>
          <p>{{ meal.description }}</p>
          <p>Ingrédients : {{ meal.ingredients.join(", ") }}</p>
        </li>
      </ul>
    </div>
    <div></div>
  </div>


</template>