import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Auth" element={<Auth/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Users/:id" element={<UserProfile/>}/>
    </Routes>
    
  )
};

export default AllRoutes;
