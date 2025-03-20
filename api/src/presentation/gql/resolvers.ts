import { Order } from "../../domain/meal";
import { RestaurantRepository } from "../../infrastructure/database/repository";
import { logger } from "../../logger";


export const resolvers = {

  Query: {
    menu(parent, args, contextValue, info) {
        const repo = new RestaurantRepository();
        return repo.getMeals(args.filter);
    },

  },
  Mutation: {
    validateOrder: (_: any, { order }: { order: { name: string; meals: { mealId: number; quantity: number }[] } }) => {
      const repo = new RestaurantRepository();
      if (!order.name.trim()) {
        throw new Error("Order name is required.");
      }

      if (order.meals.length === 0) {
        throw new Error("Order must contain at least one meal.");
      }

      // Construire la commande validée
      const validatedOrder = new Order();
      validatedOrder.id = 'AAAAA-BBBBB-CCCCC-DDDDD-EEEEE'; // Génération d'un ID unique
      validatedOrder.meals = order.meals.map(orderItem => {
        const meal = repo.getMeals().find(m => m.id === orderItem.mealId);
        if (!meal) {
          throw new Error(`Meal with ID ${orderItem.mealId} not found.`);
        }

        return { meal, quantity: orderItem.quantity };
      });

      return validatedOrder.id;
    },
  },

};