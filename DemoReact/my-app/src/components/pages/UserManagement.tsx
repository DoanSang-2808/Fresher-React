import React, { useState, useEffect } from 'react';
import '../../css/pages/UserManagement.css';
import BaseInput from '../base/BaseInput';
import BaseButton from '../base/BaseButton';
import TableUserList from '../TableUserList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UserManagement(props : any) {
    const [users, setUsers] = useState<Array<any>>([]);
    const [value, setValue] = useState<String>("");
    const [record, setRecord] = useState({})
    const history = useNavigate();
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        console.log(props.newUser);
        // setUsers(users.push(`{hi: "Sang"}`))
        setRecord(props.newUser);
    }, [props.newUser]);

    const getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((res: any) => {
                setUsers(res.data);
            })
            .catch(error => console.log(error));
    }
    const changeInput = (inputData: any) => {
        setValue(inputData);
    }
    const addUser = () => {
        history('/users/add');
    }

    return (
        <div className="list-user">
            <div className="main-list-user">
                <h1 className="ma-0 font-s-48 font-w-300 line-h-62 mb-48">User management</h1>
                <div className="d-flex align-center justify-between mb-24">
                    <BaseInput width="400px" nameIcon="fas fa-search ml-8" inputPlaceholder="Search by email" changeInput={changeInput} />
                    <div className="d-flex">
                        <BaseButton nameIcon="fas fa-user-plus color-white" nameBtn="Add user" width="160px" background="#00338D" color="#fff" btnOnClick={addUser}/>
                        <BaseButton nameIcon="fas fa-upload color-white" nameBtn="Upload user list (CSV)" width="160px" background="#00338D" color="#fff" />
                    </div>
                </div>
                <TableUserList listUser={users} keySearch={value} record={record} />
                <div className="paging-wrapper">
                    <p className="ma-0 font-s-12 font-w-400 line-h-18 ">Rows per page</p>
                    <div className="option-record ml-8 d-flex align-center justify-between height-f">
                        <p className="ma-0 ml-12 font-s-12 font-w-400 line-h-18">10</p>
                        <i className="fas fa-chevron-down mr-16 font-s-12"></i>
                    </div>
                    <div className="total-record d-flex align-center">
                        <p className="ma-0 font-s-12 font-w-400 line-h-18 ">1-10 of 1200</p>
                    </div>
                    <div className="btn-first">
                        <i className="fas fa-angle-double-left font-s-12"></i>
                    </div>
                    <div className="btn-pre">
                        <i className="fas fa-angle-left font-s-12"></i>
                    </div>
                    <div className="btn-next">
                        <i className="fas fa-angle-right font-s-12"></i>
                    </div>
                    <div className="btn-last">
                        <i className="fas fa-angle-double-right font-s-12"></i>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UserManagement;