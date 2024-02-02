


import '../../assets/css/admin/AdminDashboard.css';
import {useLocation} from "react-router-dom";
import { FaSearch  } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar.tsx";
import axios from 'axios';
import { useQuery} from "@tanstack/react-query";
import { FaBowlFood } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
  
function AdminDashboard(){

  const location = useLocation(); // Use useLocation to get the current location
  const currentLocation = location.pathname;

  const { data: ProductData } = useQuery({
    queryKey: ["GETDATA"],
    queryFn() {
      return axios.get("http://localhost:8080/product/findAll",
      {
        headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
     } );
    },
  });
  
    // Fetching data from API
    const{data:CategoryData} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8080/category/findAll",{
                headers:{authorization:"Bearer "+localStorage.getItem("accessToken")}
            
        })
    }
    })

  return(
      <>
          <div className={"admin-dashboard-page"}>
              <div className={"dashboard-left"} >
                  <AdminSidebar activePage={currentLocation} />
              </div>

              <div className={"dashboard-right"}>
                  <header className={"dashboard-header"}>
                      <h1>Dashboard</h1>

                      <div className={"search-wrapper"}>
                          <span><FaSearch /></span>
                          <input type={"search"} placeholder={"Search here"}/>
                      </div>

                      <div className={"user-wrapper"}>
                          <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                          <div>
                              <h4>Admin</h4>
                              <small>Super admin</small>
                          </div>
                      </div>
                  </header>

                  <div className={'dashboard-main-content'}>
            {/* Add the dashboard-cards section here */}
            <div className={'dashboard-cards'}>
              <div className={'d-card-left'}>
                <h2>Products</h2>
                <h3>{ProductData?.data.length}</h3>
              </div>
              <span>
                <FaBowlFood style={{ fontSize: '3.8vw', marginBottom: '100px' }} />
              </span>
            </div>

            
          {/* Categories Card */}
          <div className={'dashboard-cards'}>
              <div className={'d-card-left'}>
                <h2>Categories</h2>
                <h3>{CategoryData?.data.length}</h3>
              </div>
              
              <span>
                <MdCategory style={{ fontSize: '3.8vw', marginBottom: '20px' }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
