import React from 'react';
import classes from './ImgPreview.css';
import DownButton from '../../../components/Buttons/DownButton/DownButton';

const imgPreview = (props) => (
        <div className={classes.ImgPreview} id='images'>
            <div className={classes.container}>
                <div className={classes.box}>
                    <img src="https://source.unsplash.com/1000x800" alt='img'></img>
                </div>
                <div className={classes.box}>
                    <img src="https://source.unsplash.com/1000x802" alt='img'></img>
                </div>
                <div className={classes.box}>
                    <img src="https://source.unsplash.com/1000x804" alt='img'></img>
                </div>
                <div className={classes.box}>
                    <img src="https://source.unsplash.com/1000x806" alt='img'></img>
                </div>
            </div>
            <DownButton id='proj'/>
        </div>
);
export default imgPreview;
