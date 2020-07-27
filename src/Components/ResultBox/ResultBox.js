import React from 'react';
import Style from './ResultBox.module.css';

// This is a resuable component which can be used if the container is required
const GeneratedBox = (props)=>{

return (<div className={Style.ResultBox}>
    {props.children}
    </div>)
}

export default GeneratedBox;