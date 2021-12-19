import React, { useState, useEffect } from 'react';
import '../css/TableUserList.css';


function TableUserList(props: any) {
    const [sort, setSort] = useState(0);
    const [users, setUsers] = useState([{}]);
    const [name, setName] = useState({});
    const [username, setUsername] = useState({});
    const [email, setEmail] = useState({});
    const [phone, setPhone] = useState({});
    const [website, setWebsite] = useState({})
    
    const keySearch = props.keySearch;
    //debugger;
    
    useEffect(() => {
        setUsers([...props.listUser]);
        setSort(0)
    },[props.listUser]);  

    useEffect(() => {
        search();
    },[keySearch]); 
    
    const changeSort = (nameColumn: any) => {
        setSort((sort + 1) % 3)
        sortTable(nameColumn);
    }

    const nameAZ = (a: any, b: any) => {
        var typeA: any = a.name.toUpperCase();
        var typeB: any = b.name.toUpperCase();

        let comparison = 0;
        if (typeA > typeB) {
            comparison = 1;
        } else if (typeA < typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const nameZA = (a: any, b: any) => {
        var typeA: any = a.name.toUpperCase();
        var typeB: any = b.name.toUpperCase();

        let comparison = 0;
        if (typeA < typeB) {
            comparison = 1;
        } else if (typeA > typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const usernameAZ = (a: any, b: any) => {
        var typeA: any = a.username.toUpperCase();
        var typeB: any = b.username.toUpperCase();

        let comparison = 0;
        if (typeA > typeB) {
            comparison = 1;
        } else if (typeA < typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const usernameZA = (a: any, b: any) => {
        var typeA: any = a.username.toUpperCase();
        var typeB: any = b.username.toUpperCase();

        let comparison = 0;
        if (typeA < typeB) {
            comparison = 1;
        } else if (typeA > typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const emailAZ = (a: any, b: any) => {
        var typeA: any = a.email.toUpperCase();
        var typeB: any = b.email.toUpperCase();

        let comparison = 0;
        if (typeA > typeB) {
            comparison = 1;
        } else if (typeA < typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const emailZA = (a: any, b: any) => {
        var typeA: any = a.email.toUpperCase();
        var typeB: any = b.email.toUpperCase();

        let comparison = 0;
        if (typeA < typeB) {
            comparison = 1;
        } else if (typeA > typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const phoneAZ = (a: any, b: any) => {
        var typeA: any = a.phone.toUpperCase();
        var typeB: any = b.phone.toUpperCase();

        let comparison = 0;
        if (typeA > typeB) {
            comparison = 1;
        } else if (typeA < typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const phoneZA = (a: any, b: any) => {
        var typeA: any = a.phone.toUpperCase();
        var typeB: any = b.phone.toUpperCase();

        let comparison = 0;
        if (typeA < typeB) {
            comparison = 1;
        } else if (typeA > typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const websiteAZ = (a: any, b: any) => {
        var typeA: any = a.website.toUpperCase();
        var typeB: any = b.website.toUpperCase();

        let comparison = 0;
        if (typeA > typeB) {
            comparison = 1;
        } else if (typeA < typeB) {
            comparison = -1;
        }
        return comparison;
    }
    const websiteZA = (a: any, b: any) => {
        var typeA: any = a.website.toUpperCase();
        var typeB: any = b.website.toUpperCase();

        let comparison = 0;
        if (typeA < typeB) {
            comparison = 1;
        } else if (typeA > typeB) {
            comparison = -1;
        }
        return comparison;
    }


    const search = () => {
        if (keySearch.length > 0) {
            setUsers([...props.listUser.filter((l: any) => l.name.toLowerCase().match(keySearch) !== null)]);
        } else if (keySearch == 0) {
            setUsers([...props.listUser]);
        }
    }

    const sortTable = (nameColumn : any) => {
        switch (nameColumn) {
            case "name":
                switch (sort) {
                    case 0:
                        setName({ opacity: "1" });
                        users.sort(nameAZ);
                        break;
                    case 1:
                        setName({ opacity: "1", transform: 'rotate(180deg)' });
                        users.sort(nameZA)
                        break;
                    default:
                        setName({});
                        setUsers([...props.listUser]);
                        break;
                };
                break;
            case "username":
                switch (sort) {
                    case 0:
                        setUsername({ opacity: "1" });
                        users.sort(usernameAZ);
                        break;
                    case 1:
                        setUsername({ opacity: "1", transform: 'rotate(180deg)'});
                        users.sort(usernameZA)
                        break;
                    default:
                        setUsername({});
                        setUsers([...props.listUser]);
                        break;
                };
                break;
            case "email":
                switch (sort) {
                    case 0:
                        setEmail({ opacity: "1" });
                        users.sort(emailAZ);
                        break;
                    case 1:
                        setEmail({ opacity: "1", transform: 'rotate(180deg)'});
                        users.sort(emailZA)
                        break;
                    default:
                        setEmail({});
                        setUsers([...props.listUser]);
                        break;
                };
                break;
            case "phone":
                switch (sort) {
                    case 0:
                        setPhone({ opacity: "1" });
                        users.sort(phoneAZ);
                        break;
                    case 1:
                        setPhone({ opacity: "1", transform: 'rotate(180deg)' });
                        users.sort(phoneZA)
                        break;
                    default:
                        setPhone({});
                        setUsers([...props.listUser]);
                        break;
                };
                break;
            case "website":
                switch (sort) {
                    case 0:
                        setWebsite({ opacity: "1" });
                        users.sort(websiteAZ);
                        break;
                    case 1:
                        setWebsite({ opacity: "1", transform: 'rotate(180deg)' })
                        users.sort(websiteZA)
                        break;
                    default:
                        setWebsite({});
                        setUsers([...props.listUser]);
                        break;
                };
                break;
        }
    }
    // console.log(sort)
    return (
        <div>
            <table cellSpacing="0px" cellPadding="0px">
                <th>
                    <div className="d-flex align-center height-f" key="name">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Name</p>
                        <i style={name} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={() => changeSort("name")} ></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Username</p>
                        <i style={username} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={() => changeSort("username")}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Email</p>
                        <i style={email} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={() => changeSort("email")}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Phone</p>
                        <i style={phone} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={() => changeSort("phone")}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Website</p>
                        <i style={website} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={() => changeSort("website")}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16 mr-24">Edit</p>
                    </div>
                </th>
                <tbody>

                    {users.map((item: any) => {
                        return <tr key={item.id}>
                            <td className="pl-16">{item.name}</td>
                            <td className="pl-16">{item.username}</td>
                            <td className="pl-16">{item.email}</td>
                            <td className="pl-16">{item.phone}</td>
                            <td className="pl-16">{item.website}</td>
                            <td><i className="btn-edit fas fa-pencil-alt pl-16 font-s-18 color-primary"></i></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default TableUserList;