import React from "react";
import { Avatar } from "@material-ui/core";

const AdminHeader = () => {
    return (

        <>
            <div className="container-fluid">
                <div >
                    {/* <!--top nav start --> */}
                    <nav className="navbar navbar-light w-100 topnavpadd">
                        <div className="navbar-nav  d-flex justify-content-center px-4">
                            <a className="navbar-brand" href="/#"> <img src="/assets/images/logo.png" className="img-fluid w-75" alt="logo" /></a>
                        </div>
                        <div className="dropdown ">
                            <button className="btn inputfocus dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Anand 2.0 ⮟
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item active" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="d-flex" style={{alignItems: 'center'}}>   
                        <div className="dropdown ">
                            <button className="btn inputfocus dropdown-toggle" type="button" id="notify" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="position-relative ">
                                        <span className="material-icons-outlined ">notifications </span>
                                        <span class="position-absolute  start-100 translate-middle p-1 bg-warning  rounded-circle">
                                            <span class="visually-hidden">New alerts</span>
                                        </span>
                                    </div>
                            </button>





                         



                            <ul className="dropdown-menu" aria-labelledby="notify">

                                <span><b style={{fontSize:'20px'}}>07</b>
                                <span > unread massages</span> </span>
                                <button className="dropdown-item" type="button"
                                style={{backgroundColor:'#FF7000',borderRadius:'50px',textAlign:'center',color:'white',margin:'5px'}}>
                                    Clear All</button>
                                

                                    <div className='d-flex notification-item'>
                                    <Avatar className="m-2"   alt="Avatar"    src=''   />
                                    <div>
                                    <span>New Registered User</span><br/>
                                    <span style={{fontSize:'10px'}}>just now</span></div>
                                </div>
                                <div className='d-flex notification-item'>
                                    <Avatar className="m-2"   alt="Avatar"    src=''   />
                                    <div>
                                    <span>New Invoice Recived</span><br/>
                                    <span style={{fontSize:'10px'}}>10:30 am</span></div>
                                </div>
                                <div className='d-flex notification-item'>
                                    <Avatar className="m-2"   alt="Avatar"    src=''   />
                                    <div>
                                    <span>New Registered User</span><br/>
                                    <span style={{fontSize:'10px'}}>5:00 pm</span></div>
                                </div>
                                    <hr/>
                                    <a href='/#' className='view-all-notification' >View all notification</a>
                    
                            </ul>
                        </div>

                            &nbsp; <span style={{fontSize:'xx-large'}}>|</span>  &nbsp;


                            <ProfileSetting/>
                            
                        </div>
                    </nav>

                    {/* <!--top nav end --> */}
                </div>
            </div>
        </>
    );
}










function ProfileSetting(){
    return(
      <>


      
    <div className=" dropdown ">
        <button className="btn inputfocus dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
        
            <img src="https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg" 
                            style={{width:'40px', height:'40px',borderRadius:'50%'}} alt="profile" />&nbsp;
            Jayesh Sarode
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
        <b> Jayesh Sarode</b><br/>
          <p>ab.cd@gmail.com</p> <hr/>
          <button className="dropdown-item" type="button" style={{display:'flex'}}>
            <span className="material-icons-outlined">account_circle</span> &nbsp; <span>Profile</span>
          </button>
          <button className="dropdown-item" type="button" style={{display:'flex'}}>
            <span className="material-icons-outlined">settings</span> &nbsp; <span>Setting</span>
          </button>
          <button className="dropdown-item" type="button" style={{display:'flex'}}>
            <span className="material-icons-outlined">help_outline</span> &nbsp; <span>Help</span>
          </button> <hr/>
          <button className="dropdown-item" type="button" style={{display:'flex'}}>
            <span className="material-icons-outlined">logout</span> &nbsp; <span>Logout</span>
          </button>
        </ul>
    </div>

      </>
    )
  }
  

export default AdminHeader;