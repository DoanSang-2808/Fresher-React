import React, {useState, useEffect} from 'react';
import '../../css/base/BaseButton.css';

function Button(props : any) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setStyle({background: `${props.background}`, border: `1px solid ${props.border}`, width: `${props.width}`, color: `${props.color}`})
    }, [props])

    const btnOnClick = () => {
        props.btnOnClick();
    }
    return (
       <div className="button-wrapper ml-16" style={style} onClick={btnOnClick}>
           <i className={props.nameIcon} ></i>
           <p className="ma-0 font-s-14 font-w-600 line-h-18 ml-8">{props.nameBtn}</p>
       </div>
    );
};

export default Button;