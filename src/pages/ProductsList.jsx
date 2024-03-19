import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  // State variables to manage image data

  const [allImage, setAllImage] = useState(null); // State for all images


  // Function to fetch image data when component mounts
  useEffect(() => {
    getImage();
  }, []);

  // Function to fetch all images from server
  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/api/products");
    console.log(result);
    setAllImage(result.data.data); // Update state with received image data
  };

  return (
    <div>
      {/* Display uploaded images */}
      {allImage == null
        ? "" // If no images, show empty string
        : allImage.map((data, index) => {
            // Map through all images and display them
            return (
              <div key={index}>
                <img
                  //${data.image}
                  src={require(`../assets/images/${data.image}`)} // Display image using require
                  height={100}
                  width={100}
                  alt={data.title} // Set alt attribute to the title of the image
                />
                <p>Title: {data.title}</p> {/* Display title */}
                <p>Description: {data.description}</p> {/* Display description */}
                <p>Price: {data.price}</p>
              </div>
            );
          })}
    </div>
  );
};

export default ProductsList;
