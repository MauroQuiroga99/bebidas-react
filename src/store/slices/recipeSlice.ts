import { createSlice } from "@reduxjs/toolkit";
import { FormDrink, RecipeAPIResponse, ResponseDrink } from "../../types";

type RecipeState = {
  categories: string[];
  ingredients: FormDrink;
  drinks: ResponseDrink[];
  recipes: RecipeAPIResponse | null;
  modal: boolean;
};

const initialState: RecipeState = {
  categories: [],
  ingredients: {
    category: "",
    ingredient: "",
  },
  drinks: [],
  recipes: null,
  modal: false,
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
    },
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});

export const {
  setCategories,
  setIngredients,
  setDrinks,
  setRecipes,
  openModal,
  closeModal,
} = drinkSlice.actions;
export default drinkSlice.reducer;
