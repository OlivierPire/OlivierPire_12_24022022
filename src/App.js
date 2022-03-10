import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";


const App = () => {
  
  return (
    <Routes>
      <Route exact path="/user/:id" element={<Home/>} />
      <Route exact path="/" element={<Navigate to="/user/18" />}/>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;


// Séparer back et front
// Possibiliter naviguer entre 12 et 18