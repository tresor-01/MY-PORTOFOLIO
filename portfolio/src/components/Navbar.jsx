import React from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { name: 'About', key: 'about' },
    { name: 'Resume', key: 'resume' },
    { name: 'Portfolio', key: 'portfolio' },
    { name: 'Certificates', key: 'certificates' },
    { name: 'Contact', key: 'contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list flex flex-wrap justify-center items-center py-2 px-2 md:justify-start md:gap-8 md:px-5">
        {navItems.map((item) => (
          <li key={item.key} className="navbar-item">
            <button
              className={`navbar-link text-light-gray text-sm py-3 px-3 transition-colors duration-200 md:text-base md:font-medium ${
                activePage === item.key ? 'text-orange-yellow-crayola' : 'hover:text-light-gray-70'
              }`}
              onClick={() => setActivePage(item.key)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;