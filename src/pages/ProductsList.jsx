import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/api/products");
    console.log(result);
    setAllImage(result.data.data);
  };

  return (
    <div>
      {allImage == null
        ? ""
        : allImage.map((data, index) => {
            return (
              <div key={index}>
                <img
                  src={require(`../assets/images/${data.image}`)}
                  height={100}
                  width={100}
                  alt={data.title}
                />
                <p>Title: {data.title}</p>
                <p>Description: {data.description}</p>
                <p>Price: {data.price}</p>
              </div>
            );
          })}
    </div>
  );
};

export default ProductsList;
