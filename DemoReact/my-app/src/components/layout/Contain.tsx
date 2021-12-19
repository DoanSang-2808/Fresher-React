import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../css/layout/Contain.css';
import AddUsers from './pages/AddUser';
import UserManagement from './pages/UserManagement';


function Contain() {
    return (
        <div className="width-f height-f">
            <div className="contain-wrapper">
                <div className="title">
                    <i className="fas fa-user-friends ml-10 mr-10 color-grey font-s-14"></i>
                    <p className="ma-0 font-s-12 font-w-400 line-h-18 color-grey">User management {window.location.pathname} </p>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/users" element={<UserManagement />} />
                        <Route path="/users/add" element={<AddUsers />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    );
};
export default Contain;