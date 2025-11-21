import React from 'react';
import { aboutText, services } from '../data/portfolioData';
import AnimatedCard from './AnimatedCard';

const About = () => {
  return (
    <article className="about article active">
      <header>
        <h2 className="h2 article-title text-white-2 text-2xl font-semibold">About me</h2>
      </header>

      <section className="about-text">
        <p className="text-light-gray text-sm font-light leading-relaxed mb-4">
          {aboutText.intro}
        </p>

        <p className="text-light-gray text-sm font-light leading-relaxed">
          {aboutText.details}
        </p>
      </section>

      <section className="service mt-12">
        <h3 className="h3 service-title text-white-2 text-lg mb-8">What i'm doing</h3>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              image={service.icon}
              title={service.title}
              description={service.description}
              showButtons={false}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;