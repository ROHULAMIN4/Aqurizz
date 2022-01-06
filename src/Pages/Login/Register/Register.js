import React, { useState } from "react";
import "./Register.css";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Container, Spinner, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <>
      <div className="row reg">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ps-5">
          <Container>
            <Row>
              <h3>
                <b className="text-center text-primary">Sign up</b>
                <span className="text-primary"></span>
              </h3>
              <Col>
                {!isLoading && (
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      className="w-75 my-3 p-1"
                      id="standard-basic"
                      placeholder="Your Name"
                      name="name"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="w-75 my-3 p-1"
                      id="standard-basic"
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="w-75 my-3 p-1"
                      id="standard-basic"
                      placeholder="Your Password"
                      type="password"
                      name="password"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="w-75 my-3 p-1"
                      id="standard-basic"
                      placeholder="ReType Your Password"
                      type="password"
                      name="password2"
                      onBlur={handleOnBlur}
                    />
                    <br />
                    <Button className="rounded-pill px-5" type="submit">
                      Register
                    </Button>
                    <NavLink style={{ textDecoration: "none" }} to="/login">
                      <Button variant="link">
                        Already Registered? Please Login
                      </Button>
                    </NavLink>
                  </form>
                )}
                {isLoading && <Spinner animation="grow" />}
                {user?.email && (
                  <Alert severity="success">User Created successfully!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mt-5 p-5 col-lg-6 col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/ZN13sjP/4957136-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Register;
