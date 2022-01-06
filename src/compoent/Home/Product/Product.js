import React, { useState } from "react";
import PurchaseModal from "../PurchaseModal/PurchaseModal";
import "./Product.css";
const Product = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, desc, img, price, DiscountPrice } = product;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card-Style">
          <img style={{ width: "100%", height: "100%" }} src={img} alt="" />
          <div className="transition-img">
            <h4 className="text-info pt-4">{name}</h4>
            <p>{desc}</p>
            <div className="price">
              <p className="fs-4 fw-bold text-warning">
                <del>Price:{price}</del>
              </p>
              <p className="fs-4 fw-bold text-danger">Price:{DiscountPrice}</p>
            </div>

            <button onClick={handleShow} type="button" class="btn btn-success">
              Add To card
            </button>
          </div>
        </div>
        <PurchaseModal
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          product={product}
        ></PurchaseModal>
      </div>
    </>
  );
};

export default Product;
