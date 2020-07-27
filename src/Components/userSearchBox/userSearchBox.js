import React from 'react';
import Style from './userSearchBox.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

// This is a SearchBox Component
const UserSearchBox  = ({value,onInputChange,onGenerateClick})=>{

return (<div className={Style.SearchBox}>
   <h2 className={Style.HeadingPrimary}>Github username</h2>
   <Input placeholder="Please enter git username" value={value} onChange={onInputChange}/>
   <Button label="Generieren" onClick={onGenerateClick}/>
</div>)
}

export default UserSearchBox;