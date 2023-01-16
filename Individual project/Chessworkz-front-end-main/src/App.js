import React from "react";
import Header from "./components/Header/Header";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Tools from "./Tools";
import Courses from "./components/Course/Courses";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>ChessWorkz</title>
          <meta name="description" content="Testing icon and titles" />
        </Helmet>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
