"use client";

import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollbarContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    // Initialize Smooth Scrollbar on the container
    if (typeof window !== "undefined" && scrollbarRef.current) {
      const scrollbar = Scrollbar.init(scrollbarRef.current, {
        damping: 0.06, // Adjust the smoothness factor (0.1 is very smooth)
        thumbMinSize: 25, // Minimum size of the scrollbar thumb
        renderByPixels: true,
      });

      // Cleanup on component unmount
      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, []);

  return (
    // The ref is set on the container for Smooth Scrollbar initialization
    <div
      ref={scrollbarRef}
      style={{ height: "100vh", overflow: "hidden" }} // Full height and hidden overflow
    >
      {children}
    </div>
  );
};

export default SmoothScrollbarContainer;
