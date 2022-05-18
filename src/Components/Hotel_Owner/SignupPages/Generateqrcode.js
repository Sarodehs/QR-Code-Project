import React from "react";
import { NavLink } from 'react-router-dom';

const Generateqrcode = () => {
  return (
    <>
      <div className="col-xl-12 col-md-12 col-sm-12 p-4 contantfixwh">
        <div className="row text-center">
          <div className="col-xl-6 col-md-12 col-sm-12 p-5">
            <img src="/assets/images/qr-code1.png" className="img-fluid rounded-start w-75" alt="img" />
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12 p-5">
            <img src="/assets/images/qr-code.png" className="img-fluid rounded-start w-50 " alt="img" />
            <div className="d-grid gap-2 col-xl-5 col-md-4 col-sm-2 mx-auto p-5">
              <NavLink to="/Downlodeqrcode/" style={{ textDecoration: 'none' }}>
                <button className="btn btn-warning buttonfocuscolor" type="button" >GENERATE QR CODE</button>
              </NavLink>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}


export default Generateqrcode;