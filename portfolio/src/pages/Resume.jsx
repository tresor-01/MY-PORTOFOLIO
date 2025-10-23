import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Resume = () => {
  return (
    <>
    <Header />
      <article className="resume" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        {/* EDUCATION SECTION */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                African Leadership University
              </h4>
              <span>Currently — 2027</span>
              <p className="timeline-text">
                I am currently studying Software Engineering at ALU, where I
                continue to strengthen my knowledge in software development and
                programming languages like JavaScript and Python. I am expected
                to finish by 2027.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Groupe Scolaire Mater Dei Nyanza
              </h4>
              <span>2020 — 2023</span>
              <p className="timeline-text">
                I studied Mathematics, Physics, and Computer Science in
                A'Level, which gave me a strong foundation in programming
                languages such as C++ and Java, along with analytical skills
                from Math and Physics.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Groupe Scolaire Mater Dei Nyanza
              </h4>
              <span>2017 — 2019</span>
              <p className="timeline-text">
                My O'Level secondary school where I learned many things that
                shaped my way of thinking and finished with good marks in the
                national exam.
              </p>
            </li>
          </ol>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Software Developer Intern
              </h4>
              <span>Sept 2025 — Present</span>
              <p className="timeline-text">
                I am currently a Software Developer Intern at the Rwanda Revenue
                Authority (RRA), where I participate in developing high-end
                internal software solutions.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Freelancer</h4>
              <span>2024 — Present</span>
              <p className="timeline-text">
                I work as a freelance web developer, creating high-quality
                websites that offer smooth user experiences and strong security
                practices for my clients.
              </p>
            </li>
          </ol>
        </section>

        {/* SKILLS SECTION */}
        <section className="skill">
          <h3 className="h3 skills-title">My Skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Development</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Design</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Data Science</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Cybersecurity</h5>
                <data value="40">40%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Programming</h5>
                <data value="60">60%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default Resume;
