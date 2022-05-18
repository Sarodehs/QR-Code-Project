import Sidenav from "../Navbar/Sidenav";
import React, { Component } from "react";
import SettingNav from "../Navbar/SettingNav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 
import { NavLink } from 'react-router-dom';


import imgA1 from '../Select/images/theme1-screen1.png';

import imgC1 from '../Select/images/theme3-screen1.png';

import imgB1 from '../Select/images/theme4-screen1.png';

import imgD1 from '../Select/images/theme2-screen1.png';




class ChangeTheme extends Component {
        constructor(props) {
            super(props);
            this.state = (<>
                <img src={imgA1} alt='img' className='selectthemeimgsize cardshadow ' /></>);
        }
    
        updateContent1 = () => {
            this.setState(<>
                <img src={imgA1} alt='img' className='selectthemeimgsize cardshadow' /></>);
        };
        updateContent2 = () => {
            this.setState(<>
                <img src={imgB1} alt='img' className='selectthemeimgsize cardshadow' />
               </>);
        };
        updateContent3 = () => {
            this.setState(<>
                <img src={imgC1} alt='img' className='selectthemeimgsize cardshadow' />
                 </>);
        };
        updateContent4 = () => {
            this.setState(<>
                <img src={imgD1} alt='img' className='selectthemeimgsize cardshadow' />
              </>);
        };
   
    render() {
    return (
        <>
            <div className="container-fluid  ">
            <Topnav/>
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className=" col-md-2 col-xl-2 col-sm-2 " >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light   justify-content-center " >
                       
                            <div className="row">
                                <div className="col-xl-2 col-md-2 col-sm-2">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-10 col-sm-10">
                                    <div className="row ">

                                        <div className=" col-md-12 col-xl-4  col-sm-12 p-4" >
                                            <h3 className="text-center">Select Theme</h3>
                                            
                                                <div className="d-flex  SelectMenusidebar ">
                                        <ul className="nav align-items-center justify-content-center d-flex " id="menu">


                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2 " onClick={this.updateContent1}>
                                                            <p> Alfa Pack</p>
                                                            <img src="/assets/images/Selecttheme1.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                    <p class="text-center" style={{ color: 'black' }} >Recommended</p>

                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2" onClick={this.updateContent2}>
                                                            <p> Alfa Pack</p>
                                                            <img src="/assets/images/Selecttheme2.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2" onClick={this.updateContent3}>
                                                            <p> Alfa Pack</p>
                                                            <img src="/assets/images/Selecttheme3.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex ">
                                                        <div class=" row g-0 w-100  p-2" onClick={this.updateContent4}>
                                                            <p> Alfa Pack</p>
                                                            <img src="/assets/images/Selecttheme4.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                        </ul>
                                    </div>

                                                <div className="d-grid gap-2 col-xl-3 col-md-3 col-sm-3 mx-auto ">
                                                    <button className="btn btn-warning buttonfocuscolor" type="button" >SAVE</button>
                                               
                                            </div>

                                        </div>

                                        <div className=" col-md-8 col-xl-8  col-sm-8 text-center ">
                                            <h2>Preview</h2>
                                            <div className=' priview-screen '>
                                                {this.state}
                                            </div>
                                </div>
                                    </div>

                                </div>
                            </div>
                     
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
              
                <Footer />
            </div>


        </>
    );
}
}
export default ChangeTheme;



