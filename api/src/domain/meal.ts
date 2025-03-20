export type Meal = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
};

export type mealFilter = {
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
  id: string;
  meals: MeadlOrder[];
  status: OrderStatus;

  constructor() {
    this.meals = [];
    this.status = OrderStatus.Pending;
  }

  get price(): number {
    return this.meals.reduce((total, item) => total + item.meal.price * item.quantity, 0);
  }
};

export enum OrderStatus  {
    Pending = 'PENDING',
    Cooking = 'COOKING',
    Ready = 'READY',
};

export type OrderInput = {
  name: string;
  meals: {
    mealId: number;
    quantity: number;
  }[];
};

//get MENU
// Add order
// Get Orders
// Update Order
// Subscrition New Order