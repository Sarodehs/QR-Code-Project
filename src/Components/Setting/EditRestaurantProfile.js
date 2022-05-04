
import React from "react";
import SettingNav from "../SettingNav";
const EditRestaurantProfile = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                            <div className="row">
                                <div className="col-xl-2 col-md-4 col-sm-12">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12 p-4">
                                    <div className="row p-4">

                                        <div className="card col-md-12 col-xl-8  col-sm-12 p-4" >
                                            <div className="row g-0 ">
                     
                                                <div className="col-md-12 col-xl-6  col-sm-12 mb-2">
                                                <h3>Profile</h3>
                                                    <div className="justify-content-center align-items-center d-flex p-2">
                                                        <img src="/assets/images/Editreprofile.png" className="img-fluid" alt="img" />
                                                    </div>
                                                    <div className="d-grid justify-content-center align-items-center d-flex p-3">
                                                        <button className="btn  buttonfocuscolor d-flex" type="button">
                                                             UPLOAD 
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  col-xl-6  col-sm-12 ">
                                                    <div className="card-body">
                                                        <div className="col-xl-12 col-md-12">
                                                            <input type="text" className="form-control inputfocus mb-4" placeholder="Owner Name" />
                                                            <input type="text" className="form-control inputfocus mb-4" placeholder="Restaurant Name" />
                                                            <input type="text" className="form-control inputfocus mb-4" placeholder="Phone Number" />
                                                            <input type="emali" className="form-control inputfocus mb-4" placeholder="Email" />
                                                            <input type="text" className="form-control inputfocus mb-4" placeholder="Address" />
                                                        </div>
                                                    </div>
                                                    <div className="d-grid gap-2 col-xl-1 col-md-1 col-sm-1 mx-auto ">
                                                     <button className="btn buttonfocuscolor" type="button" >Save</button>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                           
                                              

                                        </div>

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
export default EditRestaurantProfile;





