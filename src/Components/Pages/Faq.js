import React from "react";
import Sidenav from "../Navbar/Sidenav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer";


const Faq = () => {
    return (
        <>
            <div className="container-fluid ">
            <Topnav/>
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  p-4 justify-content-center " >
                        <div className="row p-4">
                            <h4>Frequently Asked Questions</h4>
                            <div className="col-xl-9 col-md-9">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span> How can I add images of food?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined ">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>You can easily add images of your dishes and plates by simply clicking the upload image button in the add dish or the
                                                add new item section.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span> How do you support your Customer?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>We support Our customer with  Responsibility, Care, Respect, & Honesty. You know our all executive follow our company values.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span>How can I add or delete Items?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>You can easily add and delete items as per your choice in the menu page. Just by clicking the add or delete icon in the right
                                                corner you can easily set your choices.      </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span> Can I change the logo of the restaurant?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>Yes. you can. By going to the settings panel and selecting the edit restaurant profile, you can easily change the logo of
                                                your restaurant.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span>Where can I see my most trending or my best selling items?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>You can see your most trending or best selling items in the dashboard panel. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="flush-headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <div className="col-xl-10 col-md-8"><span className="material-icons px-4">arrow_drop_down</span>How can I change my Password?</div>
                                                <div className="col-xl-1 col-md-2"><span className="material-icons-outlined">thumb_up_alt</span></div>
                                                <div className="col-xl-1 col-md-2 text-muted"><span className="material-icons-outlined">thumb_down</span></div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                                            data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body "><span className="material-icons-outlined px-4">arrow_right</span>You can change your password in the settings panel. By clicking change password, you will have to set a new password
                                                and save it.</div>
                                        </div>
                                    </div>
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


export default Faq;