import { Meal, mealFilter, OrderInput, Order } from "../../domain/meal";
import { meals } from "./data";
import { DbMeal } from "./model";

export class RestaurantRepository {
    
    getMeals(filter?: mealFilter): Meal[] {
        let result: DbMeal[]= meals

        if(!filter)
            return result; 
        
        if (filter.category) {
            result = meals.filter(meal => meal.category === filter.category)
        }

        if(filter.minPrice) {
            result = result.filter(meal => meal.price >= filter.minPrice)
        }

        if(filter.maxPrice) {
            result = result.filter(meal => meal.price <= filter.minPrice)
        }

        return meals.map<Meal>((dbMeal) => ({...dbMeal}))
    }

    createOrder(input: OrderInput): Order {
        let result = new Order()
        result.name = input.name;
        input.meals.forEach((mealOrder) => {
            const dbMeal = meals.find(meal => meal.id === mealOrder.mealId)
            if (dbMeal) {
                result.meals.push({
                    meal: {...dbMeal},
                    quantity: mealOrder.quantity
                })
            }
        })
        return result
    }
    
    updateOrder(order: Order): Order {
        return order
    }
}