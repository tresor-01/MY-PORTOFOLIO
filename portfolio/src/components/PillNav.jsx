import React, { useState, useRef, useEffect } from 'react';

const PillNav = ({ 
  logo, 
  logoAlt = "Logo",
  items = [], 
  activeHref, 
  className = "",
  ease = "power2.easeOut",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000"
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pillStyle, setPillStyle] = useState({});
  const navRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex !== -1 && itemsRef.current[activeIndex]) {
      updatePillPosition(itemsRef.current[activeIndex]);
    }
  }, [activeHref, items]);

  const updatePillPosition = (element) => {
    if (!element || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    setPillStyle({
      left: elementRect.left - navRect.left,
      width: elementRect.width,
      height: elementRect.height,
      opacity: 1,
      backgroundColor: pillColor,
    });
  };

  const handleItemHover = (index) => {
    setHoveredIndex(index);
    if (itemsRef.current[index]) {
      updatePillPosition(itemsRef.current[index]);
    }
  };

  const handleItemLeave = () => {
    setHoveredIndex(null);
    const activeIndex = items.findIndex(item => item.href === activeHref);
    if (activeIndex !== -1 && itemsRef.current[activeIndex]) {
      updatePillPosition(itemsRef.current[activeIndex]);
    }
  };

  const handleItemClick = (href, onClick) => {
    if (onClick) {
      onClick();
    }
    // Navigation will be handled by the parent component
  };

  return (
    <nav 
      ref={navRef}
      className={`relative flex items-center space-x-2 bg-[${baseColor}] px-4 py-2 rounded-full ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      {/* Logo */}
      {logo && (
        <div className="flex-shrink-0 mr-4">
          <img src={logo} alt={logoAlt} className="h-8 w-auto" />
        </div>
      )}

      {/* Navigation Items */}
      <div className="relative flex items-center space-x-2">
        {/* Animated Pill */}
        <div
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={{
            ...pillStyle,
            transitionProperty: 'left, width, height, background-color',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Navigation Links */}
        {items.map((item, index) => {
          const isActive = item.href === activeHref;
          const isHovered = hoveredIndex === index;
          
          return (
            <a
              key={item.href}
              ref={el => itemsRef.current[index] = el}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.href, item.onClick);
              }}
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={handleItemLeave}
              className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive || isHovered 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
              style={{
                color: isActive || isHovered ? hoveredPillTextColor : pillTextColor,
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default PillNav;