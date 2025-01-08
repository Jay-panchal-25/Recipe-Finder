import React, { useEffect, useState } from "react";

function Favorites() {
  const [recipe, setRecipe] = useState();
  useEffect(() => {}, []);

  if (!recipe) {
    return (
      <div className="text-center text-lg text-red-500">
        No recipe data available.
      </div>
    );
  }

  return <div></div>;
}

export default Favorites;
