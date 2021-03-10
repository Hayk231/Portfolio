import React from 'react';
import classes from './About.css';
import DownButton from '../../../components/Buttons/DownButton/DownButton';

const about = (props) => (
    <div className={classes.About}>
        <h1>About</h1>
        <p>
            I aim to grow in my career and mutually benefit others alongside me. I always do my best to fully use
            my skills in my job and finish an assigned task as productive as possible and the word "possible" has
            no edge. I'm very cooperative and I always respect my colleagues.
        </p>
        <DownButton id='images'/>
    </div>
);

export default about;
