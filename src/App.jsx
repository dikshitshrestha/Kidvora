import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Activities from "./Components/Activities/Activities";
import Courses from "./Components/Courses/Courses";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Art from "./Components/Courses/Art";
import Workshop from "./Components/Courses/Workshop";
import Future from "./Components/Courses/Future";
import BrightMind from "./Components/Courses/BrightMind";
import GeniusKid from "./Components/Courses/GeniusKid";
import SmartStart from "./Components/Courses/SmartStart";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/courses/workshop" element={<Workshop />} />
          <Route path="/courses/future" element={<Future />} />
          <Route path="/courses/bright" element={<BrightMind />} />
          <Route path="/courses/bootcamp" element={<GeniusKid />} />
          <Route path="/courses/smart" element={<SmartStart />} />
          <Route path="/courses/art" element={<Art />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
