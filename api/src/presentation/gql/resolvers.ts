import { RestaurantRepository } from "../../infrastructure/database/repository";
import { logger } from "../../logger";


export const resolvers = {

  Query: {
    menu(parent, args, contextValue, info) {
        const repo = new RestaurantRepository();
        return repo.getMeals(args.filter);
    },

  },

};