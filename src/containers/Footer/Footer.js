import React, { Component} from 'react';
import classes from './Footer.css';
import About from './About/About';
import ImgPreview from './ImgPreview/ImgPreview';
import Projects from './Projects/Projects';

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <h1 id='footer' style={{opacity: 0}}>Welcome</h1>
                <About/>
                <ImgPreview/>
                <Projects/>
            </div>
        );
    }
}

export default Footer;