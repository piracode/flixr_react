// Hero.js
import React from "react";
import HeroContent from "./HeroContent";

const Hero = ({ moviePosterUrl }) => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={moviePosterUrl} alt="" className="hero-image" />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
