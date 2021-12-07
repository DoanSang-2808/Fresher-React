import React from 'react';
import '../../css/base/BaseInput.css';

function BaseInput(props : any) {
    return (
       <div className="input-wrapper">
           <i className={props.nameIcon}></i>
           <input className="ml-8" type="text" placeholder={props.inputPlaceholder} />
       </div>
    );
};

export default BaseInput;