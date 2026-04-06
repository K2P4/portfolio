import { useState, useEffect } from 'react';

const useScrollManager = (options = { fixedThreshold: 500, topThreshold: 240 }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [selectNav, setSelectNav] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > options.fixedThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      setShowToTop(window.scrollY > options.topThreshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, [options.fixedThreshold, options.topThreshold]);

  const scrollToSection = (id, navId = null, onComplete = null) => {
    const element = document.getElementById(id);
    if (navId) setSelectNav(navId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onComplete) onComplete();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isFixed,
    showToTop,
    selectNav,
    setSelectNav,
    scrollToSection,
    scrollToTop,
  };
};

export default useScrollManager;
