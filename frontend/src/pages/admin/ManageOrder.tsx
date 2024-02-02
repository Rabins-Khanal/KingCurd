


import '../../assets/css/admin/ManageOrder.css';
import {useLocation} from "react-router-dom";
import { FaSearch  } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar.tsx";
import React, {  useState } from "react";

import 'react-toastify/dist/ReactToastify.css';


  
const ManageOrder: React.FC = () =>  {

    const[search, setSearch] = useState('');

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;
    

    return(
        <section>
            <div className={"manage-order-page"}>
                <div className={"order-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"order-right"}>
                    <header className={"order-header"}>
                        <h1>Manage Order</h1>

                        <div className={"search-wrapper2"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Order"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>

                        <div className={"user-wrapper2"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Admin</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>

                    <div className={"order-main-content"}>
                        <div className={"c-main-content"}>
                            

                            <div className={"table-container2"}>
                                <div className={"card-header2"}>
                                    <h2>Orders</h2>
                                </div>
                                <div className={"card-body2"}>
                                    <table className={"table-bordered2"}>
                                        <thead>
                                        <tr>
                                            <th className={"id-box2"}>ID</th>
                                            <th className={"name-box2"}>user Id</th>
                                            <th className={"name-box2"}>product Id</th>
                                            <th className={"name-box2"}>sales quantity</th>
                                            <th className={"edit-box2"}>Edit</th>
                                            <th className={"delete-box2"}>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </section>
                    

  );
};

export default ManageOrder;
