import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Spinner } from "react-bootstrap";
import { fetchProducts } from "../../../fetures/productsSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://powerful-hollows-26581.herokuapp.com/allProducts")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { products, status } = useSelector((state) => state.products);
  return (
    <>
      <div>
        <h1 className="product-head-demo"> Our some demo products</h1>
        <div className="row">
          {/* {products
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
            .slice(1, 9)} */}
          {status === "pending" ? (
            <Spinner
              animation="border"
              className="text-center"
              variant="primary"
            />
          ) : (
            products
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
              .slice(1, 9)
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
