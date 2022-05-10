import React, { Component } from "react";
import SelectSidenav from "../Navbar/SelectSidenav";
import SelectTopnav from "../Navbar/SelectTopnav";
import { NavLink } from 'react-router-dom'
import img1 from './images/theme1.png';
import img2 from './images/theme2.png';
import img3 from './images/theme3.png';
import img4 from './images/theme4.png';


class SelectWallpaper extends Component {
   
        constructor(props) {
            super(props);
            this.state = (<>
               <img alt=' '  className="m-auto wall-priview"  src={img1} /></>);    
        }
        updateContent1 = () => {
            this.setState(<>
                 <img alt=' '  className="m-auto wall-priview"  src={img1} /></>);  
        };
        updateContent2 = () => {
            this.setState(<>
                <img alt=' '  className="m-auto wall-priview"  src={img2} /></>);   
        };
        updateContent3 = () => {
            this.setState(<>
                <img alt=' '  className="m-auto wall-priview"  src={img3} /></>);   
        };
        updateContent4 = () => {
            this.setState(<>
                 <img alt=' '  className="m-auto wall-priview"  src={img4} /></>);  
        };

        
        render() {
            return (
        <>
            <div className="container-fluid ">
                <SelectTopnav />
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className="col-auto col-md-2 col-xl-2 col-sm-2 " >
                        <SelectSidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  p-4 justify-content-center " >

                        <div className="row ">

                            <div className=" col-md-4 col-xl-4  col-sm-4" >
                                <h3 class="text-center">Select Wallpaper</h3>
                                <div className="d-flex  SelectMenusidebar ">
                                    <ul className="nav align-items-center justify-content-center d-flex w-100" id="menu">
                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link d-flex" onClick={this.updateContent1}>
                                                    <img src="/assets/images/Selectwallpaper1.png" className="img-fluid " alt="profile" />
                                                </a>
                                                <p class="text-center" style={{ color: 'black' }} >Recommended</p>
                                            </NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="#/" style={{ textDecoration: 'none' }} onClick={this.updateContent2}>
                                                <a href="/#" className="nav-link  d-flex">
                                                    <img src="/assets/images/Selectwallpaper2.png" className="img-fluid " alt="profile" />
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex"onClick={this.updateContent3}>
                                                    <img src="/assets/images/Selectwallpaper3.png" className="img-fluid" alt="profile" />
                                                </a></NavLink></li>

                                        <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                            <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                <a href="/#" className="nav-link  d-flex"onClick={this.updateContent4}>
                                                    <img src="/assets/images/Selectwallpaper4.png" className="img-fluid " alt="profile" />
                                                </a></NavLink></li>
                                        <div className="d-grid gap-2 col-xl-8 col-md-4 col-sm-4 mx-auto  mb-4" >
                                            <button href="/" className="buttonadd p-4"><span class="material-icons-outlined">file_upload</span>Upload & Use</button>
                                        </div>



                                    </ul>
                                </div>
                            </div>

                            <div className=" col-md-8 col-xl-8 col-sm-8 text-center" >
                            <div className=' priview-screen '>
                                                {this.state}
                             </div>
                                {/* <h3 >Preview</h3>

                                <img src="/assets/images/Selectwallpaper.png" className="img-fluid" alt="img" />
                                <p>Main Screen</p> */}
                     
                            </div>
                        </div>

                    </div>
                    {/* <!-- Content area start --> */}
                </div>

            </div>
        </>
     );  
}
}

export default SelectWallpaper;