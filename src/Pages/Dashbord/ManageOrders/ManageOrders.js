import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("https://powerful-hollows-26581.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [status]);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this order?",
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
        Swal.fire("Deleted!", "Order has been deleted.", "success");
      }
    });
  };

  const handleStatus = (id) => {
    setStatus(false);
    fetch(`https://powerful-hollows-26581.herokuapp.com/statusUpdate/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product status updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .finally(() => setStatus(true));
  };

  return (
    <div className="mt-5">
      <h2>Manage All Orders</h2>
      {orders.length === 0 ? (
        <div className="m-auto mt-5">
          <img
            className="img-fluid w-25 h-25"
            src="https://i.ibb.co/4W6j1TN/undraw-No-data-re-kwbl.png"
            alt=""
          />
          <h3 className="text-secondary">There is No Order</h3>
        </div>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Customer Email</th>
              <th>Customer Address</th>
              <th>Phone No</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>
                  {order.status}{" "}
                  <Button
                    onClick={() => handleStatus(order?._id)}
                    className="ms-3"
                  >
                    <i className="far fa-edit"></i>
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => handleDeleteOrder(order._id)}
                    variant="danger"
                  >
                    <i className="far fa-trash-alt"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ManageOrders;
