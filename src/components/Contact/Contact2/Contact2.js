import React from 'react';
import classes from './Contact2.css';
import {Link} from "react-scroll/modules";

const contact2 = (props) => {
    let page1 = null;
    let page2 = null;
    let page3 = null;
    let page4 = null;
    if (props.pageNum === 1) {
        page1 = '#e97a41';
    } else if (props.pageNum === 2) {
        page2 = '#e97a41';
    } else if (props.pageNum === 3) {
        page3 = '#e97a41';
    } else if (props.pageNum === 4) {
        page4 = '#e97a41';
    }

    return (
        <div className={classes.Cont}>
            <input type='checkbox'></input>
            <div className={classes.menu}></div>
            <div className={classes.line_one} style={{background: props.spanColor}}></div>
            <div className={classes.line_two} style={{background: props.spanColor}}></div>
            <div className={classes.icon_one} style={{background : page1}}>
                <Link to='top' duration={450} smooth={true}>
                    <i className="fas fa-home"></i>
                </Link>
            </div>
            <div className={classes.icon_two} style={{background : page2}}>
                <Link to='footer' duration={450} smooth={true}>
                    <i className="fas fa-info-circle"></i>
                </Link>
            </div>
            <div className={classes.icon_three} style={{background : page3}}>
                <Link to='images' duration={450} smooth={true}>
                    <i className="fas fa-images"></i>
                </Link>
            </div>
            <div className={classes.icon_four} style={{background : page4}}>
                <Link to='proj' duration={450} smooth={true}>
                    <i className="fas fa-project-diagram"></i>
                </Link>
            </div>
        </div>
    );
};

export default contact2;