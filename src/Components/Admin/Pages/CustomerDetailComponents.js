
import  g from '../img/Gold.png'
import hotellogo from '../img/HotelLogo.png'
import hotelowner from '../img/HotelOwner.png'

function CustomerDetailsCard(){
    return(
        <>
        <div className="person-container">
            <table >
                <tr><td>Hotel Name</td><td>Aanand Veg</td></tr>
                <tr><td>Hotel Owner Name</td><td>Shreekant Nehete</td></tr>
                <tr><td>Phone Number</td><td>1234567890</td></tr>
                <tr><td>Email Id</td><td>ab.cd@gmail.com</td></tr>
                <tr><td>Password</td><td>****** &nbsp; 
                    <span style={{color:'orange'}}>
                        <span class="material-icons-outlined" >visibility</span>   Reset</span>
                </td></tr>
                <tr><td>State</td><td>Maharashtra</td></tr>
                <tr><td>City</td><td>Pune</td></tr>
                <tr><td>Total branches</td><td>03</td></tr>
                <tr><td>Branch 01</td><td>Kothrud Pune</td></tr>
                <tr><td>Branch 02</td><td>Deccon Pune</td></tr>
                <tr><td>Branch 03</td><td>Kurver Nagar Pune</td></tr>
                <tr><td></td><td></td></tr>
            </table>
        </div>
        </>
    );
}

function HotelOwner(){
    return(
        <>
        <div className="identy-card  d-flex justify-content-arouond " >
            <div className="text-center">
        <img alt="HotelLogo"   src={hotellogo} />
        <p >Hotel Logo</p></div>
            <div className="text-center  ">
        <img alt="Owner" src={hotelowner}  />
        <p>Owner Photo</p></div>
        </div>
        </>
    )
}

function PlanCard(){
    return(<>
    <div className="identy-card ">
        <table>
            <tr className='ic-last'><td>Plan</td><td >Golden Plan &nbsp;
                <img alt='' src={g} /></td></tr>
            <tr><td>Plan expire on</td><td>23/ 10/ 2021</td></tr>
            <tr><td>
             <input type="radio" id="html" name="fav_language" value="HTML" />
             <label for="html">Now</label><br />
             <input type="radio" id="css" name="fav_language" value="CSS" />
             <label for="css">Befor 10 day</label><br />
             <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
             <label for="javascript">Before 15 day</label>
                </td><td className="text-center">
                    <p>89 days left</p>
                    <button className="justify-content-center">Send notification</button>
                </td></tr>
        </table>
    </div>
    </>)
}


export {
    CustomerDetailsCard,
    HotelOwner,
    PlanCard,
  }