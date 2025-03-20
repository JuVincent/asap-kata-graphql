<script lang="ts" setup>
import { fetchMenu } from "../api-v1";


const menu = await fetchMenu()

</script>
<template>
  <div>
    <h2>Le menu</h2>
    <div>
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