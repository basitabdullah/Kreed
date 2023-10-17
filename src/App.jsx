import React from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import "./styles/global.scss"
import Cricket from "./pages/Cricket/Cricket";
import Badminton from "./pages/Badminton/Badminton";
import Profile from "./pages/Profile/Profile";
const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Nav />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           <Outlet/>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
     path:"/",
     element: <Layout/>,
     children : [
     {
      path : "/",
      element : <Home/>
     },
     {
      path : "/users",
      element : <Users/>
     },
     {
      path : "/cricket",
      element : <Cricket/>
     },
     {
      path : "/badminton",
      element : <Badminton/>
     },
     {
      path : "/profile",
      element : <Profile/>
     },
     ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
