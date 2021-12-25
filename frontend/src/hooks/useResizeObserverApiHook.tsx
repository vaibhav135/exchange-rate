import { useState, useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

const UseResizeObserverApiHook = (ref: any) => {
  const [dimensions, setDimensions] = useState<any>(null);

  useEffect(() => {
    const observerTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observerTarget);
    return () => {
      // cleanup function
      resizeObserver.unobserve(observerTarget);
    };
  }, [ref]);

  return dimensions;
};

export default UseResizeObserverApiHook;
//setDimensions(entry.contentRect)
