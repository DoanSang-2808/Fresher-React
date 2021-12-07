import React from 'react';
import '../../css/base/BaseButton.css';

function Button(props : any) {
    return (
       <div className="button-wrapper ml-16">
           <i className={props.nameIcon} ></i>
           <p className="ma-0 font-s-14 font-w-600 line-h-18 ml-8 color-white">{props.nameBtn}</p>
       </div>
    );
};

export default Button;