import React, { useState } from "react";
import pythonlogo from "../assets/img/part 7/pythonimg.png";

const Carousel = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const handleMouseMove = (e) => {
    const containerWidth = e.target.clientWidth;
    const offsetX = e.pageX - e.target.getBoundingClientRect().left;
    const percent = offsetX / containerWidth;
    const newTranslateValue = -100 * percent;
    setTranslateValue(newTranslateValue);
  };
 
  return (
    <div className="slider-container overflow-hidden w-full relative">
      <div
        className="slider flex transition-transform ease-in-out"
        style={{ transform: `translateX(${translateValue}%)` }}
        onMouseMove={handleMouseMove}
      >
        <div className="slide flex-none w-full">
          <img src={pythonlogo} alt="Left Image" className="slide-img" />
        </div>
        <div className="slide flex-none w-full">
          <img src={pythonlogo} alt="Middle Image" className="slide-img" />
        </div>
        <div className="slide flex-none w-full">
          <img src={pythonlogo} alt="Right Image" className="slide-img" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
