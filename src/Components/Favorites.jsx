import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

function Favorites() {
  const [recipes, setRecipes] = useState(null);

  const item = useSelector((state) => state.recipe.recipe);

  useEffect(() => {
    setRecipes(item);
  }, [item]);

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-xl font-semibold text-red-500">
          No favorite recipes found.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Your Favorites
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
