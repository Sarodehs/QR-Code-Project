import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const checkout = () => {
    return(
        <>
        
        {/* <!-- container-fluid starts --> */}
        <div className="container-fluid">
            
            <nav className="navbar navbar-light bg-light">
  
                <a className="navbar-brand" href="/#">
                    <img src="/assets/images/logo.png" className="mx-5" alt="logo" width="50px" height="30px"/>
                </a>

            </nav>

            {/* checkout starts */}
            <div className="checkout">

                <h2 className="p-4 mx-5"><b>Checkout</b></h2>

                {/* main row starts */}
                <div className="row">

                    {/* main row col first starts */}
                    <div className="col-xl-5 col-mb-10 col-sm-10 text-center">

                        {/* main card in first col starts*/}
                        <div className="card mt-4 mx-5 mb-5 me-5 planmain">

                            <p className="pt-4"><small>Selected Plan</small></p>
                            <h5 className="mb-4">Monthly Silver Plan</h5>

                            {/* sub card in first col starts*/}
                            <div className="card mx-5 plansub">

                                {/* header text in sub card */}
                                <div>

                                    <h6 className="pt-4 siltext">Silver Plan</h6>
                                    <p className="pt-2"><i className="fa-solid fa-indian-rupee-sign"></i><span className="fs-1">02</span>K</p>
                                    <p><small className="text-muted">Per member Per Month</small></p>
                                
                                </div>
                                {/* header text ends*/}

                                <hr className="mx-4" style={{width: "90%"}}/>

                                {/* list part in sub card */}
                                <div className="text-start provide">

                                    <ul className="list-unstyled mx-2 lh-lg">

                                        <li><span className="material-icons-outlined me-3">done</span>Custom QR code(25 QR codes)</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Choose your own theme</li>
                                        <li><span className="material-icons-outlined me-3">done</span>24*7 customer support</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Easy upload of menu in the system</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Digital menus on the table of your restaurant</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Online menu editing in webpage</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Easy upload of menu on the system</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Unlimited adding of menu items</li>
                                        <li><span className="material-icons-outlined me-3">done</span>Custom QR code(10 QR codes)</li>
                                    
                                    </ul>

                                </div>
                                {/* list part in sub card ends */}

                            </div>
                            {/* sub card in first col ends */}

                            <p className="m-5"><small>Subscription cancel Anytime</small></p>

                        </div>
                        {/* main card in first col ends */}

                    </div>
                    {/* main row col first ends */}

                    {/* main row col second starts */}
                    <div className="col-xl-6 col-md-11 col-sm-11">

                        {/* userinfo first card in second col starts*/}
                        <div className="card mb-4 mx-4 mt-5 userinfo">

                            {/* ul in userinfo starts */}
                            <ul className="list-group">

                                {/* first li containing  starts */}
                                <li className="list-group-item">

                                    <div className="row px-2">

                                        <div className="d-flex justify-content-between">
                                            <div className="col-xl-2 col-md-4 col-sm-8 pe-3"><h6>Name</h6></div>
                                            <div className="col-xl-7 col-md-7 col-sm-7">Kunal Balkrushna Nemade</div>
                                            <div className="col-xl-1 col-md-2 col-sm-4"><span className="material-icons-outlined editicon fs-4">edit</span></div>
                                        </div>

                                    </div>

                                </li>
                                {/* first li containing  ends */}

                                {/* second li containing email starts */}
                                <li className="list-group-item">

                                    <div className="row px-2">

                                        <div className="d-flex justify-content-between">
                                            <div className="col-xl-2 col-md-4 col-sm-8 pe-3"><h6>Email</h6></div>
                                            <div className="col-xl-7 col-md-7 col-sm-7">KunalBNemade@gmail.com</div>
                                            <div className="col-xl-1 col-md-2 col-sm-4"><span className="material-icons-outlined editicon fs-4">edit</span></div>
                                        </div>

                                    </div>

                                </li>
                                {/* second li containing email ends */}

                                {/* third li containing phone starts */}
                                <li className="list-group-item">

                                    <div className="row px-2">

                                        <div className="d-flex justify-content-between">
                                            <div className="col-xl-2 col-md-4 col-sm-8 pe-3"><h6>Phone</h6></div>
                                            <div className="col-xl-7 col-md-7 col-sm-7">+91 98653 78451</div>
                                            <div className="col-xl-1 col-md-2 col-sm-4"><span className="material-icons-outlined editicon fs-4">edit</span></div>
                                        </div>

                                    </div>

                                </li>
                                {/* third li containing phone ends */}

                            </ul>
                            {/* ul in userinfo ends */}

                        </div>
                        {/* userinfo first card in second col ends*/}

                        {/* plandetails second card in second col starts */}
                        <div className="card mb-4 mx-4 plandetails">

                            {/* ul in plandetails starts */}
                            <ul className="list-group">

                                {/* first li cointaining selected plan starts */}
                                <li className="list-group-item">

                                    <div className="row px-4">

                                        <div className="col-xl-4"><p><small className="text-muted">Selected Subscription</small></p></div>
                                        <div className="col-xl-6"><h5>Monthly Silver Plan</h5></div>
                                    
                                    </div>

                                </li>
                                {/* first li containing selected plan ends */}

                                {/* second li containing validity starts */}
                                <li className="list-group-item">

                                    <div className="row px-4">

                                        <div className="col-xl-4"><p><small className="text-muted">Valid till</small></p></div>
                                        <div className="col-xl-6"><h5>Jan 21 - Feb 21</h5></div>
                                    
                                    </div>

                                </li>
                                {/* second li containing validity ends */}

                                {/* third li cointaining code starts */}
                                <li className="list-group-item">

                                    {/* row in third li starts */}
                                    <div className="row px-4">

                                        {/* col for form starts */}
                                        <div className="col-xl-6">

                                            <form>

                                                {/* discount code starts */}
                                                <div>

                                                    <label for="exampleInputcode" className="form-label"><p><small className="text-muted">Discount Code</small></p></label>
                                                    <input type="text" className="form-control inputfocus" id="exampleInputcode" />
                                                
                                                </div>
                                                {/* discount code ends */}

                                            </form>

                                        </div>
                                        {/* col for form ends */}

                                        <div className="col-xl-2"></div>

                                        {/* col for apply button */}
                                        <div className="col-xl-2">

                                            <button type="button" className="btn btn-sm px-4 mt-4 navbtn inputfocus">APPLY</button>
                                        
                                        </div>
                                        {/* col for apply button ends */}

                                    </div>
                                    {/* row in third li ends */}
                                
                                </li>
                                {/* third li containing code ends */}

                            </ul>    
                            {/* ul in plandetails ends */}

                        </div>
                        {/* plandetails second card in second col ends */}

                        {/* planpricing third card in second col starts */}
                        <div className="card mx-4 pb-4 pt-2 ps-5 planprice">

                            <h5 className="p-3 mx-5"><b>Order Summary</b></h5>

                            <table className="mx-5 w-75">

                                <tr>
                                    <td>Plan</td>
                                    <td>Silver</td>
                                </tr>

                                <tr>
                                    <td>No. of Month</td>
                                    <td>01</td>
                                </tr>

                                <tr>
                                    <td>Price</td>
                                    <td><i className="fa-solid fa-indian-rupee-sign"></i> &nbsp; 2000</td>
                                </tr>

                                <tr>
                                    <td>Tax</td>
                                    <td><i className="fa-solid fa-indian-rupee-sign"></i> &nbsp; 360</td>
                                </tr>

                                <tr>
                                    <td>Discount</td>
                                    <td><i className="fa-solid fa-indian-rupee-sign"></i> &nbsp; - 60</td>
                                </tr>

                            </table>

                            <hr className="mx-3 w-75"/ >

                            <table className="mb-4 mx-5 w-75">

                                <tr>
                                    <td><b>Total</b></td>
                                    <td className="mx-5 total"><i className="fa-solid fa-indian-rupee-sign"></i> &nbsp; <b>2300</b></td>                               
                                </tr>

                            </table>

                            {/* proceed to checkout button */}
                            <div className="row">
                                <NavLink to="/payment/" className="text-decoration-none" >

                                    <div className="btn btn-sm ms-5 mb-2 inputfocus navbtn w-50 d-flex justify-content-around checkoutbtn">

                                        <div className="col-xl-1"><i className="fa-solid fa-lock"></i></div>
                                        <div className="col-xl-8">Proceed to Checkout</div>
                                        <div className="col-xl-1"><i className="fa-solid fa-arrow-right"></i></div>

                                    </div>

                                </NavLink>
                            </div>
                        
                        </div>
                        {/* planpricing third card in second col starts */}

                    </div>
                    {/* main row col second ends */}

                </div>
                {/* main row ends */}

            </div>
            {/* checkout ends */}

            <Footer/>

        </div>
        {/* <!-- container fluid ends --> */}

        </>
    );
}

export default checkout;



