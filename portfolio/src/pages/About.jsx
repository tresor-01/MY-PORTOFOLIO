import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <>
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      {/* ABOUT TEXT */}
      <section className="about-text">
        <p>
          Hello! My name is <b>IBYISHAKA TRESOR THIERRY ALAIN</b>, and I am a
          Software Engineering student at African Leadership University. I have
          a strong passion for technology, problem-solving, and continuous
          learning. My interests lie in C++, Python, and JavaScript, with a
          focus on file manipulation, scripting, and building efficient software
          solutions.
        </p>

        <p>
          Beyond academics, I am also interested in cybersecurity and AI’s role
          in protecting systems. Additionally, I am currently working on a
          Python application to help students track their course grades. I am
          always eager to collaborate, learn, and grow in my field.
        </p>
      </section>

      {/* WHAT I'M DOING SECTION */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="images/Web-design.webp"
                alt="Web design icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Design</h4>
              <p className="service-item-text">
                I design high-end web applications using top-notch technologies,
                focusing on excellent user experience and interaction.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="images/Web-development.webp"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                I develop secure and responsive web applications using modern
                technologies, ensuring smooth performance and user safety.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="images/cybersecurity.webp"
                alt="Cybersecurity icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cybersecurity</h4>
              <p className="service-item-text">
                I apply cybersecurity skills to analyze systems, use SIEM tools,
                Wireshark, Nmap, and leverage Linux terminal and Bash scripting
                for enhanced security.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="images/Collaboration.webp"
                alt="Collaboration icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Collaboration</h4>
              <p className="service-item-text">
                I collaborate with fellow developers, providing help when needed
                and fostering strong teamwork and shared learning.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* TESTIMONIAL MODAL (hidden by default) */}
      <div className="modal-container" data-modal-container style={{ display: "none" }}>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel Lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel Lewis
            </h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about client needs. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
</>
  );
};

export default About;

 
