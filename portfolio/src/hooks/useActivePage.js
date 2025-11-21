import { useState, useEffect } from 'react';

export const useActivePage = () => {
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return { activePage, setActivePage };
};