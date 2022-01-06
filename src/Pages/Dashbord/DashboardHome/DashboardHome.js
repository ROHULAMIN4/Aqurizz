import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Chart from "../Chart/Chart";

const DashboardHome = () => {
  const { isAdmin, user } = useAuth();
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://powerful-hollows-26581.herokuapp.com/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const data = [
    { name: "Running", Quantity: 150 },
    { name: "Shipped", Quantity: 120 },
    { name: "Pending", Quantity: 30 },
    { name: "Cancel ", Quantity: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="mt-5">
      {!isAdmin && (
        <div className="user-info">
          <img className="img-fluid border" src={user?.photoURL} alt="" />
          <h1>
            Welcome <span className="text-primary">{user?.displayName}</span>
          </h1>
          <h5>{user?.email}</h5>
          <img
            className="img-fluid mt-4"
            src="https://image.freepik.com/free-vector/office-workers-analyzing-researching-business-data_74855-4445.jpg"
            alt="dashboard"
          />
        </div>
      )}
      {isAdmin && (
        <div>
          <div className="row mb-3">
            <div className="col-xl-3 col-sm-6 py-2">
              <div className="card text-white h-50">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#3B53DB", borderRadius: "5px" }}
                >
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Users</h6>
                  <h1 className="display-4">{users?.length}</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
              <div className="card text-white h-100">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#BD20D3", borderRadius: "5px" }}
                >
                  <div className="rotate">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Posts</h6>
                  <h1 className="display-4">87</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
              <div className="card text-white h-100">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#F1682C", borderRadius: "5px" }}
                >
                  <div className="rotate">
                    <i className="fab fa-twitter fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Tweets</h6>
                  <h1 className="display-4">125</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-2">
              <div className="card text-white h-100">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#0EB7FE", borderRadius: "5px" }}
                >
                  <div className="rotate">
                    <i className="fa fa-share fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Shares</h6>
                  <h1 className="display-4">36</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Chart data={data} COLORS={COLORS}></Chart>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
