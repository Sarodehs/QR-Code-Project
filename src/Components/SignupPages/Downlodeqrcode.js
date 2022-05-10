import React from "react";
import { NavLink } from 'react-router-dom';

const Downlodeqrcode = () => {
  return (
    <>




      <div className="col-xl-10 col-md-12 col-sm-12 contantfixwh pt-5">
        <div className="row text-center p-5">
          <div className="col-xl- col-md-6 col-sm-6 ">
            <img src="/assets/images/qr-code2.png" className="img-fluid rounded-start w-75" alt="img" />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 ">
            <img src="/assets/images/qr-code.png" className="img-fluid rounded-start w-50 " alt="img" />
            <div className="d-grid gap-2 col-xl-5 col-md-5 col-sm-4 mx-auto p-5">
            <NavLink to="/SelectTheme/" style={{ textDecoration: 'none' }}>
              <button className="btn buttonfocuscolor" type="button" >DOWNLODE QR CODE</button>
              </NavLink>
            </div>
            <div className=" text-center">
            <p>URL - https/www.restaurantname.com &nbsp;
            <a href="/#"style={{ textDecoration: 'none' }}>Copy</a></p>  
            </div>
          </div>

        </div>

      </div>




    </>
  );
}


export default Downlodeqrcode;