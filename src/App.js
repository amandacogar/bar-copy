import React from "react";

import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
    </div>
  );
}
export default App;
