import React from "react";
import { useLocation, useNavigate } from "react-router";
import { FaHeart, FaArrowLeft } from "react-icons/fa";
import { setRecipe } from "../store/RecipeSlice";
import { useDispatch } from "react-redux";

function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {}; // Retrieve passed state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div className="text-center text-lg text-red-500 mt-10">
        No recipe data available.
      </div>
    );
  }

  const addToFav = (recipe) => {
    dispatch(setRecipe(recipe));
    alert("Recipe added to Favorites!");
  };

  const backTo = () => {
    navigate("/AllRecipes");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <button
        onClick={backTo}
        className="flex items-center bg-red-500 text-white p-3 rounded-lg shadow-md mb-6 hover:bg-red-400 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to All Recipes
      </button>

      {/* Recipe Details */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 md:h-[450px] overflow-hidden rounded-lg shadow-md">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Recipe Info */}
          <div className="flex flex-col space-y-4">
            <div
              onClick={() => addToFav(recipe)}
              className="text-red-500 cursor-pointer text-2xl hover:text-red-400 transition-colors"
            >
              <FaHeart />
            </div>
            <h1 className="text-3xl font-semibold text-gray-800">
              {recipe.name}
            </h1>
            <p className="text-lg text-gray-600">Cuisine: {recipe.cuisine}</p>
            <p className="text-lg text-gray-600">
              Difficulty: {recipe.difficulty}
            </p>
            <p className="text-lg text-gray-600">
              Calories per Serving: {recipe.caloriesPerServing}
            </p>
            <p className="text-lg text-gray-600">Rating: {recipe.rating} / 5</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredients:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-5 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Instructions:
            </h2>
            <p className="text-lg text-gray-600">{recipe.instructions}</p>
            <div className="flex justify-between text-lg text-gray-600 mt-4">
              <div>Servings: {recipe.servings}</div>
              <div>Cook Time: {recipe.cookTimeMinutes} min</div>
              <div>Prep Time: {recipe.prepTimeMinutes} min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
