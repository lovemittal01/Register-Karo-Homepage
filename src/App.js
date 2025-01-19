import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
