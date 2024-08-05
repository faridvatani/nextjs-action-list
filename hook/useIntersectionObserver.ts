import { useEffect, useRef, useState } from "react";

type IntersectionObserverInit = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

export default useIntersectionObserver;
