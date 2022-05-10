import React from "react";
import { NavLink } from 'react-router-dom';



const SelectTopnav = () => {
    return (

        <>
            <div className="container-fluid">
                <div >
                    {/* <!--top nav start --> */}
                    <nav className="navbar navbar-light w-100 topnavpadd">
                        <div className="navbar-nav  d-flex justify-content-center px-4">
                            <a className="navbar-brand" href="/#"> <img src="/assets/images/logo.png" className="img-fluid w-75" alt="logo" /></a>
                        </div>
                        <div>
                            <ul className="px-4 navbar-nav text-end w-100 ">
                                <li className="nav-item  d-flex justify-content-center align-items-center">
                                    <NavLink to="/Dashboard/" style={{ textDecoration: 'none' }}>
                                        <div className="d-grid gap-2 col-xl-12 col-md-12 col-sm-12  mx-auto ">
                                            <button className="btn buttonfocuscolor d-flex" type="button" >NEXT  &nbsp; <span class="material-icons-outlined ">east</span></button>
                                        </div></NavLink>
                                    <div className="px-4">
                                        <img src="/assets/images/profile.png" className="img-fluid px-4 " alt="profile" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* <!--top nav end --> */}
                </div>
            </div>
        </>
    );
}


export default SelectTopnav;