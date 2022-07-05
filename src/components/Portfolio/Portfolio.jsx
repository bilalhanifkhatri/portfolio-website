import React from "react";
import "./Portfolio.css";
import ME1 from "../../assets/portfolio1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME1} alt="The Personal Portfolio Website" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bilalhanifkhatri/portfolio-website" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://bilalhanifkhatri.ml/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
