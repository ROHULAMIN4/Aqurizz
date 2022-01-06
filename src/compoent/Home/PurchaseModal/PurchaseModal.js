import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import "./PurchaseModal.css";
const PurchaseModal = ({ handleShow, show, handleClose, product }) => {
  const { user } = useAuth();
  const initialInfo = {
    email: user.email,
    productName: product.name,
    productima: product.img,

    price: product.price,
  };
  const [value, setValue] = React.useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const productInfor = { value };

    productInfor[field] = value;
    setValue(productInfor);
  };
  const handleSubmit = (e) => {
    const productInformation = {
      ...value,
      ...initialInfo,
    };
    // console.log(productInformation);
    // https://powerful-hollows-26581.herokuapp.com/addOrders
    fetch("https://powerful-hollows-26581.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratulation Your order successfully !",
            showConfirmButton: false,
            timer: 1300,
          });
        }
      });
    handleClose();
    e.preventDefault();
  };
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className="text-success">Purchase Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-info">
            <form onSubmit={handleSubmit}>
              <input
                className="order-info-purchase"
                type="text"
                value={product.name}
                name="name"
                onBlur={handleOnBlur}
              />{" "}
              <br />
              <input
                className="order-info-purchase"
                type="email"
                value={user.email}
                name="email"
                onBlur={handleOnBlur}
              />{" "}
              <br />
              <input
                className="order-info-purchase"
                type="text"
                value={product.price}
                name="price"
                onBlur={handleOnBlur}
              />{" "}
              <br />
              <input
                className="order-info-purchase"
                type="text"
                placeholder="address"
                name="address"
                onBlur={handleOnBlur}
              />{" "}
              <br />
              <input
                className="order-info-purchase"
                type="text"
                placeholder="phoneNumber"
                name="phoneNumber"
                onBlur={handleOnBlur}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default PurchaseModal;
