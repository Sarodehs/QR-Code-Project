

import { NavLink } from 'react-router-dom'
import React from "react";
import SettingNav from "../SettingNav";
const ManageCategory = ({ children }) => {
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
                                <div className="col-xl-10 col-md-12 col-sm-12 p-4">
                                    <div className="row">

                                    <div className='col-xl-11 col-md-11 col-sm-12'>
                                    <div className="row p-2">
                                        <div className="col-xl-6 col-md-6 col-sm-6">
                                            <h3>Manage Category</h3>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-6">
                                            <div class="input-group mb-3 searchbar">
                                                <input type="text" class="form-control form-select inputfocus" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-6 col-sm-6">
                                            <div>
                                            </div>

                                            <NavLink to="AddCategory/" style={{ textDecoration: 'none' }}><button className="btn  buttonfocuscolor d-flex" type="button">
                                                <span class="material-icons-outlined">add</span> ADD NEW</button></NavLink>

                                        </div>
                                    </div>
                                    </div>


                                    <div className='col-xl-11 col-md-11 col-sm-12'>
                                        <table class="table bg-white table-striped table-responsive text-center">
                                            <thead >
                                                <tr class="table-secondary">
                                                    <th scope="col-xl-1 col-md-1 col-sm-1">Name</th>
                                                    <th scope="col-xl-1 col-md-1 col-sm-1">Photo</th>
                                                    <th scope="col-xl-1 col-md-1 col-sm-1">Items</th>
                                                    <th scope="col-xl-1 col-md-1 col-sm-1">Date Published</th>
                                                    <th scope="col-xl-1 col-md-1 col-sm-1">Status</th>
                                                    <th></th>
                                                    <th scope="col-xl-1 col-md-1 col-sm-1"colspan="2">Actions</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr></tr>
                                                <tr>
                                                    <td>Starter</td>
                                                    <td><img src="/assets/images/startermane.png" className="img-fluid" alt="img" /></td>
                                                    <td>25</td>
                                                    <td>18-10-2020</td>
                                                    <td >Enable</td>
                                                    <td> <div class="form-check form-switch inputfocus"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/></div></td>
                                                    <td> <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink></td>
                                                    <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Curries</td>
                                                    <td><img src="/assets/images/Curriesmane.png" className="img-fluid" alt="img" /></td>
                                                    <td>32</td>
                                                    <td>13-09-2019</td>
                                                    <td >Enable</td>
                                                    <td> <div class="form-check form-switch inputfocus">
                                                        <input class="form-check-input  " type="checkbox" id="flexSwitchCheckDefault"/></div>
                                                    </td>
                                                    <td> <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink></td>
                                                    <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Fries</td>
                                                    <td><img src="/assets/images/Friesmane.png" className="img-fluid" alt="img" /></td>
                                                    <td>37</td>
                                                    <td>31-10-1992</td>
                                                    <td >Enable</td>
                                                    <td> <div class="form-check form-switch inputfocus"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/></div></td>
                                                    <td> <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink></td>
                                                    <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Biriyani</td>
                                                    <td><img src="/assets/images/Biriyanimane.png" className="img-fluid" alt="img" /></td>
                                                    <td>32</td>
                                                    <td>13-09-2019</td>
                                                    <td >Enable</td>
                                                    <td> <div class="form-check form-switch inputfocus"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/></div></td>
                                                    <td> <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink></td>
                                                    <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Soups</td>
                                                    <td><img src="/assets/images/Soupsmane.png" className="img-fluid" alt="img" /></td>
                                                    <td>37</td>
                                                    <td>31-10-1992</td>
                                                    <td >Enable</td>
                                                    <td> <div class="form-check form-switch inputfocus"><input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/></div></td>
                                                    <td> <NavLink to="EditDish/" style={{ color: 'black' }}><i class="fa-regular fa-pen-to-square fs-4"></i></NavLink></td>
                                                    <td ><span class="material-icons-outlined fs-3">delete</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end p-3 " >
                                                <li class="page-item px-2 ">
                                                    <a class="page-link inputfocus" style={{color:"black"}} href="/#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li class="page-item px-2 "><a class="page-link inputfocus" style={{color:"black"}}href="/#">1</a></li>
                                                <li class="page-item px-2 "><a class="page-link inputfocus" style={{color:"black"}}href="/#">2</a></li>
                                                <li class="page-item px-2"><a class="page-link inputfocus" style={{color:"black"}}href="/#">3</a></li>
                                                <li class="page-item px-2">
                                                    <a class="page-link inputfocus" style={{color:"black"}}href="/#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
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
export default ManageCategory;



