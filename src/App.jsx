import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
