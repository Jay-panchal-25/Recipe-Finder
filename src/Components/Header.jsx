import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Recipe Finder
          </Link>
        </h1>
        <nav className="flex space-x-6">
          <Link
            to="/AllRecipes"
            className="text-lg hover:text-gray-400 transition-colors"
          >
            All Recipes
          </Link>
          <Link
            to="/Favorites"
            className="text-lg hover:text-gray-400 transition-colors"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
