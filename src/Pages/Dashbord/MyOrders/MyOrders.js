import React, { useEffect, useState } from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://powerful-hollows-26581.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleCancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://powerful-hollows-26581.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  return (
    <div className="mt-5">
      <h2>You have {orders?.length} Orders</h2>
      <Container>
        {orders.length === 0 ? (
          <div className="m-auto mt-5">
            <img
              className="img-fluid w-25 h-25"
              src="https://i.ibb.co/4W6j1TN/undraw-No-data-re-kwbl.png"
              alt=""
            />
            <h3 className="text-secondary">You have No Order</h3>
          </div>
        ) : (
          <Row xs={1} md={1} className="g-4 mt-4 main-order">
            {orders.map((order) => (
              <Col key={order._id}>
                <div
                  style={{ border: "1px solid gray", padding: "15px" }}
                  className="d-flex order-card"
                >
                  <div className="">
                    <Card.Img
                      className="img-fluid w-25"
                      id="order-img"
                      variant="top"
                      src={order.productima}
                    />
                  </div>
                  <div className="text-start ">
                    <h6
                      className={
                        order.status === "Pending"
                          ? "text-danger mt-2 me-2"
                          : "text-success mt-2 me-2"
                      }
                    >
                      {order.status}
                    </h6>
                    <Card.Title>{order.productName}</Card.Title>
                    <h5>Price: {order.price}</h5>
                    <h5>ConatactNumber: {order.phoneNumber}</h5>
                    <Button
                      onClick={() => handleCancelOrder(order._id)}
                      variant="danger"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MyOrders;
