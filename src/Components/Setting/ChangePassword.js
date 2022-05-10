import Sidenav from "../Navbar/Sidenav";
import React from "react";
import SettingNav from "../Navbar/SettingNav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 

const ChangePassword = ({ children }) => {
    return (
        <>
            <div className="container-fluid  ">
            <Topnav/>
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light   justify-content-center " >

                            <div className="row">
                                <div className="col-xl-2 col-md-4 col-sm-8">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12 p-5">
                                    <div className="row p-4">
                                        <h3>Change Password</h3>
                                        <div className="card col-md-12 col-xl-5 col-sm-12 p-4" >


                                            <div className="mx-5">
                                                <input type="password" className="form-control inputfocus mb-4" placeholder=" Current Password" />
                                                <input type="password" className="form-control inputfocus mb-4" placeholder="New Password" />
                                                <input type="password" className="form-control inputfocus " placeholder="Confirm New Password " />
                                                <a href="/" className="align-items-end justify-content-end d-flex p-3">forgot password?</a>
                                            </div>



                                            <div className="d-grid gap-2 col-xl-6 col-md-6 col-sm-6 mx-auto ">
                                                <button className="btn buttonfocuscolor" type="button" >CHANGE PASSWORD</button>
                                            </div>







                                        </div>

                                    </div>
                                </div>
                            </div>
                     
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
                <Footer />
            </div>


        </>
    );
}
export default ChangePassword;



