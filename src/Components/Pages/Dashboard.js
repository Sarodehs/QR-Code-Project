import React from "react";
import { NavLink } from 'react-router-dom';
import Sidenav from "../Navbar/Sidenav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer";
const Dashboard = () =>  {
        return (
            <>
            <div className="container-fluid  ">
            <Topnav/>
                <div className="row">
                     {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2" >
                       <Sidenav/>
                    </div>
                    {/* <!-- side nav end --> */}
 
                    {/* <!-- Content area start --> */}
                    <div className="col-auto col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center p-4" >
                        <div className="row ">
                            {/* <!-- dashboard card one start --> */}
                            <div className="col-xl-6 col-md-12 col-sm-12 cardoneshadow">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 col-sm-6">

                                        <div className="card mb-3 p-2 ">
                                            <h5>Starters</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Starters/"><button href="" class="btn btn-gray  cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Curries</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg2.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Curries/"> <button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Soups</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg3.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Soups/"><button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Drinks</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg4.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Drinks/"><button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-md-6 col-sm-6">
                                        <div className="card mb-3 p-2">
                                            <h5>Desserts</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg5.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Dessert/"><button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Shakes</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg6.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Shakes/"><button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Rice & Biriyani</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg7.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div>
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/RiceBiriyani/"><button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-3 p-2">
                                            <h5>Special</h5>
                                            <div className="row g-0 ">
                                                <div className="col-md-6 col-xl-3 col-sm-6">
                                                    <img src="../assets/images/cardimg8.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6">
                                                    <div> 
                                                        <div><img src="../assets/images/veg.png" className="img-fluid" alt="veg"/>Veg - 15</div>
                                                        <div> <img src="../assets/images/nonveg.png" className="img-fluid" alt="nonveg"/>Non Veg - 33</div>
                                                        <div><img src="../assets/images/egg.png" className="img-fluid" alt="egg"/>Egg - 12</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-xl-3 col-sm-4 p-2 cardoneborder">
                                                    <div >
                                                        <h6>ITEMS</h6>&nbsp;
                                                        <NavLink to="/Menu/Special/">  <button href="" class="btn btn-gray cardbuttonfocus" ><h5 className="d-flex">66
                                                        <i className="material-icons-outlined">navigate_next</i></h5></button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 col-xl-6 col-md-4 col-sm-4 mx-auto m-4" >
                                      <button href="/" className="buttonadd p-5">+ ADD NEW CATEGORY</button>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- dashboard card one end --> */}
                            {/* <!-- dashboard card two start --> */}
                            <div className="col-xl-6 col-md-12 col-sm-12 cardtwoshadow px-4" >
                                <div className="card1">
                                    <div className="card-header headingcardtwo  text-muted">
                                        <div className={({isActive}) => (isActive ? 'main-nav-active': 'inactive')}>
                                        <ul className="nav nav-pills nav-justified card-header-pills " >
                                             <li className="nav-item active"><NavLink to="/"  style={{ textDecoration: 'none' }}>
                                                <a className="nav-link " href="/#">Trending</a>
                                                </NavLink> </li>
                                            <li className="nav-item "> <NavLink to="/"  style={{ textDecoration: 'none' }}>
                                                <a className="nav-link " href="/#">Our Specialities</a>
                                                </NavLink> </li>
                                            <li className="nav-item"> <NavLink to="/"  style={{ textDecoration: 'none' }}>
                                                <a className="nav-link " href="/#">Best Seller</a>
                                                </NavLink></li>
                                            <li className="nav-item"><NavLink to="/"  style={{ textDecoration: 'none' }}>
                                                <a className="nav-link " href="/#">Recommended</a>
                                                </NavLink></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="card-body cardtwoscroll" >
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-sm-1 col-xl-1">
                                                    <h5>#01</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg9.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chilly Chicken</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Starter</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#02</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg10.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Paneer Butter masala</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Curries</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-xl-2 col-sm-2">
                                                    <img src="../assets/images/cardgrp2.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>213 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#03</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg11.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chicken Dum Biriyani</h5>
                                                            <h6>₹ 390 </h6>
                                                            <h6>Specialities</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-sm-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#04</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg12.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>ChocoLava</h5>
                                                            <h6>₹ 220 </h6>
                                                            <h6>Desserts</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-sm-1 col-xl-1">
                                                    <h5>#01</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg9.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chilly Chicken</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Starter</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#02</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg10.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Paneer Butter masala</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Curries</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-xl-2 col-sm-2">
                                                    <img src="../assets/images/cardgrp2.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>213 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#03</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg11.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chicken Dum Biriyani</h5>
                                                            <h6>₹ 390 </h6>
                                                            <h6>Specialities</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-sm-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#04</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg12.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>ChocoLava</h5>
                                                            <h6>₹ 220 </h6>
                                                            <h6>Desserts</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-xl-3 col-sm-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-sm-1 col-xl-1">
                                                    <h5>#01</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg9.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chilly Chicken</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Starter</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#02</h5>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xl-6 d-flex">
                                                    <img src="../assets/images/cardimg10.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Paneer Butter masala</h5>
                                                            <h6>₹ 320 </h6>
                                                            <h6>Curries</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-xl-2 col-sm-2">
                                                    <img src="../assets/images/cardgrp2.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xl-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>213 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#03</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg11.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>Chicken Dum Biriyani</h5>
                                                            <h6>₹ 390 </h6>
                                                            <h6>Specialities</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-sm-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-1 col-xl-1 col-sm-1">
                                                    <h5>#04</h5>
                                                </div>
                                                <div className="col-md-6 col-xl-6 col-sm-6 d-flex">
                                                    <img src="../assets/images/cardimg12.png" className="img-fluid rounded-start" alt="img"/>
                                                        <div>
                                                            <h5>ChocoLava</h5>
                                                            <h6>₹ 220 </h6>
                                                            <h6>Desserts</h6>
                                                        </div>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-xl-2">
                                                    <img src="../assets/images/cardgrp1.png" className="img-fluid rounded-start" alt="img"/>
                                                </div>
                                                <div className="col-md-3 col-xl-3 col-sm-3">
                                                    <div className="d-flex">
                                                        <h6>ORDERS </h6>&nbsp;
                                                        <h6>212 </h6>
                                                    </div>
                                                    <div className="d-flex">
                                                        <h6>DOWN</h6>&nbsp;&nbsp;&nbsp;
                                                        <h6>12&nbsp; %</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- dashboard card two end --> */}
                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
             <Footer />
            </div>

            </>
        );
    }


export default Dashboard;