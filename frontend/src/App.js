import React from "react";

import "./App.css";
import HeroSection from "./compnents/HeroSection";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";

function App() {
  return (
      <div className="App">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
  );
}

export default App;