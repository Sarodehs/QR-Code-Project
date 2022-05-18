

import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";
// import Footer from "../Navbar/Footer";
import { PaginationTableTicketViewEmbeded } from './TblOperation/OrderTable';

function AdminTicketData(){
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
                <h3>Ticket</h3>
                    {/* search and header section */}
                    <div className="ticket-top-btn justify-content-between">
                        <div className=" ticket-top-btn">
                            <button className="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i className="material-icons-outlined">file_download</i>&nbsp; Export to CSV</button>
                            <button className="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i className="material-icons-outlined">delete</i>&nbsp; Delete</button>
                            <button className="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i className="material-icons-outlined">reply</i>&nbsp; Assign</button>
                            <button className="btn btn-warning buttonfocuscolor d-flex m-2" type="button">
                                <i className="material-icons-outlined">calendar_today</i>&nbsp; Schedule</button>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-md-4">
                        <div class="input-group mb-3 searchbar">
                                                    <input type="text" class="form-control inputfocus" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span class="input-group-text"><span class="material-icons-outlined">search</span></span>
                                                </div>
                        </div>
                    </div>

                    <PaginationTableTicketViewEmbeded />
                </div>
                
            </div>
            </div>
        </>
    )
}

export default AdminTicketData;