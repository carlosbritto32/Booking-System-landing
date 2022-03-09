import React from "react";
import "../style/Hero.css";
import { SearchBar } from "./SearchBar";

const Hero = () => {
  return (
    <div className="hero-image">
      <SearchBar />
      <div className="hero-text">
        <h2>Encuentra los mejores</h2>
        <h2> lugares para visitar</h2>
        <p>Este es un texto cualquiera haha</p>
      </div>
    </div>
  );
};

export { Hero };
