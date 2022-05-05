import React from "react";
import { NavLink } from 'react-router-dom'
const Sidenav = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex">
                <div className=" row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-12 col-xl-12 col-sm-12 " >
                        <div className="d-flex flex-column align-items-center sidebar  w-100  vh-100 ">
                            <ul className="nav  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                    <NavLink to="/" style={{ textDecoration: 'none'}} > <a href="/#" className="nav-link align-middle  d-flex ">
                                        <i className="material-icons-outlined ">dashboard</i><span className="ms-3 d-none d-sm-inline "> Dashboard </span>
                                    </a></NavLink>
                                </li>
                                <li>
                                     <NavLink to="Menu/Starters/" style={{ textDecoration: 'none'}}><a href="#submenu1" data-bs-toggle="collapse" className="nav-link align-middle d-flex">
                                        <i className="material-icons-outlined">restaurant_menu</i><span className="ms-3 d-none d-sm-inline"> Menu</span>
                                        <div className="w-100 text-end d-none d-md-block d-flex menuarrow">
                                        <span className="material-icons-outlined "> arrow_right </span> 
                                        </div></a></NavLink>
                                    <ul className="collapse  nav flex-column sidebarmenu" id="submenu1" data-bs-parent="#menu">
                                    <NavLink to="Menu/Starters/" style={{ textDecoration: 'none'}}><li>
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Starters</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Curries/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Curries</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Soups/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Soups</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Fries/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Fries</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/RiceBiriyani/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Rice & Biriyani</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Dessert/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Dessert</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Drinks/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Drinks</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Shakes/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Shakes</a>
                                        </li></NavLink>
                                        <NavLink to="Menu/Special/"style={{ textDecoration: 'none'}}><li >
                                        <a href="/#" className="nav-link "> 
                                        <span className="d-none d-sm-inline"></span>Special</a>
                                        </li></NavLink>
                                    </ul>
                                </li>
                                <li>
                                <NavLink to="Setting/EditRestaurantProfile/" style={{ textDecoration: 'none'}}> <a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">settings</i> <span className="ms-3 d-none d-sm-inline"> Setting</span>
                                </a></NavLink>
                                </li>
                                <li>
                                <NavLink to="Faq/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">quiz</i> <span className="ms-3 d-none d-sm-inline"> Faq</span>
                                </a></NavLink>
                                </li>
                                <li>
                                <NavLink to="Contact/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">contact_support</i> <span className="ms-3 d-none d-sm-inline"> Contact Us</span>
                                </a></NavLink>
                                </li>
                            </ul>
                            <hr />
                            
                        </div>
                        <div className=" d-flex justify-content-center align-items-center ">
                         <div><h5>Anand Veg</h5>
                            <h6>Pramod Wag</h6>
                            <h6>9403571348</h6>
                         </div>
                        </div>
                        
                    </div>
                    {/* <!-- side nav end --> */}
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}
export default Sidenav;



