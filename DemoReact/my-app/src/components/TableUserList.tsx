import React, {useState} from 'react';
import '../css/TableUserList.css';


function TableUserList(props: any) {
    const [sort, setSort] = useState(0);

    const changeSort = () => {
        if(sort < 2) {
            setSort(sort+1);
        } else {
            setSort(0)
        }
    }

    let users = props.listUser;
    const list = props.listUser
    //debugger; 
    const compareAZ = (a: any, b: any) => {
        var typeA : any = a.name.toUpperCase();
        var typeB : any = b.name.toUpperCase();
      
        let comparison = 0;
        if (typeA > typeB) {
          comparison = 1;
        } else if (typeA < typeB) {
          comparison = -1;
        }
        return comparison;
    }
    const compareZA = (a: any, b: any) => {
        var typeA : any = a.name.toUpperCase();
        var typeB : any = b.name.toUpperCase();
      
        let comparison = 0;
        if (typeA < typeB) {
          comparison = 1;
        } else if (typeA > typeB) {
          comparison = -1;
        }
        return comparison;
    }

    let styleIconSort : object = {};

    switch(sort) {
        case 1:
            styleIconSort= {opacity: "1"};
            users = users.sort(compareAZ);
            console.log(list);
            break;
        case 2: 
            styleIconSort= {opacity: "1", transform: 'rotate(180deg)'}
            users.sort(compareZA)
            console.log(list)
            break;
        default:
            console.log(list)
            break;
    };

    return (
        <div className="">
            <table cellPadding="0px" cellSpacing="0px">
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Name</p>
                        <i style={styleIconSort} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={changeSort}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Username</p>
                        <i style={styleIconSort} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={changeSort}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Email</p>
                        <i style={styleIconSort} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={changeSort}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Phone</p>
                        <i style={styleIconSort} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={changeSort}></i>
                    </div>
                </th>
                <th>
                    <div className="d-flex align-center height-f">
                        <p className="ma-0 font-s-14 font-w-400 line-h-18 color-grey ml-16">Website</p>
                        <i style={styleIconSort} className="icon-sort fas fa-arrow-down color-grey ml-14 font-w-600" onClick={changeSort}></i>
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