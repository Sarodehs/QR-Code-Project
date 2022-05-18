import ActivitiesList from './Activities-list';

import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";

function ActivitieDetails () {
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
              
                <p>Dashboard |  Activities</p>

                <div className='row'>
                    <div className="col-8"> 
                        <div className='row'>
                            <div className='col-lg-6'><h2>Activities</h2> </div>
                            <div className='col-lg-6'>
                                <span style={{fontSize:'12px'}}>This Month (Mon 25, July - Sun 31 Aug) (32 Activities)</span>
                            </div>
                            </div>
                        <ActivitiesList />                   
                    </div>            
                    <div className='col-4 btn-activity'>
                        <h1>Filter</h1>
                        <button className='justify-content-center'> Specific</button>
                        <button className='justify-content-center activity-secondary-btn'> Today</button>
                        <button className='justify-content-center activity-secondary-btn'> Yesterday</button>
                        <button className='justify-content-center activity-secondary-btn'> This Week</button>
                        <button  className='justify-content-center activity-secondary-btn'> This Month</button>
                        <br/><hr/><br/>
                        <button className='justify-content-center'><span class="material-icons-outlined ">file_download</span> Export to CSV</button>
                        <br/><hr/><br/>
                    </div>

                </div>
              
                </div>
            </div>
            </div>
        </>
        


    );
}

export default ActivitieDetails;