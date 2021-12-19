import React, {useState, useEffect} from 'react';
import '../../css/base/BaseInput.css';

function BaseInput(props : any) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        setStyle({width: `${props.width}`})
    }, [props])
    const changeInput = (event : any) => {
        props.changeInput(event.target.value);
    }
    return (
       <div className="input-wrapper" style={style}>
           <i className={props.nameIcon}></i>
           <input className="ml-8 input" type="text" placeholder={props.inputPlaceholder} onChange={changeInput} />
       </div>
    );
};

export default BaseInput;