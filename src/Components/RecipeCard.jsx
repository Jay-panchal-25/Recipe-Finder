import React from "react";
import { useNavigate } from "react-router";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const readMore = (recipe) => {
    navigate("/RecipePage", { state: { recipe } });
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4 hover:shadow-xl transition-shadow">
      <img
        className="w-full h-56 object-cover rounded-t-lg"
        src={recipe.image}
        alt={recipe.name}
      />
      <div className="mt-4 text-lg font-semibold text-gray-800">
        {recipe.name}
      </div>
      <div className="text-gray-600 mt-2">Rating: {recipe.rating}</div>
      <button
        className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
        onClick={() => readMore(recipe)}
      >
        Read more
      </button>
    </div>
  );
}

export default RecipeCard;
