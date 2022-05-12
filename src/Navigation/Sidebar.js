import React from "react";
import classnames from "classnames";
import Header from "./Header";
import { NavLink,Link,   Outlet } from 'react-router-dom';
import '../Admin-App.css'
import "bootstrap/dist/css/bootstrap.min.css";

class Sidebar extends React.Component {
  state = {
    open: window.matchMedia("(min-width: 1024px)").matches || false
  };

  ontoggleNav = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    console.log(mobile, open);
    return (

      <div>
        <div className="navHeaderWrap">
          <Header ontoggleNav={this.ontoggleNav} />
        </div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <div 
            className={classnames(
              "sidenav",
              { sidenavOpen: open },
              { sidenavClose: !open }
            )}
          >
            <a
              href="javascript:void(0)"
              className="closebtn hidex"
              onClick={() => this.ontoggleNav("0px")}
            >
              &times;
            </a>  
       
            <Link className='d-flex' to="/"><span class="material-icons-outlined">dashboard</span> &nbsp; <p>Dashboard</p></Link>         
            <Link className='d-flex' to="/transition"><span class="material-icons-outlined">price_change</span>  &nbsp; <p>Transition</p></Link>
            <Link className='d-flex' to="/customer-main"><span class="material-icons-outlined">people</span>  &nbsp; <p>Customer</p></Link>          
            <Link className='d-flex' to="/ticket"><span class="material-icons-outlined">quiz</span>  &nbsp; <p>Ticket</p></Link>
      
          </div>

          <div
            className={classnames(
              "main",
              { mainShrink: open },
              { mainExpand: !open },
              { noscroll: mobile && open }
            )}
          >
            {/* <h2> Push this Div inside</h2> */}
            <div  style={{ margin: "100px 30px" }}>
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



function ProfileSetting(){
  return(
    <>
      <div class="btn-group">
      <button type="button" class="btn dropdown-toggle"  style={{background:'white'}}
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Jayesh Sarode
      </button>
      <div class="dropdown-menu dropdown-menu-right profile-item" style={{padding: '10px'}}>
        <b> Jayesh Sarode</b><br/>
        <p>ab.cd@gmail.com</p> <hr/>
        <button class="dropdown-item" type="button" style={{display:'flex'}}>
          <span class="material-icons-outlined">account_circle</span> &nbsp; <span>Profile</span>
        </button>
        <button class="dropdown-item" type="button" style={{display:'flex'}}>
          <span class="material-icons-outlined">settings</span> &nbsp; <span>Setting</span>
        </button>
        <button class="dropdown-item" type="button" style={{display:'flex'}}>
          <span class="material-icons-outlined">help_outline</span> &nbsp; <span>Help</span>
        </button> <hr/>
        <button class="dropdown-item" type="button" style={{display:'flex'}}>
          <span class="material-icons-outlined">logout</span> &nbsp; <span>Logout</span>
        </button>
      </div>
    </div>
    </>
  )
}

// export default Sidebar;

export {
  Sidebar,
  ProfileSetting,

}
