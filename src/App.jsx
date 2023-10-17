import React from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Sports from "./pages/Sports/Sports";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import "./styles/global.scss"
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
      path : "/",
      element : <Sports/>
     },
     ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
