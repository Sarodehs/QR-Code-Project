
import SelectSidenav from "../Navbar/SelectSidenav";
import SelectTopnav from "../Navbar/SelectTopnav";
import { NavLink } from 'react-router-dom'

import React, { Component } from "react";

import imgA1 from './images/theme1-screen1.png';
import imgA2 from './images/theme1-screen2.png';
import imgA3 from './images/theme1-screen3.png';
import imgC1 from './images/theme3-screen1.png';
import imgC2 from './images/theme3-screen2.png';
import imgC3 from './images/theme3-screen3.png';
import imgB1 from './images/theme4-screen1.png';
import imgB2 from './images/theme4-screen2.png';
import imgB3 from './images/theme4-screen3.png';
import imgD1 from './images/theme2-screen1.png';
import imgD2 from './images/theme2-screen2.png';
import imgD3 from './images/theme2-screen3.png';



class SelectTheme extends Component {
    constructor(props) {
        super(props);
        this.state = (<>
            <img src={imgA1} alt='img' className=' theme-screen-demo ' />
            <img src={imgA2} alt='img' className=' theme-screen-demo ' />
            <img src={imgA3} alt='img' className=' theme-screen-demo ' /> </>);
    }

    updateContent1 = () => {
        this.setState(<>
            <img src={imgA1} alt='img' className=' theme-screen-demo' />
            <img src={imgA2} alt='img' className=' theme-screen-demo' />
            <img src={imgA3} alt='img' className=' theme-screen-demo' /> </>);
    };
    updateContent2 = () => {
        this.setState(<>
            <img src={imgB1} alt='img' className=' theme-screen-demo' />
            <img src={imgB2} alt='img' className=' theme-screen-demo' />
            <img src={imgB3} alt='img' className=' theme-screen-demo' /> </>);
    };
    updateContent3 = () => {
        this.setState(<>
            <img src={imgC1} alt='img' className=' theme-screen-demo' />
            <img src={imgC2} alt='img' className=' theme-screen-demo' />
            <img src={imgC3} alt='img' className=' theme-screen-demo' /> </>);
    };
    updateContent4 = () => {
        this.setState(<>
            <img src={imgD1} alt='img' className=' theme-screen-demo' />
            <img src={imgD2} alt='img' className=' theme-screen-demo' />
            <img src={imgD3} alt='img' className=' theme-screen-demo' /> </>);
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

                                <div className=" col-md-4 col-xl-4  col-sm-4 " >
                                    <h3 class="text-center">Select Theme</h3>
                                    <div className="d-flex  SelectMenusidebar ">
                                        <ul className="nav align-items-center justify-content-center d-flex " id="menu">


                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2 " onClick={this.updateContent1}>
                                                            <p> Alfa Pack</p>
                                                            <img src="../assets/images/Selecttheme1.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                    <p class="text-center" style={{ color: 'black' }} >Recommended</p>

                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2" onClick={this.updateContent2}>
                                                            <p> Alfa Pack</p>
                                                            <img src="../assets/images/Selecttheme2.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex">
                                                        <div class=" row g-0 w-100 p-2" onClick={this.updateContent3}>
                                                            <p> Alfa Pack</p>
                                                            <img src="../assets/images/Selecttheme3.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                            <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                                                <NavLink to="#/" style={{ textDecoration: 'none' }} >
                                                    <a href="/#" className="nav-link d-flex ">
                                                        <div class=" row g-0 w-100  p-2" onClick={this.updateContent4}>
                                                            <p> Alfa Pack</p>
                                                            <img src="../assets/images/Selecttheme4.png" className="img-fluid rounded-start" alt="img"/>
                                                        </div>
                                                    </a>
                                                </NavLink></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className=" col-md-8 col-xl-8  col-sm-8 text-center ">
                                            <h2>Preview</h2>
                                            <div className=' priview-screen '>
                                                {this.state}
                                            </div>
                                </div>
                            </div>
                            {/* <!-- Content area start --> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SelectTheme;






