import React from "react";
import Sidenav from "../Navbar/Sidenav";
import { NavLink } from 'react-router-dom'
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 

const Special = () => {
    return (
        <>
            <div className="container-fluid  contantfixwh">
            <Topnav/>
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className=" col-md-2 col-xl-2 col-sm-2 " >
                       <Sidenav/>
                    </div>
                    {/* <!-- side nav end --> */}
                     {/* <!-- Content area start --> */}
                     <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center " >
                        <div className="row">

                            <div className="col-xl-9 w-100 col-md-9 p-5 tab">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <h3>Special</h3>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div class="input-group mb-3 searchbar">
                                            <input type="text" class="form-control  inputfocus" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                           
                                            <button class="btn btn-light  inputfocus d-flex" type="button" id="button-addon2"><span class="material-icons-outlined">search</span></button>

                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-md-6 col-sm-6">
                                        <div>
                                        </div>

                                        <NavLink to="/AddDish/" style={{ textDecoration: 'none' }}>

                                            <button className="btn btn-warning buttonfocuscolor d-flex" type="button">
                                                <span class="material-icons-outlined">add</span> ADD DISH</button>
                                        </NavLink>

                                    </div>
                                </div>


                                <div className="tab">
                                    <table class="table bg-white table-striped ">
                                        <thead >
                                            <tr class=" text-center">
                                                <th scope="col-xl-2 col-md-1 col-sm-1">MenuID</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Photo</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Name</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Description</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Type</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Price</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Taste</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1" colspan="2">Actions</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
                                            <tr>
                                                <td >1001</td>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img" /></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="/EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4 d-flex"></i></NavLink></td>
                                                <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <td >1001</td>
                                                <td><img src="/assets/images/Starters2.png" className="img-fluid" alt="img" /></td>
                                                <td>Veg galauti Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>320</td>
                                                <td>Medium Spicy</td>
                                                <td > <NavLink to="/EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4 d-flex"></i></NavLink></td>
                                                <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <td >1001</td>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img" /></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="/EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4 d-flex"></i></NavLink></td>
                                                <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <td >1001</td>
                                                <td><img src="/assets/images/Starters2.png" className="img-fluid" alt="img" /></td>
                                                <td>Veg galauti Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>320</td>
                                                <td>Medium Spicy</td>
                                                <td > <NavLink to="/EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4 d-flex"></i></NavLink></td>
                                                <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <td >1001</td>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img" /></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="/EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4 d-flex"></i></NavLink></td>
                                                <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                 
                </div>
                <Footer />
            </div>
        </>
    );
}


export default Special;