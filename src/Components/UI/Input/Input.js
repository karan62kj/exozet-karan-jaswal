import React from 'react';
import Style from './Input.module.css';

//Reusable component input
const Input = ({placeholder,onChange,value})=>{
return (<input type="text" placeholder={placeholder} onChange={onChange} value={value} className={Style.Input}/>)
}

export default Input;