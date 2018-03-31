import React, { Component } from 'react';
// import Ribbon from "./components/Ribbon";
import Search from "./components/Search";
import Footer from "./components/Footer";

class Main extends Component {
    render() {
        return (
            <main className="Main">
                <h3 className="Main-title text-center">Zikher Coding Challenge</h3>
                <Search />
                {/*<Ribbon />*/}
                <Footer />
            </main>
        );
    }
}

export default Main;
