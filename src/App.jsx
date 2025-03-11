import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Activities from "./Components/Activities/Activities";
import Courses from "./Components/Courses/Courses";
import Blog from "./Components/Blog/Blog";

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
