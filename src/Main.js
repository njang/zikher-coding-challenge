import React, { Component } from 'react';
import Ribbon from "./components/Ribbon";
import Search from "./components/Search";
import Footer from "./components/Footer";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                {/*<h1 className="Main-title text-center">Zikher Coding Challenge</h1>*/}
                <Ribbon />
                <Search />
                <Footer />
            </div>
        );
    }
}

export default Main;
