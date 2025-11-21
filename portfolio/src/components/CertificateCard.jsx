import React, { useState } from 'react';
import ExpandableText from './ExpandableText';

const CertificateCard = ({ 
  image, 
  title, 
  description, 
  category,
  date 
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    // Keep it open for a while so users can read
    setTimeout(() => setIsTouched(false), 3000);
  };

  return (
    <div 
      className="certificate-card group relative w-full max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden mx-auto cursor-pointer border border-jet"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => setIsTouched(false)}
    >
      {/* Front Side - Certificate Image - Larger and centered */}
      <div className={`card-front absolute inset-0 transition-all duration-500 ${
        isTouched ? 'lg:group-hover:opacity-0 opacity-0' : 'lg:group-hover:opacity-0'
      } bg-gradient-to-br from-onyx to-eerie-black-1 flex items-center justify-center p-2`}>
        <img 
          src={image} 
          alt={title} 
          className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain transition-transform duration-500 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 lg:group-hover:bg-opacity-0 transition-all duration-500"></div>
      </div>

      {/* Back Side - Content that slides up */}
      <div className={`card-content absolute inset-0 p-6 bg-gradient-to-br from-eerie-black-1 to-onyx flex flex-col justify-start transform transition-transform duration-500 overflow-hidden ${
        isTouched ? 'lg:group-hover:transform transform' : 'lg:group-hover:transform'
      }`}>
        <div className="flex items-center justify-between mb-4 shrink-0">
          <span className="inline-block bg-orange-yellow-crayola text-smoky-black text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-light-gray-70 text-xs">{date}</span>
        </div>
        
        <h3 className="card-title text-white-2 text-xl font-bold mb-3 line-clamp-2 shrink-0">
          {title}
        </h3>
        
        <div className="flex-grow overflow-y-auto">
          <ExpandableText
            text={description}
            maxLines={5}
            className="text-light-gray text-sm leading-relaxed"
          />
        </div>
      </div>

      {/* Touch indicator for mobile */}
      <div className="lg:hidden absolute bottom-2 right-2 bg-orange-yellow-crayola text-smoky-black text-xs px-2 py-1 rounded-full font-medium">
        Tap to view
      </div>
    </div>
  );
};

export default CertificateCard;