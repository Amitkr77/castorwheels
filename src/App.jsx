import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Solution from "./pages/Solution";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
// import SolutionIndustrial from "./pages/solution/SolutionIndustrial";
// import SolutionMedical from "./pages/solution/SolutionMedical";
// import SolutionHeavyDuty from "./pages/solution/SolutionHeavyDuty";
import WhatWeDo from "./pages/WhatWeDo";
import Whatsapp from "./components/Whatsapp";
import AutomotiveCastor from "./pages/solution/AutomotiveCastor";
import MedicalCaster from "./pages/solution/MedicalCaster";
import HeavyDuty from "./pages/solution/HeavyDuty";
import WarehouseCastor from "./pages/solution/WarehouseCastor";
import FurnitureCasters from "./pages/solution/FurnitureCastor";
import CustomSolution from "./pages/solution/CustomSolution";

export default function App() {
  return (
    <div className="font-display bg-background-light text-slate-800 antialiased selection:bg-blue-100 selection:text-primary">
      <Router>
        <ScrollToTop />
        {/* <Whatsapp /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-info" element={<Form />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/solution/:slug" element={<ProductDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />

          {/* Solution pages */}
          <Route path="/solution/custom-solution" element={<CustomSolution/>} />
          <Route path="/solution/automotive" element={<AutomotiveCastor />} />
          <Route path="/solution/medical" element={<MedicalCaster />} />
          <Route path="/solution/heavy-duty" element={<HeavyDuty/>} />
          <Route path="/solution/warehouse-castor" element={<WarehouseCastor/>} />
          <Route path="/solution/furniture-castors" element={<FurnitureCasters/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// /solution/warehouse-logistics
// /solution/furniture-castors
