import React, { Component } from "react";
import Cv from "./components/Cv";
import Footer from "./components/Footer";
import Navbar from "./components/Nabar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Cv />
        <Footer />
      </div>
    );
  }
}

export default App;
