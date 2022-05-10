import Sidenav from "../Navbar/Sidenav";
import React from "react";
import SettingNav from "../Navbar/SettingNav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 

const ChangeTheme = ({ children }) => {
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
                                <div className="col-xl-10 col-md-12 col-sm-12">
                                    <div className="row ">

                                        <div className=" col-md-12 col-xl-4  col-sm-12 p-4" >
                                            <h3 className="text-center">Select Theme</h3>
                                            <div className="mx-5 card p-4">
                                                <img src="/assets/images/theme.png" className="img-fluid" alt="img" />

                                                <div className="d-grid gap-2 col-xl-3 col-md-3 col-sm-3 mx-auto ">
                                                    <button className="btn buttonfocuscolor" type="button" >SAVE</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className=" col-md-12 col-xl-6 col-sm-12 mb-5 p-4" >
                                            <h3 className="text-center">Preview</h3>
                                            <div className="mx-5 p-5 card w-75">
                                                <img src="/assets/images/previewtheme.png" className="img-fluid" alt="img" />
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
export default ChangeTheme;



