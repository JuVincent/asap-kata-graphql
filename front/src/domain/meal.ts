export type Meal = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
};

export type MealFilter = {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
}

export type MeadlOrder = {
  meal: Meal;
  quantity: number;
};
export class Order 
{
  id: String;
  meals: MeadlOrder[];
  status: OrderStatus;

  constructor() {
    this.meals = [];
    this.status = OrderStatus.Pending;
  }

  get price(): Number {
    return this.meals.reduce((total, item) => total + item.meal.price * item.quantity, 0);
  }
};

export enum OrderStatus  {
    Pending = 'PENDING',
    Cooking = 'COOKING',
    Ready = 'READY',
};

export type OrderInput = {
  name: String;
  meals: {
    mealId: Number;
    quantity: Number;
  }[];
};

//get MENU
// Add order
// Get Orders
// Update Order
// Subscrition New Order