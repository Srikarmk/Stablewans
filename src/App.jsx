import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Stablewans from "./Components/Stablewans/Stablewans";
const App = () => {
  

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/stablewans" element={<Stablewans/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
