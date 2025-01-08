import React from "react";
import { useLocation } from "react-router";
import { FaHeart } from "react-icons/fa";
function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {}; // Retrieve passed state

  if (!recipe) {
    return (
      <div className="text-center text-lg text-red-500">
        No recipe data available.
      </div>
    );
  }

  const addToFav = (recipe) => {
    alert("Recipe added to Favorites!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
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

          <div className="flex flex-col space-y-4">
            <FaHeart onClick={() => addToFav(recipe)} />

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

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Ingredients:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Instructions:
            </h2>
            <p className="text-lg text-gray-600">{recipe.instructions}</p>
            <div className="flex justify-between text-lg text-gray-600">
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
