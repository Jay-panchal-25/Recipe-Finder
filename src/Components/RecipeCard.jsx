import React from "react";
import { useNavigate } from "react-router";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const readMore = (recipe) => {
    navigate("/RecipePage", { state: { recipe } });
  };

  return (
    <div className="max-w-sm mx-auto bg-slate-500 rounded-lg shadow-lg overflow-hidden p-4 ">
      <img
        className="w-full h-56 object-cover"
        src={recipe.image}
        alt={recipe.name}
      />
      <div>Name:- {recipe.name}</div>
      <div> {recipe.rating}</div>
      <button
        className="bg-yellow-400 p-3 rounded-lg border-red-800  border-4"
        onClick={() => readMore(recipe)}
      >
        Read more
      </button>
    </div>
  );
}

export default RecipeCard;
