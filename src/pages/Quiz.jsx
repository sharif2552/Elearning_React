import React from 'react';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Quiz = () => {
    return (
      <div>
        <Navbar />
        <div className=' flex flex-row justify-center'>
          <Carousel />
        </div>
      </div>
    );
};

export default Quiz;