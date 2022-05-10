import React from "react";
import { NavLink } from 'react-router-dom'

const SettingNav = ({ children }) => {
    return (
        <>
           <div className="container-fluid  ">
                <div className="row ">

                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light   justify-content-center " >

                        
                        {/* <div className="row "> */}
                            <div className="col-xl-2 col-md-2 col-sm-2 p-2">

                                <div className="d-flex  SettingNav vh-100">
                                    <ul className="nav align-items-center justify-content-center d-flex " id="menu">

                                        <li className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/EditRestaurantProfile/" style={{ textDecoration: 'none'}} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span >Edit Restaurant Profile</span>
                                            </a></NavLink></li>
                                        <li className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/ManageCategory/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Manage Category</span>
                                            </a></NavLink></li>
                                        <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/ChangeTheme/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Change Theme</span>
                                            </a></NavLink></li>

                                        <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/ChangeFont/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Change Font</span>
                                            </a></NavLink></li>

                                        <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/ChangePassword/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Change Password</span>
                                            </a></NavLink></li>

                                        <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/GenerateQRCode/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Generate QR Code</span>
                                            </a></NavLink></li>

                                        <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                            <NavLink to="/Setting/AddBranch/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Add Branch</span>
                                            </a></NavLink></li>
                                    </ul>
                                </div>

                            </div>
                        {/* </div> */}
                        
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
            </div>
                
            
        </>
    );
}
export default SettingNav;



