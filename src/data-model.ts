export type ingredientRaw = {
  id: string;
  name: string;
  price: number;
  size: number;
  measure: Measure;
  category?: Category;
  sku?: string;
  supplier?: string;
};

export type ingredientPortion = {
  ingredientId: string;
  amount: number;
};

export type recipe = {
  id: string;
  name: string;
  ingredients: ingredientPortion[];
  servings: number;
};

export class Meal {
  constructor(public recipe: recipe) {}

  // get name() { }

  // get numberOfServings() { }

  // get ingredients() { }

  // get totalCost() { }

  // get costPerServing() { }

  // get numberOfServings() { }
}

export enum Category {
  Produce = "Produce",
  Dairy = "Dairy",
  Meat = "Meat",
  Seafood = "Seafood",
  DryGoods = "Dry Goods",
}
export enum Measure {
  Grams = "g",
  Milliliters = "ml",
  Each = "Each",
}
