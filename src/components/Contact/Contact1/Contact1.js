import React from 'react';
import classes from './Contact1.css';

const contact1 = (props) => {
    return (
        <div className={classes.Cont}>
            <input type='checkbox'></input>
            <div className={classes.menu}></div>
            <div className={classes.line_one} style={{background: props.spanColor}}></div>
            <div className={classes.line_two} style={{background: props.spanColor}}></div>
            <div className={classes.icon_one}>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
            <div className={classes.icon_two}>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className={classes.icon_three}>
                <a href='https://www.linkedin.com/in/hayk-hovsepyan-43b1a0187' target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div className={classes.icon_four}>
                <a href='https://github.com/Hayk231' target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default contact1;