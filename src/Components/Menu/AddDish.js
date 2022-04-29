import React from "react";


const AddDish = () => {
    return (
        <>
            <div className="container-fluid displayflex  ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh justify-content-center " >
                        <div className="row p-4">
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                                <h3>Add Dish</h3>
                                <p className="d-flex">Add Dish
                                    <span class="material-icons-outlined">chevron_right</span>
                                    Starters
                                </p>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                                <div className=" col-xl-3 col-md-3 col-sm-2 mx-auto ">
                                    <button className="btn  buttonfocuscolor d-flex" type="button"><span class="material-icons-outlined">add</span> ADD MORE</button>
                                </div>
                            </div>

                        </div>

                        <div className="row p-4 ">

                            <div className="card col-md-12 col-xl-10  col-sm-12" >
                                <div className="row g-0">
                                    <div className="col-md-3 col-xl-3  col-sm-3 p-4">
                                        <div className=" bg-light bg-gradient w-90 h-75  justify-content-center align-items-center d-flex">
                                            <span class="material-icons-outlined">image</span>
                                        </div>
                                        <div className="d-grid justify-content-center align-items-center d-flex p-4">
                                            <button className="btn  buttonfocuscolor d-flex" type="button">
                                                <span class="material-icons-outlined">file_upload</span> Upload Image
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6  col-xl-6  col-sm-6 p-2">
                                        <div className="card-body">
                                            <div className="col-xl-12 col-md-12">
                                                <input type="text" className="form-control inputfocus mb-4" placeholder="Name of Food" />
                                                <textarea className="form-control inputfocus mb-4" id="exampleFormControlTextarea1" placeholder="Write Ingredient " rows="6"></textarea>
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
                            <button className="btn buttonfocuscolor" type="button" >Save</button>
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
            </div>

        </>
    );
}


export default AddDish;