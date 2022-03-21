import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => {
  
  return (
    <Routes>
      <Route exact path="/user/:id" element={<Home />} />
      <Route exact path="/user/:id/activity" element={<Home access="activity" />} />
      <Route exact path="/user/:id/average-sessions" element={<Home access="average-sessions" />} />
      <Route exact path="/user/:id/today-score" element={<Home access="today-score" />} />
      <Route exact path="/user/:id/activities" element={<Home access="activities" />} />
      <Route exact path="/user/:id/key-data" element={<Home access="key-data" />} />
      
      <Route exact path="/" element={<Navigate to="/user/18" />}/>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
