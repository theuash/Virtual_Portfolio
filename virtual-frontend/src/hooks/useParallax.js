import { useState, useEffect, useRef } from 'react';

export const useParallax = (speed = 0.4) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            const elementTop = scrolled + rect.top;
            const relativeScroll = scrolled - elementTop;
            setOffset(relativeScroll * speed);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: { transform: `translateY(${offset}px)` }
  };
};

export default useParallax;
