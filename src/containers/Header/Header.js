import React, { Component } from 'react';
import classes from './Header.css';
import DownButton from '../../components/Buttons/DownButton/DownButton';


class Header extends Component {

    render() {
        return(
            <div className={classes.Header} id='top'>
                <div className={classes.area}>
                    <ul className={classes.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                    <div className={classes.backgroundVideo}>
                        <h1>Get Started</h1>
                        <DownButton id='footer'/>
                    </div>
            </div>
        );
    }
}

export default Header;