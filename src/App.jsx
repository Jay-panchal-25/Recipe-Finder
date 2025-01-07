import { useState } from "react";

import "./App.css";
import RecipeCard from "./Components/RecipeCard";
import AllRecipes from "./Components/AllRecipes";
import { Link, Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/AllRecipes">app</Link>

      <Outlet />
    </>
  );
}

export default App;
