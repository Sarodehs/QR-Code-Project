import React from "react";
import Sidenav from "../Navbar/Sidenav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 


const AddDish = () => {
    return (
        <>
            <div className="container-fluid ">
            <Topnav/>
                <div className="row ">
                     {/* <!-- side nav start --> */}
                     <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                       <Sidenav/>
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center " >
                        <div className="row p-4">
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                                <h3>Add Dish</h3>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                         <li class="breadcrumb-item active" aria-current="page">Add Dish</li>
                                        <li class="breadcrumb-item"  ><a href="/"style={{ textDecoration: 'none' ,color: '#FF7000'}}>Starters</a></li>
                                    </ol>
                                </nav>
                                
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                                <div className=" col-xl-3 col-md-3 col-sm-2 mx-auto ">
                                    <button className="btn btn-warning buttonfocuscolor d-flex" type="button"><span class="material-icons-outlined">add</span> ADD MORE</button>
                                </div>
                            </div>

                        </div>

                        <div className="row p-4 ">

                            <div className="card col-md-12 col-xl-10  col-sm-12" >
                                <div className="row g-0">
                                    <div className="col-md-3 col-xl-3  col-sm-3 ">
                                        <div className=" justify-content-center align-items-center d-flex p-4">
                                            <img src="/assets/images/AddDishimg.png" className="img-fluid" alt="img" />
                                        </div>
                                        <div className="d-grid justify-content-center align-items-center d-flex p-2">
                                            <button className="btn btn-warning buttonfocuscolor d-flex" type="button">
                                                <span class="material-icons-outlined">file_upload</span> Upload Image
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6  col-xl-6  col-sm-6 p-2">
                                        <div className="card-body">
                                            <div className="col-xl-12 col-md-12">
                                                <input type="text" className="form-control inputfocus mb-4" placeholder="Name of Food" />
                                                <textarea className="form-control inputfocus mb-4" id="exampleFormControlTextarea1" placeholder="Write Ingredient " rows="7"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  col-xl-3  col-sm-3 p-2">
                                        <div className="card-body">
                                            <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                <option selected>Type</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <select class="form-select inputfocus  mb-4" aria-label="Default select example">
                                                <option selected>Taste</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                            <input type="text" className="form-control inputfocus mb-4" placeholder="Price" />

                                            <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                <option selected>Best Seller</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="d-grid gap-2 col-xl-1 col-md-1 col-sm-1 mx-auto ">
                            <button className="btn btn-warning buttonfocuscolor" type="button" >Save</button>
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
            <Footer />
            </div>

        </>
    );
}


export default AddDish;