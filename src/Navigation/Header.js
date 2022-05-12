
import logo from '../img/logo.png';
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { ProfileSetting } from './Sidebar';
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,
  DropdownToggle,  DropdownMenu,  DropdownItem} from "reactstrap";


export default class Example extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { ontoggleNav } = this.props;
    let d = new Date();
    let today =d.getDate() + '/ ' + d.getMonth() + '/ ' +d.getFullYear() ;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
           <img src={logo} alt="logo" width='60' />  &nbsp;
          <span style={{color:'#ff7000'}}>{today}</span> &nbsp;
            <span className="hmbger" onClick={ontoggleNav}> 
              &#9776;
            </span>
            
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse style={{justifyContent: 'space-around'}} isOpen={this.state.isOpen} navbar>

              <Nav>
              <NavItem >                
              <NavLink href="#" >
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:'black'}}>
                  Anand 2.0 ⮟
                </DropdownToggle>
                <DropdownMenu end>
                {/* <DropdownMenu right> */}
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavLink>
              </NavItem>
              </Nav>

              <Nav className="ml-auto no-toggle-img" navbar>   

                <NavItem>
                  <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle"  style={{background:'white',margine:'auto'}}
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="position-relative m-2 ">
                            <span className="material-icons-outlined ">notifications </span>
                            <span class="position-absolute top- start-100 translate-middle p-1 bg-warning  rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                      </div>
                    </button> 
                    <div class="dropdown-menu dropdown-menu-right notifiction-btn" style={{padding: '10px'}}>
                      <span>unread massages <b>07</b></span>
                      <button class="dropdown-item" type="button">Clear All</button>
                      <div className='notification-item'>
                        <Avatar   alt="Avatar"    src=''   />
                        <div>
                        <p>New Registered User</p>
                        <span>just now</span></div>
                      </div>
                      <div className='notification-item'>
                        <Avatar   alt="Avatar"    src=''   />
                        <div>
                        <p>New Invoice Recived</p>
                        <span>10:30 am</span></div>
                        </div>
                        <div className='notification-item'>
                          <Avatar   alt="Avatar"    src=''   />
                          <div>
                          <p>Ticket from Kundan</p>
                          <span>5:00 pm</span></div>
                        </div><hr/>
                        <a href='#' className='view-all-notification' >View all notification</a>
                      
                    </div>
                  </div>
                </NavItem> 
                
                <NavItem style={{display:'flex'}}>
                  <NavLink href="https://github.com/reactstrap/reactstrap" >
                  <Avatar   alt="Avatar"    src=''   />
                  </NavLink> <ProfileSetting />
                </NavItem>
        
              </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
