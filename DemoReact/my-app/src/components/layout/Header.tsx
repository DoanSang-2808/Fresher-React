import React from 'react';
import '../../css/layout/Header.css';

function Header() {
    return (
        <div className="width-f height-f d-flex align-center row-r">
            <div className="account">
                <p className="ma-0 font-s-14 font-w-400 line-h-21 ">firstname.lastname@jp.kpmg.com</p>
                <i className="fas fa-chevron-down ml-18 d-flex align-center"></i>
            </div>
        </div>
    );
};

export default Header;