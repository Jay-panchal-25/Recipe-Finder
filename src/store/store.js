import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from "./RecipeSlice";
const store = new configureStore({
  reducer: {
    recipe: RecipeReducer,
  },
});

export default store;
