import React, { Component } from 'react';
import classes from './Projects.css';
import Background1 from '../../../Images/burger.jpg';
import Background2 from '../../../Images/recipes.jpg';
import Background3 from '../../../Images/blog.jpg';

class Projects extends Component {

    render() {
        return (
            <div id='proj' className={classes.ParProj}>
                <h1>My Projects</h1>
            <div className={classes.Projects} >
                    <div className={classes.Blocks} style={{backgroundImage: `url(${Background1})`}}>
                        <div>
                            <span>Burger Builder</span>
                            <div></div>
                            <a href='/'><i className="fas fa-link"></i></a>
                        </div>
                    </div>
                    <div className={classes.Blocks} style={{backgroundImage: `url(${Background2})`}}>
                        <div>
                            <span>Recipes</span>
                            <div></div>
                            <a href='/'><i className="fas fa-link"></i></a>
                        </div>
                    </div>
                    <div className={classes.Blocks} style={{backgroundImage: `url(${Background3})`}}>
                        <div>
                            <span>SM Blog</span>
                            <div></div>
                            <a href='/'><i className="fas fa-link"></i></a>
                        </div>
                    </div>
                </div>
                {/*<DownButton id='Contact'/>*/}
            </div>
        );
    };
}

export default Projects;
