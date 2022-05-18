
import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";


function AdminTicketEdit(){
    return (
       
        <>
        <div className="container-fluid  ">
        <AdminHeader />
            <div className="row">
                 {/* <!-- side nav start --> */}
                <div className="col-md-2 col-xl-2 col-sm-2" >
                   <AdminSidebar />
                </div>
                {/* <!-- side nav end --> */}

                {/* <!-- Content area start --> */}
                <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center p-4" >


                    <div class=" p-3 mb-5 mt-5 bg-white rounded">
                        <h3><span class="material-icons-outlined">arrow_back</span> Ticket</h3><br/>

                        <div className="row">
                            <div className="col-4">
                                Customer Name
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                Restaurant Name
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                            Created Date
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                            Reason
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                Issue
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                            Status
                            </div>
                            <div className="col-8">
                            <input type="text" className="form-control inputfocusnone mb-4" />
                            </div>
                        </div>

                     
                        <div className=" d-flex table-bottom align-content-end">
                            <button className="w-auto">Save Changes</button>
                            <button className="w-auto">Cancel</button>
                        </div>
     



                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminTicketEdit;