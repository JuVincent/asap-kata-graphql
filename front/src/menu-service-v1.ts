import type { Meal, MealFilter } from "./domain/meal";
import gql from "graphql-tag";
import client from './apolloClient'; 

const GET_MENU = gql`
  query GetMenu($category: String, $minPrice: Float, $maxPrice: Float) {
    menu(filter: { category: $category, minPrice: $minPrice, maxPrice: $maxPrice }) {
      id
      name
      price
      description
      ingredients
    }
  }
`;

// Fonction fetchMenu qui renvoie une promesse avec les résultats
export const fetchMenu = async (): Promise<Meal[]> => {
  try {
    const { data } = await client.query({
      query: GET_MENU,
    });

    return data.menu || [];
  } catch (error) {
    throw new Error('Erreur de requête');
  }
};