import { reactive } from "vue";
import { Order, type Meal } from "./domain/meal";

export const order = reactive(new Order());

export function addToOrder(meal: Meal, quantity: number) {
    const existingItem = order.meals.find(item => item.meal.name === meal.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        order.meals.push({
            meal,
            quantity
        });
    }
}

export function validateOrder(){
    alert('frf')
}