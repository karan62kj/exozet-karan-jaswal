import React from 'react';
import Style from './Button.module.css';

// Reusable component button
const Button = ({onClick,label})=>{

return <button className={Style.Button} onClick={onClick}>{label}</button>
}

export default Button;