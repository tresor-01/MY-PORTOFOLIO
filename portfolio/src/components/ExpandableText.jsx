import React, { useState, useRef, useEffect } from 'react';

const ExpandableText = ({ text, maxLines = 4, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines;
      const actualHeight = textRef.current.scrollHeight;
      
      setIsTruncated(actualHeight > maxHeight);
    }
  }, [text, maxLines]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className}`}>
      <div
        ref={textRef}
        className={`transition-all duration-300 ${
          isExpanded ? '' : `line-clamp-${maxLines}`
        }`}
        style={{
          WebkitLineClamp: isExpanded ? 'unset' : maxLines,
        }}
      >
        {text}
      </div>
      
      {isTruncated && (
        <button
          onClick={toggleExpand}
          className="text-orange-yellow-crayola text-xs font-medium mt-2 hover:text-vegas-gold transition-colors duration-200 focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;