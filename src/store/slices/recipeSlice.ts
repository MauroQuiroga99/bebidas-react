import { createSlice } from "@reduxjs/toolkit";
import { formDrink } from "../../types";

type RecipeState = {
  categories: string[];
  ingredients: formDrink;
};

const initialState: RecipeState = {
  categories: [],
  ingredients: {
    category: "",
    ingredient: "",
  },
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
  },
});

export const { setCategories, setIngredients } = drinkSlice.actions;
export default drinkSlice.reducer;
