import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Services, Transactions, Welcome } from "./components";
import NGOs from "./pages/NGOs";
import EthereumCard from "./components/EthereumCard"; 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* ✅ Ensure Home Page Includes Welcome, Services, and Transactions */}
          <Route path="/" element={
            <>
              <Welcome />
              <Services />
              <Transactions />
            </>
          } />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/ethereum-donation" element={<EthereumCard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
