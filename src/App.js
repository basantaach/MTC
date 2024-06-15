import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Nav/Navbar";
import Footer from "./Footer/Footer";
import Testimonials from "./components/Testimonial/Testimonials";
import Product from "./pages/Product/Product";
import Tat from "./pages/Product/TAT/Tat";
import Bl from "./pages/Product/BL/Bl";
import Lavatory from "./pages/Product/Lavatory/Lavatory";
import PortableWaterTruck from "./PageDetails/LavatoryDetails/PotableWaterTruck";
import Ps from "./pages/Product/PS/Ps";
import Singapore2024 from "./pages/Airshow/Expo/Singapore2024";
import Dubai2023 from "./pages/Airshow/Expo/Dubai2023";
import Gallery from "./pages/Gallery/Gallery";
import TMX450 from "./PageDetails/TatDetails/TMX450";
import Towbarless from "./PageDetails/TatDetails/Towbarless";
import NBL from "./PageDetails/BlDetails/NBL";
import Pax from "./PageDetails/PsDetails/Pax";
import COBUS from "./PageDetails/LavatoryDetails/COBUS";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/product/TAT" element={<Tat />} />
            <Route path="/product/BL" element={<Bl />} />
            <Route path="/product/PS" element={<Ps />} />
            <Route path="/product/lavatory" element={<Lavatory />} />
            <Route path="/airshow/Singapore2024" element={<Singapore2024 />} />
            <Route path="/airshow/Dubai2023" element={<Dubai2023 />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/product/TAT/TMX450" element={<TMX450 />} />
            <Route path="/product/TAT/Towbarless" element={<Towbarless />} />
            <Route path="/product/Bl/NBL" element={<NBL />} />
            <Route path="/Product/Ps/Pax" element={<Pax />} />
            <Route path="/product/lavatory/COBUS" element={<COBUS />} />
            <Route
              path="/product/lavatory/Portable"
              element={<PortableWaterTruck />}
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
