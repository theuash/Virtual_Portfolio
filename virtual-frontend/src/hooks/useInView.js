import { useState, useEffect, useRef } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Once visible, stop observing (one-shot reveal)
        observer.unobserve(el);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, inView };
};

export default useInView;
