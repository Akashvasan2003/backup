import React, { useState } from "react";
import Header from "./components/Header";
import PortfolioForm from "./components/PortfolioForm";
import PortfolioDisplay from "./components/PortfolioDisplay";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null); 

  return (
    <div className="app-container">
      <Header />
      <PortfolioForm onSubmit={setPortfolioData} />
      {portfolioData && <PortfolioDisplay data={portfolioData} />} 
      <Footer />
    </div>
  );
};

export default App;
