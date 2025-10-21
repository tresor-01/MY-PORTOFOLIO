import React from "react";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";

const Portfolio = () => {
  return (
    <>
      {/* PORTFOLIO SECTION */}
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-select-value>
              Select category
            </div>
            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="images/Screenshot 2025-04-22 121741.png"
                  alt="portfolio"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">My Portfolio</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="images/Screenshot 2025-04-22 134400.png"
                  alt="Secure password generator"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Secure Password Generator</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="images/Screenshot 2025-04-22 121741.png"
                  alt="fundo"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">My Portfolio</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="images/Screenshot 2025-07-11 132130.png"
                  alt="Afriverse"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Afriverse</h3>
              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="images/Screenshot 2025-07-11 132142.png"
                  alt="Momo Data Analysis"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Momo Data Analysis</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IoEyeOutline />
                </div>
                <img
                  src="./images/Screenshot 2025-09-12 145531.png"
                  alt="Car Showcase Website"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Car Showcase Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
