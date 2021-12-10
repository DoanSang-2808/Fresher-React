import React from 'react';
import '../../css/layout/SideBar.css';

function SideBar(props : any) {
    const hiddenSideBar = () => {
        props.hidden(true);
    };
    return (
        <div className="width-f height-f">
            <div className="header-bar">
                <p className="ma-0 font-s-24 line-h-18 ml-24 color-white">Survey Platform</p>
                <i className="fas fa-bars mr-27 color-primary" onClick={hiddenSideBar}></i>
            </div>
            <div className="main-bar ml-24 mr-24">
                <div className="mt-24 mb-24 height-40 d-flex align-center">
                    <i className="fas fa-home ml-10 mr-10 color-white"></i>
                    <p className="side-bar-item ma-0 color-white font-s-14 font-w-400 line-h-21">Home</p>
                </div>
                <hr className="hr" />
                <div className="mt-24 mb-24">
                    <div className="height-40 d-flex align-center mb-8">
                        <i className="fas fa-list ml-10 mr-10 color-white"></i>
                        <p className="side-bar-item ma-0 color-white font-s-14 font-w-400 line-h-21">Survey Admin</p>
                    </div>
                    <div className="height-40 d-flex align-center mb-8">
                        <i className="fas fa-store-alt ml-10 mr-10 color-white"></i>
                        <p className="side-bar-item ma-0 color-white font-s-14 font-w-400 line-h-21">Supplier Info</p>
                    </div>
                </div>
                <hr className="hr" />
                <div className="mt-24 mb-24">
                    <div className="height-40 d-flex align-center mb-8">
                        <i className="fas fa-building ml-10 mr-10 color-white"></i>
                        <p className="side-bar-item ma-0 color-white font-s-14 font-w-400 line-h-21">Engagement Info</p>
                    </div>
                    <div className="height-40 d-flex align-center mb-8">
                        <i className="fas fa-user-friends ml-10 mr-10 color-white"></i>
                        <p className="side-bar-item ma-0 color-white font-s-14 font-w-400 line-h-21">User Management</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
