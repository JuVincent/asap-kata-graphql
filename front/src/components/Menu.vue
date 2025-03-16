<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import gql from 'graphql-tag'
// Définition de la query GraphQL
const GET_MENU = gql`
  query GetMenu {
    menu {
      id
      name
      price
      description
      ingredients
    }
  }
`;

// Exécution de la requête GraphQL
const { result } = useQuery(GET_MENU);


</script>
<template>
    <div>
        <h2>Le menu</h2>
        <div v-if="result">
            <ul>
                <li v-for="meal in result?.menu" :key="meal.id">
                    <h3>{{ meal.name }} - {{ meal.price }}$</h3>
                    <p>{{ meal.description }}</p>
                    <p>Ingrédients : {{ meal.ingredients.join(", ") }}</p>
                </li>
            </ul>
        </div>
        <div></div>
    </div>


</template>