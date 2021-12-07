import React from 'react';
import '../css/TableUserList.css';

// interface MyProps {
//     listUser: Array<any>
// }
function TableUserList(props: any) {
    const users = props.listUser;
    return (
        <div className="">
            <table cellPadding="0px" cellSpacing="0px">
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Name</p>
                        <i className="fas fa-arrow-down color-grey ml-14 font-w-600"></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Username</p>
                        <i className="fas fa-arrow-down color-grey ml-14 font-w-600"></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Email</p>
                        <i className="fas fa-arrow-down color-grey ml-14 font-w-600"></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Phone</p>
                        <i className="fas fa-arrow-down color-grey ml-14 font-w-600"></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Website</p>
                        <i className="fas fa-arrow-down color-grey ml-14 font-w-600"></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16 mr-24">Edit</p>
                    </div>
                </th>
                <tbody>
                   
                {users.map((item: any) => {
                            return <tr>
                                        <td className="pl-16">${item.name}</td>
                                        <td className="pl-16">${item.username}</td>
                                        <td className="pl-16">${item.email}</td>
                                        <td className="pl-16">${item.phone}</td>
                                        <td className="pl-16">${item.website}</td>
                                        <td><i className="fas fa-pencil-alt pl-16 font-s-18 color-primary"></i></td>
                                    </tr>
                })}
                </tbody>
            </table>
         
        </div>
    );
};

export default TableUserList;