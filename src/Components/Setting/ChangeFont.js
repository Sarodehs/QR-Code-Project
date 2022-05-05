
import React from "react";
import SettingNav from "../SettingNav";
const ChangeFont = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-2">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                            <div className="row">
                                <div className="col-xl-2 col-md-4 col-sm-8 ">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12">
                                    <div className="row ">
                                       
                                        <div className=" col-md-12 col-xl-4  col-sm-12 p-4" >
                                        <h3 className="text-center">Select Font</h3>
                                            <div className="mx-5 card p-4">
                                            <label for="input" class="form-label">Title</label>
                                                <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                    <option selected>Noto Serif</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <label for="input" class="form-label">Sub Title</label>
                                                <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                    <option selected>None</option>
                                                    <option value="1">None</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                                <div className="d-grid gap-2 col-xl-3 col-md-3 col-sm-3 mx-auto ">
                                                <button className="btn buttonfocuscolor" type="button" >SAVE</button>
                                            </div>
                                            </div>
                                            
                                        </div>
                                       
                                         <div className=" col-md-12 col-xl-6 col-sm-12 mb-5 p-4" >
                                        <h3 className="text-center">Preview</h3>
                                            <div className="mx-5 p-5 card w-75">
                                            <img src="/assets/images/previewfont.png" className="img-fluid" alt="img" />
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
export default ChangeFont;



