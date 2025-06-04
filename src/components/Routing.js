import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import ItemsSection from "../components/ItemsSection";
import AboutSection from "../components/AboutSection";
import Main from "../pages/Main";

function Routing() {
  return (
    <Routes>
      <Route path="/booking-page" element={<BookingPage />} />
      <Route path="/order-online" element={<ItemsSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default Routing;