import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://powerful-hollows-26581.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
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
        fetch(`https://powerful-hollows-26581.herokuapp.com/pdelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
            }
          });
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  return (
    <div className="mt-5">
      <h2>Manage All Products</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>
                <img
                  className="img-fluid"
                  style={{ width: "200px" }}
                  src={product.img}
                  alt="cycle"
                />
              </td>
              <td>{product.price}</td>
              <td>
                <Button
                  onClick={() => handleDeleteProduct(product._id)}
                  variant="danger"
                >
                  <i className="far fa-trash-alt"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
