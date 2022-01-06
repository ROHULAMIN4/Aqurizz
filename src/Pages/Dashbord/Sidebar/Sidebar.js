// import React, { useEffect, useState } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";

// const Sidebar = () => {
//   let { url } = useRouteMatch();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const { user, logout } = useAuth();

//   useEffect(() => {
//     fetch(
//       `https://powerful-hollows-26581.herokuapp.com/checkAdmin/${user?.email}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data[0]?.role === "admin") {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       });
//   }, [user?.email]);
//   const style = {
//     color: "white",
//     textDecoration: "none",
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <div class="sidebar-offcanvas pl-0" id="sidebar" role="navigation">
//         <Link style={style} to="/home">
//           <h3>
//             <i className="fas fa-house-user"></i> Home
//           </h3>
//         </Link>
//         {!isAdmin && (
//           <ul>
//             <Link style={style} to={`${url}/myOrders`}>
//               <li>My Orders</li>
//             </Link>
//             <Link style={style} to={`${url}/addReview`}>
//               <li>Add Review</li>
//             </Link>
//             <Link style={style} to={`${url}/pay`}>
//               <li>Pay</li>
//             </Link>
//           </ul>
//         )}
//         {isAdmin && (
//           <ul>
//             <Link style={style} to={`${url}/manageOrders`}>
//               <li>Manage Orders</li>
//             </Link>

//             <Link style={style} to={`${url}/makeAdmin`}>
//               <li>Make Admin</li>
//             </Link>

//             <Link style={style} to={`${url}/manageProducts`}>
//               <li>Manage Products</li>
//             </Link>
//             <Link style={style} to={`${url}/addProduct`}>
//               <li>Add Product</li>
//             </Link>
//           </ul>
//         )}
//         <ul className="text-start">
//           <li style={{ marginTop: "30px" }} onClick={logout}>
//             <i className="fas fa-sign-out-alt me-1"></i> Logout
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
  const { isAdmin, logout } = useAuth();
  let { url } = useRouteMatch();

  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="sidebar-offcanvas pl-0" id="sidebar" role="navigation">
        <Link style={style} to="/home">
          <h3>
            <i className="fas fa-house-user"></i> Home
          </h3>
        </Link>
        {!isAdmin && (
          <ul>
            <Link style={style} to={`${url}/myOrders`}>
              <li>My Orders</li>
            </Link>
            <Link style={style} to={`${url}/addReview`}>
              <li>Add Review</li>
            </Link>
            <Link style={style} to={`${url}/pay`}>
              <li>Pay</li>
            </Link>
          </ul>
        )}
        {isAdmin && (
          <ul>
            <Link style={style} to={`${url}/overview`}>
              <li>Overview</li>
            </Link>
            <Link style={style} to={`${url}/manageOrders`}>
              <li>Manage Orders</li>
            </Link>

            <Link style={style} to={`${url}/makeAdmin`}>
              <li>Make Admin</li>
            </Link>

            <Link style={style} to={`${url}/manageProducts`}>
              <li>Manage Products</li>
            </Link>
            <Link style={style} to={`${url}/addProduct`}>
              <li>Add Product</li>
            </Link>
          </ul>
        )}
        <ul className="text-start">
          <li style={{ marginTop: "30px" }} onClick={logout}>
            <i className="fas fa-sign-out-alt me-1"></i> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
