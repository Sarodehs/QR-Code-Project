import {  MemberCount,  Activities,  PieChartSample,  Tbl1,  Tbl2} from './DashboardComponents';
import Linegraph from "./LineGraph";
import BarGraph from "./BarChart";

function Dashboard() {
  return (
    <div className='dashboard'>
      <MemberCount />
      <div className="row">
        <div className="col-8">
          <Linegraph />
        </div>
        <div className="col-4 ">
          <Activities />
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <BarGraph /> 
        </div>
        <div class="col-5">
          <Tbl1 />
        </div>
        <div class="col-3">
          <PieChartSample />
        </div>
      </div>

      <Tbl2 />

      {/* <div className="row">
        <div className="col-8">
          <IpTbl2 />
        </div>
        <div className="col-4 ">
          <Activities />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
