import { useState, useRef, useEffect } from 'react';

const useMobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const MenuRef = useRef(null);

  const toggleMenu = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);

  useEffect(() => {
    const handleMouse = (e) => {
      if (MenuRef.current && !MenuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (toggle) {
      window.addEventListener('mousedown', handleMouse);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleMouse);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return {
    toggle,
    setToggle,
    MenuRef,
    toggleMenu,
    closeMenu,
  };
};

export default useMobileMenu;
