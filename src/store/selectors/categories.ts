import { RootState } from "../index";

export const getCategories = (state: RootState) => {
  return state.recipe.categories;
};
