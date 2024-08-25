import { createSlice } from "@reduxjs/toolkit";
import { FormDrink, ResponseDrink } from "../../types";

type RecipeState = {
  categories: string[];
  ingredients: FormDrink;
  drinks: ResponseDrink[];
  recipes: string;
};

const initialState: RecipeState = {
  categories: [],
  ingredients: {
    category: "",
    ingredient: "",
  },
  drinks: [],
  recipes: "",
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
    setRecipes: (state, action) => {
      state.recipes = action.payload;
      console.log("desde setRecipies");
    },
  },
});

export const { setCategories, setIngredients, setDrinks } = drinkSlice.actions;
export default drinkSlice.reducer;
