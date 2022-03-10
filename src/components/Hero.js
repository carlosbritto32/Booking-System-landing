import React from "react";
import "../style/Hero.css";
import { Header } from "./Header";

const Hero = () => {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero--text-container">
        <h1>
          Encuentra los mejores <br />
          lugares para visitar
        </h1>
        <br />
        <p>Este es un texto cualquiera haha</p>
      </div>
    </div>
  );
};

export { Hero };
