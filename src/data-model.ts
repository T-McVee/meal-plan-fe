// DATABASE types
export interface RecipeData {
  id: string;
  user_id: string;
  name: string;
  servings: number;
  yield: number;
  measure_id: string; // uuid
  created_at: string; // ISO date string
}

export interface PortionData {
  id: string;
  ingredient_id: string;
  recipe_id: string; // uuid
  measure_id: string; // uuid
  user_id: string; // uuid
  amount: number;
  created_at: string; // ISO date string
}

export interface MeasureData {
  id: string; // uuid
  unit_name: string;
  abbreviation: string;
  created_at: string; // ISO date string
}

export interface IngredientData {
  id: string; // uuid
  user_id: string; // uuid
  name: string;
  measure_id: string; // uuid
  size: number;
  cost: number; // currency
  sku: string | null;
  created_at: string; // ISO date string
}

export enum UnitOfMeasure {
  Grams = "g",
  Milliliters = "ml",
  Each = "Each",
}
