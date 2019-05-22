import React, { Component } from 'react';
import classes from './TopButton.css';
import {Link} from "react-scroll/modules";

class TopButton  extends Component {
    state = {
        showButton: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.ScrollHandler)
    }
    ScrollHandler = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= document.documentElement.clientHeight) {
            this.setState({showButton: true})
        }
        else {
            this.setState({showButton: false})
        }
    };


    render() {
        let ButtClasses = [classes.button, classes.pulse];
        if (this.state.showButton) {
            ButtClasses.push(classes.ButtShow)
        }
        return(
            <Link to='top' duration={450} smooth={true} className={ButtClasses.join(' ')}>
                <i className="fas fa-chevron-up"></i>
            </Link>
        );
    }

};

export default TopButton;