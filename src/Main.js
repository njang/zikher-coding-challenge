import React, { Component } from 'react';
import Search from "./components/Search";
import Footer from "./components/Footer";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1 className="Main-title">Zikher Coding Challenge</h1>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default Main;
