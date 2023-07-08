import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Best from "./components/Best";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar1";
import Members from "./components/Members";


function App() {
  return (
    <>
  <Navbar/>
  {/* <ResponsiveAppBar/> */}
  <Hero/>
  <Best/>
  <Members/>
  <Footer/>
  

    </>
  );
}

export default App;
