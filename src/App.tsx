import React from "react";
import { Routes, Route } from "react-router-dom";
import LandinPage from "./Commponent/Landing/LandingPage";
import LoginPage from "./Commponent/Login/LoginPage";
import { Toaster } from "react-hot-toast";
import SignupPage from "./Commponent/SignupPage/SignupPage";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontFamily: "inherit",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default App;
