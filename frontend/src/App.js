import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Components/Profile";
import QuickGuideForm from "./QuickGuideForm";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quick-guide" element={<QuickGuideForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
