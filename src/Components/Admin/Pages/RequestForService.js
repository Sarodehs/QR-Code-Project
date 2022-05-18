

import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";
// import Footer from "../Navbar/Footer";
import { PaginationTable } from './TblOperation/OrderTable';

function RequestForService(){
    return(
        
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
                <h3>Request For Service</h3>
                    {/* search and header section */}
                    <div class="ticket-top-btn justify-content-between">
                        <div class=" ticket-top-btn">
                            <button class="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i class="material-icons-outlined">file_download</i>&nbsp; Export to CSV</button>
                            <button class="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i class="material-icons-outlined">call</i>&nbsp; Contact</button>
                            <button class="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i class="material-icons-outlined">calendar_today</i>&nbsp; Schedule</button>
                        </div>
                        <div class="">
                        <div class="input-group mb-3 searchbar">
                                                    <input type="text" class="form-control inputfocus" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span class="input-group-text"><span class="material-icons-outlined">search</span></span>
                                                </div>
                        
                        </div>
                    </div>

                    <PaginationTable />
                </div>
                
            </div>
            </div>
        </>
    )
}

export default RequestForService;