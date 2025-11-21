import React, { useState } from 'react';
import ExpandableText from './ExpandableText';

const AnimatedCard = ({ 
  image, 
  title, 
  description, 
  liveDemoLink, 
  sourceCodeLink,
  showButtons = true,
  isCertificate = false 
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    // Keep it open for a while so users can interact with buttons
    setTimeout(() => setIsTouched(false), 3000);
  };

  return (
    <div 
      className="card group relative w-full max-w-[400px] aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden perspective-1000 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl mx-auto border border-jet"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => setIsTouched(false)}
    >
      {/* Front Side - Image/Icon */}
      <div className={`card-front absolute inset-0 flex items-center justify-center bg-gradient-to-br from-onyx to-eerie-black-1 transition-all duration-500 ${
        isTouched ? 'lg:group-hover:opacity-0 opacity-0' : 'lg:group-hover:opacity-0'
      } p-4`}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-lg transition-all duration-500 lg:group-hover:scale-110"
          />
        ) : (
          <svg 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-20 h-20 text-orange-yellow-crayola transition-all duration-500 lg:group-hover:scale-0"
          >
            <path 
              d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" 
              fill="currentColor"
            />
          </svg>
        )}
      </div>

      {/* Back Side - Content */}
      <div className={`card-content absolute inset-0 p-6 bg-gradient-to-br from-eerie-black-1 to-onyx flex flex-col justify-between transform transition-transform duration-500 overflow-hidden ${
        isTouched ? 'lg:group-hover:transform transform' : 'lg:group-hover:transform'
      }`}>
        <div className="flex-grow overflow-y-auto">
          <h3 className="card-title text-white-2 text-xl font-bold mb-3 line-clamp-2">
            {title}
          </h3>
          
          <ExpandableText
            text={description}
            maxLines={4}
            className="text-light-gray text-sm leading-relaxed"
          />
        </div>

        {showButtons && (
          <div className="card-buttons flex gap-3 mt-4 pt-3 border-t border-jet shrink-0">
            {liveDemoLink && liveDemoLink !== "#" && (
              <a 
                href={liveDemoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-button bg-orange-yellow-crayola text-smoky-black py-2 px-3 rounded-lg font-medium text-xs hover:bg-vegas-gold transition-colors duration-200 flex-1 text-center whitespace-nowrap flex items-center justify-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ion-icon name="globe-outline" class="text-sm"></ion-icon>
                Live Demo
              </a>
            )}
            {sourceCodeLink && sourceCodeLink !== "#" && (
              <a 
                href={sourceCodeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-button secondary border border-orange-yellow-crayola text-orange-yellow-crayola py-2 px-3 rounded-lg font-medium text-xs hover:bg-orange-yellow-crayola hover:text-smoky-black transition-all duration-200 flex-1 text-center whitespace-nowrap flex items-center justify-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ion-icon name="code-slash-outline" class="text-sm"></ion-icon>
                Source Code
              </a>
            )}
            {/* Show message if no links available */}
            {(!liveDemoLink || liveDemoLink === "#") && (!sourceCodeLink || sourceCodeLink === "#") && (
              <div className="text-light-gray-70 text-xs text-center w-full py-2">
                Links coming soon
              </div>
            )}
          </div>
        )}
      </div>

      {/* Touch indicator for mobile */}
      <div className="lg:hidden absolute bottom-2 right-2 bg-orange-yellow-crayola text-smoky-black text-xs px-2 py-1 rounded-full font-medium">
        Tap to view
      </div>
    </div>
  );
};

export default AnimatedCard;