
import React from "react";
import SettingNav from "../SettingNav";
const AddBranch = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-2">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                            <div className="row">
                                <div className="col-xl-2 col-md-4 col-sm-8">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12 ">
                                    <div className="row p-5">
                                        <h3>Add Branch</h3>
                                        <div className="card col-md-12 col-xl-6  col-sm-12 " >

                                            <div className="row g-0 p-4">
                                                <div className="col-md-9  col-xl-9  col-sm-9 p-2">
                                                    <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 1 Name" />
                                                    <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 2 Name" />
                                                    <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 3 Name" />                                                    
                                                </div>

                                                <div className="col-md-3 col-xl-3  col-sm-3 p-2">
                                                    <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                        <option selected>city</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                        <option selected>city</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                        <option selected>city</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="d-grid gap-2 col-xl-1 col-md-1 col-sm-1 mx-auto">
                                                    <button className="btn buttonfocuscolor" type="button" >Save</button>
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
export default AddBranch;



