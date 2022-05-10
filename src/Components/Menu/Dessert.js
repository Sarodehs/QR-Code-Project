import React from "react";
import Sidenav from "../Navbar/Sidenav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer";  

const Dessert = () => {
    return (
        <>
            <div className="container-fluid contantfixwh ">
            <Topnav/>

                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                       <Sidenav/>
                    </div>
                    {/* <!-- side nav end --> */}
                      {/* <!-- Content area start --> */}
                <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center " >
                        <div className="row">

                        <h1>Dessert</h1>

                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                 
                </div>
            <Footer />

            </div>
        </>
    );
}


export default Dessert;