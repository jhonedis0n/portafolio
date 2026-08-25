import { useEffect, useState } from "react";

import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={handleClick}
      aria-label="Volver al inicio"
    >
      <span>↑</span>
    </button>
  );
}

export default BackToTop;