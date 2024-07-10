"use client"

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-[#b02027] text-white rounded-full shadow-md focus:outline-none"
        >
          <ChevronUpIcon className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
