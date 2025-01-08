import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: [],
  },
  reducers: {
    setRecipe(state, action) {
      state.recipe.push(action.payload);
      if (state.recipe) {
        console.log("recipe is set");
      }
    },
    clearRecipe(state) {
      state.recipe = [];
    },
  },
});

export const { setRecipe, clearRecipe } = RecipeSlice.actions;

export default RecipeSlice.reducer;
