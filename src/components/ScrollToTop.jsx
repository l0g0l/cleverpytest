import React, { useEffect, useState } from "react";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // El icono aparece cuando ha sobrepasado los 50px de altura y desapare cuando sobrepasa los 900
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
        if (window.pageYOffset < 1050) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false)
        }
      }
      else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility);

  }, []);

  return (
    <div aria-label="Click" className="container-arrow">
      {
        isVisible &&
        <button aria-label="Up to Top" onClick={scrollToTop} id="btnarrowtotop">
          <div className="arrow" ></div>
        </button>
      }

    </div>
  );
}
export default ScrollToTop