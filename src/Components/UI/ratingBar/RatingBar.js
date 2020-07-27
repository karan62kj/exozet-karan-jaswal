import React from 'react';
import Style from './RatingBar.module.css';

// Reusable component rating bars
const RatingBar  = ({label,rating})=>{

    return (<div>
        <div className={Style.label}>
            <span className={Style.label__name}>{label}</span>
            <span className={Style.label__rating}>{rating}%</span>
        </div>

        <div className={Style.progressBar}>
            <div className={Style.progress} style={{width:rating+'%'}}>&nbsp;</div>
        </div>
    </div>)
}

export default RatingBar;