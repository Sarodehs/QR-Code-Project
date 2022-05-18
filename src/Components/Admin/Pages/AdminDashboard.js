import {  MemberCount,LineGraph, BarGraph , PieChart, Activities,  Tbl1,  Tbl2} from './A_DashboardComponents';
import AdminSidebar from "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";
// import Footer from "../Hotel_Owner/Navbar/Footer" ;


function AdminDashboard() {
  return (
    <>
     <div className="navHeaderWrap">
          <AdminHeader  />
      </div>
      <div className='row '>
        <div className='col-md-2 col-xl-2 col-sm-2'><AdminSidebar /></div>

        <div className='col-md-10 col-xl-10 col-sm-10'>
            <div className='dashboard'>
              <MemberCount />
              <div className="row m-2">
                <div className="col-8 line-graph">
                  <LineGraph />
                </div>
                <div className="col-4 ">
                  <Activities />
                </div>
              </div>

              <div class="row m-2">
                <div class="col-4 bar-graph">
                  <BarGraph />
                </div>
                <div class="col-5">
                  <Tbl1 />
                </div>
                <div class="col-3 pie-chart text-center">
                  <PieChart />
                </div>
              </div>

            </div>
              <Tbl2 />
        </div>
        
      </div>
   
    </>
  );
}

export default AdminDashboard;
