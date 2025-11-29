import { useState, useEffect, useRef, RefObject } from "react";

interface ElementSize {
  width: number;
  height: number;
}

export default function useElementSize<
  T extends HTMLElement = HTMLDivElement
>(): [RefObject<T | null>, ElementSize] {
  const elementRef = useRef<T>(null);
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateSize = () => {
      const { offsetWidth, offsetHeight } = element;
      setSize({ width: offsetWidth, height: offsetHeight });
    };

    // Initial size
    updateSize();

    // Create ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(element);

    // Fallback for older browsers
    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [elementRef, size];
}
