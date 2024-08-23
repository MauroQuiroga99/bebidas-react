import { RootState } from "../index";

export const getCategories = (state: RootState) => {
  return state.recipe.categories;
};

export const getIngredients = (state: RootState) => {
  return state.recipe.ingredients;
};
