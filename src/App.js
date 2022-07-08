import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { createContext, useState } from "react";


function App() {

  
  
  return (
    
      <div className="bg-[#14161a] text-white min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coins/:id" element={<CoinPage />}></Route>
        </Routes>
      </div>
    
  );
}

export default App;
