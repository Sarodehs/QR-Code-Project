


import React from "react";
import SettingNav from "../SettingNav";
const AddCategory = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                            <div className="row">
                                <div className="col-xl-2 col-md-4 col-sm-8">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12 p-5">
                                    <div className="card col-md-12 col-xl-8  col-sm-12" >
                                        <div className="row g-0">
                                            <div className="col-md-12  col-xl-6  col-sm-12">
                                                <div className="card-body">
                                                    <h3>Add New Category</h3>
                                                    <div className="col-xl-12 col-md-12">
                                                        <input type="text" className="form-control inputfocus mb-4" placeholder="Category Name" />
                                                        <textarea className="form-control contactinput" id="exampleFormControlTextarea1" placeholder="Note" rows="8"></textarea>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-xl-1 col-md-1 col-sm-1 mx-auto ">
                                                    <button className="btn buttonfocuscolor" type="button" >Save</button>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xl-6  col-sm-12 mb-2 p-5">
                                                <div className="card cardshadow p-2" >
                                                <h5>Category Icon</h5>
                                                <div className="justify-content-center align-items-center d-flex p-2">
                                                    <img src="/assets/images/addcategory.png" className="img-fluid" alt="img" />

                                                   
                                                </div>
                                                <p className="justify-content-center align-items-center d-flex">Image filename.png <span class="material-icons-outlined">close</span></p>
                                                <div className="d-grid justify-content-center align-items-center d-flex p-3">
                                                    <button className="btn  buttonfocuscolor d-flex" type="button">
                                                    <span class="material-icons-outlined">file_upload</span>UPLOAD IMAGE
                                                    </button>
                                                </div>
                                                <p className="justify-content-center align-items-center d-flex">Drag a Image </p>
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
export default AddCategory;



