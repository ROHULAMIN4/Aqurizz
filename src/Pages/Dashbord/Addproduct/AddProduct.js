import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://powerful-hollows-26581.herokuapp.com/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Product added Successfully",
            showConfirmButton: false,
            timer: 1300,
          });
          reset();
        }
      });
  };

  const formStyle = {
    width: "50%",
    padding: "15px 10px",
    border: "none",
    borderBottom: "1px solid cornflowerblue",
  };

  return (
    <div className="mt-5">
      <h2>Please Add Product</h2>
      <form className="mt-5 w-100" onSubmit={handleSubmit(onSubmit)}>
        <input
          style={formStyle}
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          style={formStyle}
          className="my-3"
          placeholder="Price"
          {...register("price", { required: true })}
        />{" "}
        <br />
        <input
          style={formStyle}
          className="my-3"
          placeholder="Discount Price"
          {...register("DiscountPrice", { required: true })}
        />
        <br />
        <input
          style={formStyle}
          className="mb-3"
          placeholder="Image URL"
          {...register("img", { required: true })}
        />
        <br />
        <textarea
          style={formStyle}
          className="mb-3"
          placeholder="Description"
          {...register("desc", { required: true })}
        />
        <br />
        <input
          style={formStyle}
          className="btn btn-primary mt-3"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
