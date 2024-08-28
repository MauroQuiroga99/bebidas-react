import { createSlice } from "@reduxjs/toolkit";
import {
  FormDrink,
  Notification,
  RecipeAPIResponse,
  ResponseDrink,
} from "../../types";

type RecipeState = {
  categories: string[];
  ingredients: FormDrink;
  drinks: ResponseDrink[];
  recipes: RecipeAPIResponse | null;
  modal: boolean;
  favorites: RecipeAPIResponse[];
  notification: Notification;
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
  favorites: [],
  notification: {
    text: "",
    error: false,
    show: false,
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
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      localStorage.setItem("fav", JSON.stringify(action.payload));
    },
    setNotification: (state, action) => {
      state.notification = {
        text: action.payload.text,
        error: action.payload.error,
        show: true,
      };
    },

    clearNotification: (state) => {
      state.notification = {
        text: "",
        error: false,
        show: false,
      };
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
  setFavorites,
  setNotification,
  clearNotification,
} = drinkSlice.actions;
export default drinkSlice.reducer;
