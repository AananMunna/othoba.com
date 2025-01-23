import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to the top of the page
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);

    // Reset scroll behavior to auto after scrolling is done
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
