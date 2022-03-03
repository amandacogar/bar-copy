import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
