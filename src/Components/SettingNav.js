import React from "react";
import { NavLink } from 'react-router-dom'
const SettingNav = ({ children }) => {
    return (
        <>
           <div className="container-fluid displayflex ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >

                        <div className=" displayflex ">
                        {/* <div className="row "> */}
                            <div className="col-xl-2 col-md-4 col-sm-8 p-2">

                                <div className="d-flex  SettingNav vh-100">
                                    <ul className="nav align-items-center justify-content-center d-flex " id="menu">

                                        <li className="" >
                                            <NavLink to="/Setting/EditRestaurantProfile/" style={{ textDecoration: 'none'}} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span >Edit Restaurant Profile</span>
                                            </a></NavLink></li>
                                        <li className=""><NavLink to="/Setting/ManageCategory/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Manage Category</span>
                                            </a></NavLink></li>
                                        <li><NavLink to="/Setting/ChangeTheme/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Change Theme</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/ChangeFont/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Change Font</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/ChangePassword/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span> Change Password</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/GenerateQRCode/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Generate QR Code</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/AddBranch/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span > Add Branch</span>
                                            </a></NavLink></li>


                                    </ul>
                                </div>

                            </div>
                        {/* </div> */}
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
            </div>
                
            
        </>
    );
}
export default SettingNav;



