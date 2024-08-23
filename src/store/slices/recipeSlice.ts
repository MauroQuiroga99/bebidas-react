import { createSlice } from "@reduxjs/toolkit";

type RecipeState = {
  categories: string[];
};

const initialState: RecipeState = {
  categories: [],
};

const drinkSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = drinkSlice.actions;
export default drinkSlice.reducer;
