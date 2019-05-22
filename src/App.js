import React, { Component } from 'react';
import classes from './App.css';
import Header from './containers/Header/Header';
import LeftBar from './containers/LeftBar/Leftbar';
import Footer from './containers/Footer/Footer';
import TopMenu from './containers/Header/TopMenu/TopMenu';
import TopButton from './components/Buttons/TopButton/TopButton';
import Contact from './components/Contact/Contact';


class App extends Component{

    render() {
        return (
            <div className={classes.App}>
                <Contact/>
                <TopButton/>
                <TopMenu/>
                <Header/>
                <LeftBar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
