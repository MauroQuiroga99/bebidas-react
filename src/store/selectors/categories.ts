import { RootState } from "../index";

export const getCategories = (state: RootState) => {
  return state.recipe.categories;
};

export const getIngredients = (state: RootState) => {
  return state.recipe.ingredients;
};

export const getDrinks = (state: RootState) => {
  return state.recipe.drinks;
};

export const getRecipes = (state: RootState) => {
  return state.recipe.recipes;
};

export const getModalState = (state: RootState) => {
  return state.recipe.modal;
};
