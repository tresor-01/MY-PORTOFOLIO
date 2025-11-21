import React from 'react';
import { certificates } from '../data/portfolioData';
import CertificateCard from './CertificateCard';

const Certificates = () => {
  return (
    <article className="blog article">
      <header>
        <h2 className="h2 article-title text-white-2 text-2xl font-semibold">Certification</h2>
      </header>

      <section className="certificates-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 justify-items-center">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              image={cert.image}
              title={cert.title}
              description={cert.description}
              category={cert.category}
              date={cert.date}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Certificates;