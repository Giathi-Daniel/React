import React from "react";
import NavBar from "./Components/Navbar";
import MainContent from "./Components/Main";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <MainContent />
    </div>
  );
}
export default App;
