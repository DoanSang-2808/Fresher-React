import React, { useState, useEffect } from 'react';
import '../../../css/pages/AddUser.css';
import BaseInput from '../../base/BaseInput';
import BaseButton from '../../base/BaseButton';
import { Link } from 'react-router-dom';


function AddUsers() {

    return (
        <div className="add-user">
            <div className="main-add-user">
                <div className="header-add-user d-flex justify-between align-center">
                    <h1 className="ma-0 font-s-48 font-w-300 line-h-62 mb-24">Add User</h1>
                    <div className='d-flex'>
                        <Link to="/users" className='text-d-none'><BaseButton nameBtn="Cancel" width="136px" border="#00338D" background="#fff" color="#005EB8" /></Link>
                        <BaseButton nameBtn="Save" width="136px" background="#00A3A1" color="#fff" />
                    </div>
                </div>
                <p className="ma-0 font-w-600 font-s-24" style={{ margin: "0 0 20px" }}>General Information</p>
                <div style={{ margin: "0 0 35px" }} >
                    <label className="font-s-12 font-w-400 line-h-18 mb-4">Email *</label>
                    <BaseInput width="736px" />
                </div>
                <div style={{ margin: "0 0 35px" }}>
                    <label className="font-s-12 font-w-400 line-h-18 mb-4">User role *</label>
                    <div>
                        <BaseInput width="300px" />
                        {/* <i className="fas fa-chevron-down"></i> */}
                    </div>
                </div>
                <p className="ma-0 font-w-600 font-s-24" style={{ margin: "0 0 20px" }}>Name</p>
                <div style={{ margin: "0 0 35px" }}>
                    <div className="d-flex">
                        <div className='mr-16'>
                            <label className="font-s-12 font-w-400 line-h-18 mb-4">LastName (Japanese)</label>
                            <BaseInput width="360px" />
                        </div>
                        <div >
                            <label className="font-s-12 font-w-400 line-h-18 mb-4">FirstName (Japanese)</label>
                            <BaseInput width="360px" />
                        </div>
                    </div>
                </div>
                <div style={{ margin: "0 0 40px" }}>
                    <div className="d-flex">
                        <div className='mr-16'>
                            <label className="font-s-12 font-w-400 line-h-18 mb-4">LastName (English)</label>
                            <BaseInput width="360px" />
                        </div>
                        <div>
                            <label className="font-s-12 font-w-400 line-h-18 mb-4">FirstName (English)</label>
                            <BaseInput width="360px" />
                        </div>
                    </div>
                </div>
                <p className="ma-0 font-w-600 font-s-24" style={{ margin: "0 0 20px" }}>Engagement information</p>
                <div style={{ margin: "0 0 5px" }}>
                    <label className="font-s-12 font-w-400 line-h-18 mb-4">Engagement code *</label>
                    <div >
                        <BaseInput width="736px" />
                        {/* <i className="fas fa-chevron-down"></i> */}
                    </div>
                </div>
                <p className="color-mono ma-0 font-s-12 font-w-400 line-h-18" style={{ margin: "0 0 20px" }}>If
                    engagement code cannot be found, please register engagement in Engagement Info first.</p>
                <div>
                    <p className="color-mono ma-0 font-s-12 font-w-400 line-h-18 mb-4">Company name (Japanese)</p>
                    <p className="ma-0 font-s-16 font-w-400 line-h-24">-</p>
                </div>
                <div>
                    <p className="color-mono ma-0 font-s-12 font-w-400 line-h-18 mb-4">Company name (Emglish)</p>
                    <p className="ma-0 font-s-16 font-w-400 line-h-24">-</p>
                </div>
                <div style={{ margin: "0 0 35px" }}>
                    <label className="font-s-12 font-w-400 line-h-18 mb-4">Department (Japanese)</label>
                    <BaseInput width="736px" />
                </div>
                <div style={{ margin: "0 0 40px" }}>
                    <label className="font-s-12 font-w-400 line-h-18 mb-4">Department (English)</label>
                    <BaseInput width="736px" />
                </div>
                <div className='d-flex row-r'>
                    <BaseButton nameBtn="Save" width="136px" background="#00A3A1" color="#fff" />
                    <BaseButton nameBtn="Cancel" width="136px" border="#00338D" background="#fff" color="#005EB8" />
                </div>
            </div>
        </div>
    );
};

export default AddUsers;