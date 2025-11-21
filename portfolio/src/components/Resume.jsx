import React from 'react';
import { education, experience, skills } from '../data/portfolioData';

const Resume = () => {
  return (
    <article className="resume article">
      <header>
        <h2 className="h2 article-title text-white-2 text-2xl font-semibold">Resume</h2>
      </header>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 text-white-2 text-lg">Education</h3>
        </div>

        <ol className="timeline-list text-sm ml-11 md:ml-16">
          {education.map((edu, index) => (
            <li key={index} className="timeline-item relative mb-5 last:mb-0">
              <h4 className="h4 timeline-item-title text-white-2 text-sm leading-relaxed mb-2">
                {edu.title}
              </h4>
              <span className="text-vegas-gold font-normal leading-relaxed">{edu.period}</span>
              <p className="timeline-text text-light-gray font-light leading-relaxed mt-2">
                {edu.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline mb-8">
        <div className="title-wrapper flex items-center gap-4 mb-6">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 text-white-2 text-lg">Experience</h3>
        </div>

        <ol className="timeline-list text-sm ml-11 md:ml-16">
          {experience.map((exp, index) => (
            <li key={index} className="timeline-item relative mb-5 last:mb-0">
              <h4 className="h4 timeline-item-title text-white-2 text-sm leading-relaxed mb-2">
                {exp.title}
              </h4>
              <span className="text-vegas-gold font-normal leading-relaxed">{exp.period}</span>
              <p className="timeline-text text-light-gray font-light leading-relaxed mt-2">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title text-white-2 text-lg mb-5">My skills</h3>

        <ul className="skills-list content-card p-5">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item mb-4 last:mb-0">
              <div className="title-wrapper flex items-center justify-between mb-2">
                <h5 className="h5 text-white-2 text-sm">{skill.name}</h5>
                <data className="text-light-gray text-xs font-light" value={skill.percentage}>
                  {skill.percentage}%
                </data>
              </div>

              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;