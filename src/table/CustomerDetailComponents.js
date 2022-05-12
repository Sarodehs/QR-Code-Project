
import Avatar from "@material-ui/core/Avatar";

function CustomerDetailsCard(){
    return(
        <>
        <div className="person-container">
            <table >
                <tr><td>Hotel Name</td><td>Aanand Veg</td></tr>
                <tr><td>Hotel Owner Name</td><td>Shreekant Nehete</td></tr>
                <tr><td>Phone Number</td><td>1234567890</td></tr>
                <tr><td>Email Id</td><td>ab.cd@gmail.com</td></tr>
                <tr><td>Password</td><td>******</td></tr>
                <tr><td>State</td><td>Maharashtra</td></tr>
                <tr><td>City</td><td>Pune</td></tr>
                <tr><td>Total branches</td><td>03</td></tr>
                <tr><td>Branch 01</td><td>Pune</td></tr>
                <tr><td></td><td></td></tr>
            </table>
        </div>
        </>
    );
}

function HotelOwner(){
    return(
        <>
        <div className="identy-card" >
        <img    alt="HotelLogo"   src='https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png' />
        <img      alt="Owner" src='https://www.w3schools.com/w3images/avatar6.png'  />
        </div>
        </>
    )
}

function PlanCard(){
    return(<>
    <div className="identy-card">
        <table>
            <tr><td>Plan</td><td>Golden Plan</td></tr>
            <tr><td>Plan expire on</td><td>23/ 10/ 2021</td></tr>
            <tr><td>
             <input type="radio" id="html" name="fav_language" value="HTML" />
             <label for="html">Now</label><br />
             <input type="radio" id="css" name="fav_language" value="CSS" />
             <label for="css">Befor 10 day</label><br />
             <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
             <label for="javascript">Before 15 day</label>
                </td><td>
                    <p>89 days left</p>
                    <button>Send notification</button>
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