import { RestaurantRepository } from "../../infrastructure/database/repository";

export const resolvers = {

  Query: {

    menu(parent, args, contextValue, info) {

        const repo = new RestaurantRepository();
        return repo.getMeals();

    },

  },

};