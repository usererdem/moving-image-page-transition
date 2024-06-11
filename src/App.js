import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Model from "./pages/model";
import Header from "./components/header";
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home imageDetails={imageDetails} />} />
        <Route
          path='/model/:id'
          element={<Model imageDetails={imageDetails} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
