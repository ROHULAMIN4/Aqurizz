import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Addreview = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://powerful-hollows-26581.herokuapp.com/addSReview", {
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
            title: "Review Posted Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };

  const formStyle = {
    width: "50%",
    padding: "10px 10px",
    marginBottom: "10px",
  };

  return (
    <div className="mt-5">
      <h2>Please add a review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <input
          required
          style={formStyle}
          defaultValue={user?.displayName}
          {...register("name")}
        />
        <br />
        <select style={formStyle} {...register("rating")}>
          <option value="Enter your rating">Enter your rating number</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <input
          required
          style={formStyle}
          placeholder="Image URL"
          {...register("image")}
        />
        <br />
        <textarea
          rows="4"
          required
          style={formStyle}
          placeholder="Comments"
          {...register("comments")}
        />
        <br />
        <input
          required
          className="btn btn-warning"
          style={formStyle}
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default Addreview;
