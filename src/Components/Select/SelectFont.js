import React from "react";
import SelectSidenav from "../Navbar/SelectSidenav";
import SelectTopnav from "../Navbar/SelectTopnav";


import img1 from './images/theme1-screen1.png';
import img2 from './images/theme1-screen2.png';
import img3 from './images/theme1-screen3.png';


const SelectFont = () => {
    return (
        <>
            <div className="container-fluid ">
                <SelectTopnav />
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                        <SelectSidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  p-4 justify-content-center " >

                        <div className="row ">

                            <div className=" col-md-4 col-xl-4  col-sm-4" >
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

                            <div className=" col-md-8 col-xl-8  col-sm-8 text-center p-4">
                            <h3 >Preview</h3>
                                <div className="row">
                                    <div className=" col-md-4 col-xl-4 col-sm-4 " >
                                        <img src={img1} className="img-fluid" alt="img" />
                                        <p >Dishes</p>
                                    </div>
                                    <div className="  col-md-4 col-xl-4 col-sm-4" >
                                        <img src={img2} className="img-fluid" alt="img" />
                                        <p >Menu</p>
                                    </div>
                                    <div className="  col-md-4 col-xl-4 col-sm-4" >
                                        <img src={img3} className="img-fluid" alt="img" />
                                        <p >My Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Content area start --> */}
                </div>

            </div>
        </>
    );
}


export default SelectFont;