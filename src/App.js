import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import BikeRent from "./components/bikeRent/BikeRent";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import NoPage from "./components/noPage/NoPage";
import LogIn from "./components/Auth/logIn/LogIn";
import SignUp from "./components/Auth/signup/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikerent" element={<BikeRent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
