import React, { Component } from  'react';
import classes from './Contact.css';
import Swipe from 'react-easy-swipe';

class Contact extends Component {
    state = {
        swiped: false
    };

    onRight(event) {
        this.setState({swiped: true});
    }

    onLeft(event) {
        this.setState({swiped: false});
    }
    render() {
        let classList = [classes.Contact];
        if (this.state.swiped) {
            classList.push(classes.Open);
        }
        return (
                <Swipe onSwipeRight={this.onRight.bind(this)} onSwipeLeft={this.onLeft.bind(this)}>
                    <div className={classList.join(' ')}>
                        <div className={classes.Round}></div>
                        <a href='https://www.facebook.com/' className={classes.face} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href='https://www.instagram.com/' className={classes.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href='https://www.linkedin.com/in/hayk-hovsepyan-43b1a0187' className={classes.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href='https://github.com/Hayk231' className={classes.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href='https://vk.com/' className={classes.vk} target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
                    </div>
                </Swipe>
        );
    }
}

export default Contact;