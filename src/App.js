import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {
  About,
  Accounts,
  CFD,
  FAQ,
  Forex,
  Home,
  KYC,
  Platform,
  Privacy,
  Signals,
  Spreads,
  Terms,
  TradingGlossary,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/platforms" element={<Platform />} />
        <Route path="/about" element={<About />} />
        <Route path="/cfd" element={<CFD />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/trading" element={<TradingGlossary />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/spreads" element={<Spreads />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
