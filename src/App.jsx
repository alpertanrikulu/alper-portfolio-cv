import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="https://alper-portfolio-42sn0qju6-alper-tanrikulus-projects.vercel.app/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
