import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashbord.css";
import ManageOrders from "../ManageOrders/ManageOrders";
import Pay from "../Pay/Pay";

import ManageProducts from "../ManageProducts/ManageProducts";

import DashboardHome from "../DashboardHome/DashboardHome";
import Sidebar from "../Sidebar/Sidebar";
import MyOrders from "../MyOrders/MyOrders";
import Addreview from "../AddReview/AddReview";
import AddProduct from "../Addproduct/AddProduct";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to={`${url}`}>
        <h2 className="dashboard-header py-2">Dashboard</h2>
      </Link>
      <Container fluid>
        <Row>
          <Col lg={2} className="sidebar">
            <Sidebar></Sidebar>
          </Col>
          <Col lg={10} style={{ backgroundColor: "#ECEDF1" }}>
            <Switch>
              <Route exact path={`${path}`}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/overview`}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/addReview`}>
                <Addreview></Addreview>
              </Route>
              <Route path={`${path}/pay`}>
                {" "}
                <Pay></Pay>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
