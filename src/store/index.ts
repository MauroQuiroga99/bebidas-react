import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./slices/recipeSlice";

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
