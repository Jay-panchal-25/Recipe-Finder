import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="bg-gray-800 p-6 text-white flex">
        <h1 className="text-2xl">Recipe Finder</h1>
        <div className="flex ">
          <Link to="/AllRecipes">All Recipes</Link>
          <Link to="/Favorites">Favorites</Link>
        </div>
      </header>
    </>
  );
}

export default Header;
