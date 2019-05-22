import React, {Component, Fragment} from 'react';
import classes from './TopMenu.css';
import {Link} from "react-scroll/modules";
import Contact1 from '../../../components/Contact/Contact1/Contact1';
import Contact2 from '../../../components/Contact/Contact2/Contact2';

class  TopMenu extends Component {
    state = {
        scrolled: false,
        pageSet: 0,
        pageNum: null,
        spanCo: 'whitesmoke',
        DeskOrMob: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.ScrollHandler );
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if (width <= 768) {
            this.setState({DeskOrMob: true})
        } else {
            this.setState({DeskOrMob: false})
        }
    }

    ScrollHandler = () => {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
        let scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
        this.setState({pageSet: scrolled});

        if (scrolledTop >= 62) {
            this.setState({scrolled: true});
            this.setState({spanCo: '#120c22'})
        }
        else {
            this.setState({scrolled: false});
            this.setState({spanCo: 'whitesmoke'})
        }


        let pageHeight = document.documentElement.clientHeight;
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll >= 0 && scroll < pageHeight) {
            this.setState({pageNum: 1});
        } else if (scroll >= pageHeight && scroll < (pageHeight*2)) {
            this.setState({pageNum: 2});
        } else if (scroll >= (pageHeight*2) && scroll < (pageHeight*3)) {
            this.setState({pageNum: 3});
        } else if (scroll >= (pageHeight*3) && scroll < (pageHeight*4)) {
            this.setState({pageNum: 4});
        }
    };

    render() {
        let TopClasses = [classes.TopMenu];
        let ScrollDiv = [classes.Parent];
        if (this.state.scrolled) {
            TopClasses.push(classes.MenuScrolled);
            ScrollDiv.push(classes.ParAfter)
        }

        let class1 = [classes.Link];
        let class2 = [classes.Link];
        let class3 = [classes.Link];
        let class4 = [classes.Link];
        if (this.state.pageNum === 1) {
            class1.push(classes.Active)
        } if (this.state.pageNum === 2) {
            class2.push(classes.Active)
        } if (this.state.pageNum === 3) {
            class3.push(classes.Active)
        } if (this.state.pageNum === 4) {
            class4.push(classes.Active)
        }
        let component = null;
        let displaying = 'flex';
        if (this.state.DeskOrMob) {
            displaying = 'block';
            component = (
                <Fragment>
                    <Contact1 spanColor={this.state.spanCo} pageNum={this.state.pageNum}/>
                    <Link to='top' duration={450} smooth={true} className={classes.Logo}>
                        <div className={classes.title1}>
                            <img src={require('./logo1.png')} alt='Logo'/>
                        </div>
                    </Link>
                    <Contact2 spanColor={this.state.spanCo} pageNum={this.state.pageNum}/>
                </Fragment>
            );
        } else {
            displaying = 'flex';
            component = (
                <Fragment>
                    <Link to='top' duration={450} smooth={true}>
                        <div className={classes.title}>
                            <img src={require('./logo1.png')} alt='Logo'/>
                        </div>
                    </Link>
                    <div className={classes.NavBar}>
                        <Link to='top' duration={450} smooth={true} className={class1.join(' ')}>
                            Home
                            <div></div>
                        </Link>
                        <Link to='footer' duration={450} smooth={true} className={class2.join(' ')}>
                            About
                            <div></div>
                        </Link>
                        <Link to='images' duration={450} smooth={true} className={class3.join(' ')}>
                            Images
                            <div></div>
                        </Link>
                        <Link to='proj' duration={450} smooth={true} className={class4.join(' ')}>
                            Projects
                            <div></div>
                        </Link>
                    </div>
                </Fragment>
            );
        }

        return (
            <div className={ScrollDiv.join(' ')}>
                    <div className={classes.HeightScroll} style={{width: this.state.pageSet + '%'}}></div>
                    <div className={TopClasses.join(' ')} style={{display: displaying}}>
                        {component}
                    </div>
                </div>
        );
    }
}

export default TopMenu;