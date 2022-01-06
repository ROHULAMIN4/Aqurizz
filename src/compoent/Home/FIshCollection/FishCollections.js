import React, { useEffect, useState } from "react";
import FishCollection from "./FishCollection";
import "./FishCollections.css";

const FishCollections = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://powerful-hollows-26581.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <>
        <div>
          <h1 className="product-head-demo col-l-12 col-md-12 col-sm-12">
            {" "}
            OUR FISH COLLECTION
          </h1>
          <div className="row">
            {products.map((product) => (
              <FishCollection
                key={product._id}
                product={product}
              ></FishCollection>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default FishCollections;
