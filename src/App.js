import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Best from "./components/Best";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar1";
import Members from "./components/Members";
import LoginForm from "./components/Login";


function App() {
  return (
    <div className="App">
  <Navbar/>
  {/* <LoginForm/> */}
  {/* <ResponsiveAppBar/> */}
  <Hero/>
  <Best/>
  <Members/>
  <Footer/>
  

    </div>
  );
}

export default App;
