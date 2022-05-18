import React from "react";
import { NavLink } from 'react-router-dom';

const AdminSidenav = ({ children }) => {
    return (
        <>
            <div className="container-fluid contantfixwh">
                <div className=" row ">
                    {/* <!-- side nav start --> */}
                    <div className=" col-md-2 col-xl-2 col-sm-2 pe-0" >
                        <div className="d-flex flex-column vh-100 w-100  ">

                            <ul className="nav  flex-column mb-sm-auto mb-0 sidebar align-items-center align-items-sm-start" id="menu">
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                    <NavLink to="/admin-dashboard/" style={{ textDecoration: 'none'}} > <a href="/#" className="nav-link align-middle  d-flex ">
                                        <i className="material-icons-outlined">dashboard</i><span className="ms-3 d-none d-md-inline "> Dashboard </span>
                                    </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                    <NavLink to="/admin-transaction/" style={{ textDecoration: 'none'}}> <a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">local_atm</i><span className="ms-3 d-none d-md-inline"> Transactions</span>
                                    </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                    <NavLink to="/admin-customer-tbl/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                        <i className="material-icons-outlined">people</i> <span className="ms-3 d-none d-md-inline"> Customer</span>
                                    </a></NavLink>
                                </li>
                                <li  className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                    <NavLink to="/admin-ticket-tbl/"style={{ textDecoration: 'none'}}><a href="/#" className="nav-link  align-middle d-flex">
                                    <i className="material-icons-outlined">quiz</i><span className="ms-3 d-none d-md-inline"> Ticket</span>
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
export default AdminSidenav;



