import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import AnimatedCard from './AnimatedCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSelect, setShowSelect] = useState(false);

  const filters = ['all', 'web design', 'applications', 'web development'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filter === activeFilter);

  return (
    <article className="portfolio article">
      <header>
        <h2 className="h2 article-title text-white-2 text-2xl font-semibold">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list hidden md:flex justify-start items-center gap-6 pl-1 mb-8">
          {filters.map(filter => (
            <li key={filter} className="filter-item">
              <button
                className={`text-light-gray text-sm transition-colors duration-200 capitalize ${
                  activeFilter === filter 
                    ? 'text-orange-yellow-crayola' 
                    : 'hover:text-light-gray-70'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box relative mb-8 md:hidden">
          <button 
            className={`filter-select bg-eerie-black-2 text-light-gray flex justify-between items-center w-full p-3 border border-jet rounded-xl text-sm font-light ${
              showSelect ? 'active' : ''
            }`}
            onClick={() => setShowSelect(!showSelect)}
          >
            <div className="select-value capitalize">
              {activeFilter === 'all' ? 'Select category' : activeFilter}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list bg-eerie-black-2 absolute top-full mt-1 w-full p-1 border border-jet rounded-xl z-10 transition-all duration-200 ${
            showSelect 
              ? 'opacity-100 visible pointer-events-auto' 
              : 'opacity-0 invisible pointer-events-none'
          }`}>
            {filters.map(filter => (
              <li key={filter} className="select-item">
                <button
                  className="bg-eerie-black-2 text-light-gray text-sm font-light capitalize w-full p-2 rounded-lg hover:bg-opacity-80"
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowSelect(false);
                  }}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

       {/* // In the return statement, update the grid container: */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 justify-items-center">
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              liveDemoLink={project.liveDemoLink}
              sourceCodeLink={project.sourceCodeLink}
              showButtons={true}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Portfolio;