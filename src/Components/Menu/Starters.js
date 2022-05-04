import React from "react";
import { NavLink} from 'react-router-dom'

const Starters = () => {
    return (
        <>
            <div className="container-fluid  ">
                <div className="row px-3">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh justify-content-center " >
                        <div className="row">

                            <div className="col-xl-9 w-100 col-md-9 p-5">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <h3>Starters</h3>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control form-select" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span class="input-group-text " id="basic-addon2"><span class="material-icons-outlined">search</span></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-md-6 col-sm-6">
                                        <div>
                                </div>
                                       
                                       <NavLink to="AddDish/"  style={{ textDecoration: 'none' }}>
                                           
                                           <button className="btn  buttonfocuscolor d-flex" type="button">
                                           <span class="material-icons-outlined">add</span> ADD DISH</button>
                                        </NavLink>
                                      
                                        </div>
                                    </div>


                                <div>
                                    <table class="table table-striped ">
                                        <thead >
                                            <tr class="table-warning">
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Menu ID</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Photo</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Name</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Description</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Type</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Price</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Taste</th>
                                                <th scope="col-xl-1 col-md-1 col-sm-1">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr></tr>
                                            <tr>
                                                <th scope="row">1001</th>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img"/></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink>
                                                <span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1001</th>
                                                <td><img src="/assets/images/Starters2.png" className="img-fluid" alt="img"/></td>
                                                <td>Veg galauti Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>320</td>
                                                <td>Medium Spicy</td>
                                                <td > <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink>
                                                <span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1001</th>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img"/></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink>
                                                <span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1001</th>
                                                <td><img src="/assets/images/Starters2.png" className="img-fluid" alt="img"/></td>
                                                <td>Veg galauti Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>320</td>
                                                <td>Medium Spicy</td>
                                                <td > <NavLink to="EditDish/"style={{ color: 'black' }} ><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink>
                                                <span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1001</th>
                                                <td><img src="/assets/images/Starters1.png" className="img-fluid" alt="img"/></td>
                                                <td>Corn n Cheese Kebab</td>
                                                <td>Place chicken in a large pot with onion, carrots, celery and peppercorns; add water to cover. Cover pot and bring to a boil.</td>
                                                <td>Veg</td>
                                                <td>370</td>
                                                <td>Sweet</td>
                                                <td > <NavLink to="EditDish/"style={{ color: 'black' }} ><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink>
                                                <span class="material-icons-outlined fs-3">delete</span></td>
                                            </tr>

                                        </tbody>
                                    </table>
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


export default Starters;