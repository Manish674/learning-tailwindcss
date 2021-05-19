import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./components/Pages/Homepage";
import DestinationPage from "./components/Pages/Destpage";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <DestinationPage />
      <Footer />
    </>
  );
};

export default App;
