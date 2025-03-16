export type DbMeal= {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    ingredients: string[];
}

export type DbOrder = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    status: string;
}

export type DbOrderMeal = {
    orderId: number;
    mealId: string;
    quantity: number;
}