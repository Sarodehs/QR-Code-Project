
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
                             <div className="col-xl-4 col-md-4 ">
                                 <SettingNav/>
                             </div>
                             <div className="col-xl-8 col-md-8 ">
                             <div className="row p-4">
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                                <h3>Edit Dish</h3>

                            </div>
                        </div>

                        <div className="row p-4">

                            <div className="card col-md-12 col-xl-10  col-sm-12" >
                                <div className="row g-0">
                                    <div className="col-md-3 col-xl-3  col-sm-3 p-4">
                                        <div className="justify-content-center align-items-center d-flex">
                                            <img src="/assets/images/EditDish.png" className="img-fluid" alt="img" />
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
                                                <input type="text" className="form-control inputfocus mb-4" placeholder="Corn n Cheese Kebab" />
                                                <textarea className="form-control inputfocus mb-4" id="exampleFormControlTextarea1" rows="7" placeholder="Cheese Corn Kebab is a delicious snack recipe that you can easily prepare for your family and friends over a weekend. Its Ingredients - 
                                                    2 cup boiled American corn kernels
                                                    2 tablespoon grated cheddar cheese
                                                    2 teaspoon chopped ginger
                                                    3 teaspoon virgin olive oil
                                                    1 teaspoon mint leaves" ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3  col-xl-3  col-sm-3 p-2">
                                        <div className="card-body">
                                            <select class="form-select inputfocus mb-4" aria-label="Default select example">
                                                <option selected>Type</option>
                                                <option value="1"><img src="/assets/images/veg.png" className="img-fluid" alt="veg"/>Veg</option>
                                                <option value="2"><img src="/assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg</option>
                                                <option value="3"><img src="/assets/images/egg.png" className="img-fluid" alt="egg"/>Egg</option>
                                            </select>
                                            <select class="form-select inputfocus  mb-4" aria-label="Default select example">
                                                <option selected>Taste</option>
                                                <option value="1">Sweet</option>
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





