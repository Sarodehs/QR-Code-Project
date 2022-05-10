import React from "react";
import SelectSidenav from "../Navbar/SelectSidenav";
import SelectTopnav from "../Navbar/SelectTopnav";
import Popup from 'reactjs-popup';
import { NavLink } from 'react-router-dom';



const SelectMenu = () => {
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
                            <div className="col-xl-3 col-md-3 col-sm-3">

                                <div className="d-flex  SelectMenusidebar ">
                                    <ul className="nav align-items-center justify-content-center d-flex " id="menu">


                                        <Popup trigger={<div className="d-grid gap-2 col-xl-9 col-md-4 col-sm-4 mx-auto  mb-2" >
                                            <button href="/" className="buttonadd p-4">+ ADD NEW CATEGORY</button>
                                        </div>} position="right top ">

                                        <div className="col-md-12  col-xl-12 card col-sm-12 cardwh">
                                        <div className="row  g-0 ">
                                            <div className="col-md-6  col-xl-8  col-sm-12 p-2">
                                                <div className="card-body">
                                                    <h3>Add New Category</h3>
                                                    <div className="col-xl-12 col-md-12">
                                                        <input type="text" className="form-control inputfocus mb-4" placeholder="Category Name" />
                                                        <textarea className="form-control contactinput" id="exampleFormControlTextarea1" placeholder="Note" rows="8"></textarea>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-xl-9 col-md-9 col-sm-3 mx-auto ">
                                                    <button className="btn buttonfocuscolor" type="button" >Add New Category</button>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xl-4  col-sm-12 p-5">
                                                <div className="card cardshadow p-2" >
                                                    <h5>Category Icon</h5>
                                                    <div className="justify-content-center align-items-center d-flex p-2">
                                                        <img src="/assets/images/addcategory.png" className="img-fluid" alt="img" />
                                                    </div>
                                                    <p className="justify-content-center align-items-center d-flex">Image filename.png <span class="material-icons-outlined">close</span></p>
                                                    <div className="d-grid justify-content-center  align-items-center d-flex p-3">
                                                        <button className="btn  buttonfocuscolor d-flex" type="button">
                                                            <span class="material-icons-outlined">file_upload</span>UPLOAD IMAGE
                                                        </button>
                                                    </div>
                                                    <p className="justify-content-center align-items-center d-flex">Drag a Image </p>
                                                </div>
                                            </div>
                                         </div>
                                        </div>
                                        </Popup>




                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Starters/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link d-flex">
                                                    <div class=" row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu1.png" className="img-fluid " alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p>Starters</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Curries/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu2.png" className="img-fluid " alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p> Curries</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Soups/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu3.png" className="img-fluid" alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p>Soups</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Fries/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu4.png" className="img-fluid " alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p>Fries</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/RiceBiriyani/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-6 col-md-">
                                                            <img src="/assets/images/SelectMenu5.png" className="img-fluid  " alt="profile" />
                                                        </div>
                                                        <div class="col-xl-6 col-md-6">
                                                            <p>Rice & Biriyani</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Dessert/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link   d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu6.png" className="img-fluid " alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p> Dessert</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>


                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="/Menu/Shakes/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex">
                                                    <div class="row g-0">
                                                        <div class="col-xl-8 col-md-8">
                                                            <img src="/assets/images/SelectMenu7.png" className="img-fluid" alt="profile" />
                                                        </div>
                                                        <div class="col-xl-4 col-md-4">
                                                            <p> Shakes</p>
                                                        </div>
                                                    </div>
                                                </a></NavLink></li>

                                    </ul>
                                </div>

                            </div>
                            {/* <!-- Content area start --> */}
                            <div className=" col-md-9 col-xl-9 col-sm-9 bg-light  justify-content-center " >
                                <div className="row p-4">
                                    <div className="col-xl-6 col-md-6 col-sm-6 ">
                                        <h3>Add Dish</h3>
                                    </div>

                                </div>

                                <div className="row pb-5 ">

                                    <div className="card col-md-11 col-xl-11  col-sm-11" >
                                        <div className="row g-0">
                                            <div className="col-md-3 col-xl-3  col-sm-3 ">
                                                <div className=" justify-content-center align-items-center d-flex p-4">
                                                    <img src="/assets/images/AddDishimg.png" className="img-fluid" alt="img" />
                                                </div>
                                                <div className="d-grid justify-content-center align-items-center d-flex p-2">
                                                    <button className="btn  buttonfocuscolor d-flex" type="button">
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
                                    <div className="col-xl-12 col-md-6 col-sm-6 p-5 text-center">

                                        <button className="btn  buttonfocuscolor d-flex" type="button">
                                            <span class="material-icons-outlined">add</span> ADD MORE</button>

                                    </div>


                                </div>

                            </div>
                            {/* <!-- Content area start --> */}
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>

            </div>
        </>
    );
}


export default SelectMenu;


