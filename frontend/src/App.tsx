import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCategory from './pages/admin/ManageCategory';
import EditCategory from './pages/admin/EditCategory';
import ManageProduct from './pages/admin/ManageProduct';

import HomeProduct from './pages/homeProduct';
import ManageOrder from './pages/admin/ManageOrder';
import ManageUser from './pages/admin/ManageUser';


// import {isLoggedIn} from '../src/auth/authService';


const queryClient = new QueryClient();
const App:React.FC = () => {
  // const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  return <Router>
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
     
      <Route path="/HomeProduct" element={<HomeProduct/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/admin/login" element={<AdminLogin/>}/>
      <Route path="/admin/register" element={<AdminRegister/>}/>
      <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="/managecategory" element={<ManageCategory/>}/>
      <Route path="/edit:pk_id" element={<EditCategory/>}/>
      <Route path="/manageproduct" element={<ManageProduct/>}/>
      <Route path="/order" element={<ManageOrder/>}/>
      <Route path="/user" element={<ManageUser/>}/>



      {/* {loggedIn ? (
            <Route path="/dashboard" element={<UserDashboard />} />
          ) : null}
       */}






    </Routes>
    </QueryClientProvider>
  </Router>
    
  
};

export default App;

// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import SingleProduct from "./pages/SingleProduct";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminRegister from "./pages/admin/AdminRegister";
// import ManageCategory from "./pages/admin/ManageCategory";
// import EditCategory from "./pages/admin/EditCategory";
// import AdminDashboard from "./pages/admin/AdminDashboard";



// const queryClient = new QueryClient();

// function App() {
//     return (
//         <>
//             <QueryClientProvider client={queryClient}>
//                 <RouterProvider router={createBrowserRouter([
                  
//                     {path: "/Home", element: <Home/>},
//                     {path: "/About", element: <About/>},
//                     {path: "/Products", element: <Products/>},
//                     {path: "/Contact", element: <Contact/>},
//                     {path: "/SingleProduct/:id", element: <SingleProduct/>},
//                     {path: "/Cart", element: <Cart/>},
//                     {path: "/Login", element: <Login/>},
//                     {path: "/Signup", element: <Signup/>},
//                     {path: "/AdminLogin", element: <AdminLogin/>},
//                     {path: "/AdminRegister", element: <AdminRegister/>},
//                     {path: "/ManageCategory", element: <ManageCategory/>},
//                     {path: "/edit/:pk_id", element: <EditCategory/>},
//                     {path: "/AdminDashboard", element: <AdminDashboard/>},
                    

                    
                    
                   
//                 ])} />
//             </QueryClientProvider>
//         </>
//     )
// }

// export default App