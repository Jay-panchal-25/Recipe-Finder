import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function AllRecipes() {
  const [recipes, setRecipes] = useState("");

  // Fetch recipes from an API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes").then((recipes) => {
      recipes.json().then((data) => {
        setRecipes(data.recipes);
      });
    });
  }, []);
  if (!recipes || recipes.length === 0) {
    return <p>Loading recipes...</p>;
  }

  return (
    <div className="flex gap-5  flex-wrap m-5">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}

export default AllRecipes;
