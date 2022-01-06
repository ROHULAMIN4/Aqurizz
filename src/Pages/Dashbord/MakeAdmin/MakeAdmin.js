import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminForm = (e) => {
    const user = { email };
    fetch("https://young-falls-65140.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made Admin Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="mt-5">
      <h2>Make an Admin</h2>
      <Form onSubmit={handleAdminForm} className="w-50 m-auto text-start">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onBlur={handleOnBlur}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Button type="submit">Make Admin</Button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
