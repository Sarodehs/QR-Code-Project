import React from "react";
import { NavLink } from 'react-router-dom'
const SelectSidenav = ({ children }) => {
    return (
        <>
            <div className="container-fluid contantfixwh">
                <div className=" row ">
                    {/* <!-- side nav start --> */}
                    <div className=" col-md-2 col-xl-2 col-sm-2 pe-0" >
                        <div className="d-flex flex-column vh-100 w-100  ">

                            <ul className="nav  flex-column mb-sm-auto mb-0 sidebar align-items-center align-items-sm-start" id="menu">
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                    <NavLink to="/SelectTheme/" style={{ textDecoration: 'none'}} > <a href="/#" className="nav-link align-middle  d-flex ">
                                        <i className="material-icons-outlined ">palette</i><span className="ms-3 d-none d-md-inline "> Theme </span>
                                    </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                <NavLink to="/SelectFont/" style={{ textDecoration: 'none'}}> <a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">title</i> <span className="ms-3 d-none d-md-inline"> Text</span>
                                </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                <NavLink to="/SelectWallpaper/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">wallpaper</i> <span className="ms-3 d-none d-md-inline"> Wallpaper</span>
                                </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                <NavLink to="/SelectMenu/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">restaurant_menu</i> <span className="ms-3 d-none d-md-inline"> Menu</span>
                                </a></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- side nav end --> */}
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}
export default SelectSidenav;



