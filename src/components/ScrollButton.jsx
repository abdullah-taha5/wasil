import React, { useEffect, useState } from "react";

function ScrollButton() {
  const [backToToPButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-btn ${backToToPButton && "active"}`}
      onClick={scrollTop}
    >
      <i className="fa fa-angle-double-up"></i>
    </div>
  );
}

export default ScrollButton;