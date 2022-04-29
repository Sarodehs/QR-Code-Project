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
                        <div className="row">
                            <div className="col-xl-2 col-md-2">

                                <div className="d-flex  align-items-center w-100 SettingNav vh-100 ">
                                    <ul className="nav  mb-0 align-items-center justify-content-center d-flex" id="menu">

                                        <li><NavLink to="/Setting/EditRestaurantProfile/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline">Edit Restaurant Profile</span>
                                            </a></NavLink></li>
                                        <li><NavLink to="/Setting/ManageCategory/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Manage Category</span>
                                            </a></NavLink></li>
                                        <li><NavLink to="/Setting/ChangeTheme/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Change Theme</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/ChangeFont/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Change Font</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/ChangePassword/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Change Password</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/GenerateQRCode/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Generate QR Code</span>
                                            </a></NavLink></li>

                                        <li><NavLink to="/Setting/AddBranch/" style={{ textDecoration: 'none' }} >
                                            <a href="/#" className="nav-link  align-middle d-flex">
                                                <span className=" d-sm-inline"> Add Branch</span>
                                            </a></NavLink></li>


                                    </ul>
                                </div>

                            </div>
                        </div>
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



