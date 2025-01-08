import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import AllRecipes from "./Components/AllRecipes";
import RecipePage from "./Components/RecipePage";
import Favorites from "./Components/Favorites";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/AllRecipes" element={<AllRecipes />} />
      <Route path="/RecipePage" element={<RecipePage />} />
      <Route path="/Favorites" element={<Favorites />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
