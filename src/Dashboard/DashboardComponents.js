import { Link } from "react-router-dom";
import PieGraph from './pie-graph.js';
import img1 from "../img/iptotalMemberIcon.png";
import img2 from "../img/ipgoldIcon.png";
import img3 from "../img/ipSilverIcon.png";
import img4 from "../img/ipFreeIcon.png";

function MemberCount() {
  return (
    <>
      <div className="row container-member-count">
        <div style={{ backgroundColor: "#FFF5EA" }}>
          {/* <img src={img1} alt="group icon" /> */}
          <span class="material-icons-outlined"  >groups</span>
          <main>
            <span>Total Members</span>
            <br />
            <p>200</p>
          </main>
        </div>
        <div className="col gold">
          {/* <img src={img2} alt="group icon" /> */}
          <span class="material-icons-outlined"  >groups</span>
          <main>
            <span>Gold</span>
            <br />
            <p>075</p>
          </main>
        </div>
        <div className="col sliver">
          {/* <img src={img3} alt="group icon" /> */}
          <span class="material-icons-outlined"  >groups</span>
          <main>
            <span>Sliver</span>
            <br />
            <p>100</p>
          </main>
        </div>
        <div className="col free">
          {/* <img src={img4} alt="group icon" /> */}
          <span class="material-icons-outlined"  >groups</span>
          <main>
            <span>Free</span>
            <br />
            <p>025</p>
          </main>
        </div>
      </div>
    </>
  );
}

function Activities() {
  return (
    <div className="activities">
      <h3>Activities</h3>
      <div className="container">
        <div className="step ">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            <p>Enquiry For Basic Plan</p>
            <span>10:30Jan</span>
          </div>
        </div>
        <div className="step ">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            <p>Issue in Updating Order</p>
            <span>10:30Jan</span>
          </div>
        </div>
        <div className="step ">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            <p>Amanda and team update menu</p>
            <span>10:30Jan</span>
          </div>
        </div>
        <div className="step">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
           <div className="content">
            <p>Anand's ticket is resolved</p>
            <span>10:30Jan</span>
          </div>
        </div>  
        
            <Link to="/activities">See All</Link>    
        {/* <a href="https://www.facebook.com/login/">See All</a> */}
      </div>
    </div>
  );
}

function Tbl1() {
  return (
    <>
      <div className="request-tbl">
        <h3>Request for Service</h3>
        <div className="overflow-auto">
        <table>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Message</th>
          </tr>
          <tr>
            <td>06/14/1969</td>
            <td>Maria Anders</td>
            <td>Premium credentials are not recived</td>
          </tr>
          <tr>
            <td>04/22/1978</td>
            <td>Dorthy Willson</td>
            <td>Premium credentials are not recived</td>
          </tr>
          <tr>
            <td>01/20/1999</td>
            <td>Mony Cook</td>
            <td>Premium credentials are not recived</td>
          </tr>
          <tr>
            <td>05/19/2001</td>
            <td>Jenery Weber</td>
            <td>Premium credentials are not recived</td>
          </tr>
          <tr>
            <td>05/19/2001</td>
            <td>Jenery Weber</td>
            <td>Premium credentials are not recived</td>
          </tr>
         
       <Link to="/req-for-service">See All</Link>         
        </table>
        </div>
      </div>
    </>
  );
}

function Tbl2() {
  return (
    <>
      <div className="row">
        <div className="col-8 ">
          <div className="line-graph">
            <h3>Recent Orders</h3>
        <div className="overflow-auto">
            <table>
              <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Hotel Name</th>
                <th>Plan Status</th>
                <th>Plan</th>
                <th>City</th>
              </tr>
              <tr>
                <td>17/07/2008</td>
                <td>Amer Pandey</td>
                <td>Vulputate mattis rhoncus</td>
                <td>Activated</td>
                <td>Free</td>
                <td>Pune</td>
              </tr>
              <tr>
                <td>17/07/2008</td>
                <td>Amer Pandey</td>
                <td>Vulputate ipsum</td>
                <td>Not Activated</td>
                <td>Free</td>
                <td>Mumbai</td>
              </tr>
              <tr>
                <td>17/07/2008</td>
                <td>Amer Pandey</td>
                <td>Prasent nisl</td>
                <td>Activated</td>
                <td>Gold</td>
                <td>Banglore</td>
              </tr>
              <tr>
                <td>17/07/2008</td>
                <td>Amer Pandey</td>
                <td>Prasent nisl</td>
                <td>Activated</td>
                <td>Gold</td>
                <td>Banglore</td>
              </tr>
            </table>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="activities">
            <h3>Acquire Cities</h3>
            <div className="row ">
              <div className="col">Pune</div>
              <div className="col text-right">55</div>
            </div>
            <div className="row">
              <div className="col">Lima</div>
              <div className="col">
                <div className="float-right">287</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Lima</div>
              <div className="col">
                <div className="float-right">287</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Prague</div>
              <div className="col">
                <div className="float-right">1210</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Kuala Lumpur</div>
              <div className="col">
                <div className="float-right">1130</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Berlin</div>
              <div className="col">
                <div className="float-right">924</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Las Vegas</div>
              <div className="col">
                <div className="float-right">341</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Lisbon</div>
              <div className="col">
                <div className="float-right">490</div>
              </div>
            </div>
            <div className="row">
              <div className="col">Vancouer</div>
              <div className="col">
                <div className="float-right">568</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PieChartSample() {
  return (
    <>
      <div className="pie-chart">
        <h3>Populer Membership</h3>
        <main>
          <select name="month" id="month">
            <option selected value="1">
              Janaury
            </option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>{" "}
          &nbsp;
          <select name="year" id="year">
            <option value="20219">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </main>
        
        <PieGraph />

        <div>
          Popularity
          <div className="col" style={{ textAlign: "left", paddingLeft: 50 }}>
            <pre>
              <span>🔴</span>Gold
              <br />
              🟠Sliver
              <br />
              ⚫Free
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export {
  MemberCount,
  Activities,
  PieChartSample,
  Tbl1,
  Tbl2,
}