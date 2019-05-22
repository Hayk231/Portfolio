import React from 'react';
import classes from "./DownButton.css";
import {Link} from "react-scroll/modules";

const downButton = (props) => (
    <Link to={props.id}
          duration={700}
          smooth={true}
          className={classes.Link}>
        <div className={classes.Button}>
            <div className={classes.Arrow}>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    </Link>
);

export default downButton;
