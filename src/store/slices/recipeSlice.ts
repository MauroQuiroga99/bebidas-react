import { createSlice } from "@reduxjs/toolkit";
import { FormDrink } from "../../types";

type RecipeState = {
  categories: string[];
  ingredients: FormDrink;
  drinks: string[];
};

const initialState: RecipeState = {
  categories: [],
  ingredients: {
    category: "",
    ingredient: "",
  },
  drinks: [],
};

const drinkSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setDrinks: (state, action) => {
      state.drinks = action.payload;
    },
  },
});

export const { setCategories, setIngredients, setDrinks } = drinkSlice.actions;
export default drinkSlice.reducer;
