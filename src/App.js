import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RingLoader from "react-spinners/HashLoader";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Header from "./compoent/Shared/Header";
import Home from "./compoent/Home/Home/Home";
import RightAquarium from "./compoent/Home/Articel/RightAquarium";
import WhatKind from "./compoent/Home/Articel/WhatKins";
import Lipsome from "./compoent/Home/Articel/Lipsam";
import { useEffect, useState } from "react";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./compoent/Shared/Footer/Footer";
import FishCollections from "./compoent/Home/FIshCollection/FishCollections";
import AboutUs from "./compoent/About/About";
import Contact from "./compoent/Conatct/Contact";
import Dashboard from "./Pages/Dashbord/Dashbord/Dashbord";

function App() {
  const [loadin, setLoading] = useState(false);
  let [color, setColor] = useState("#00FFFF");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <div className="">
          {loadin ? (
            <div className="spiner-style App">
              <RingLoader color={color} loading={loadin} size={150} />
            </div>
          ) : (
            <AuthProvider>
              <Router>
                <Header></Header>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route exact path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/about">
                    <AboutUs></AboutUs>
                  </Route>
                  <Route path="/right">
                    <RightAquarium></RightAquarium>
                  </Route>
                  <Route path="/contact">
                    <Contact></Contact>
                  </Route>
                  <Route path="/whatKind">
                    <WhatKind></WhatKind>
                  </Route>
                  <PrivateRoute path="/dashboard">
                    <Dashboard></Dashboard>
                  </PrivateRoute>
                  <PrivateRoute path="/FishCollection">
                    <FishCollections></FishCollections>
                  </PrivateRoute>
                  <Route path="/lipsam">
                    <Lipsome></Lipsome>
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                </Switch>
                <Footer></Footer>
              </Router>
            </AuthProvider>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
