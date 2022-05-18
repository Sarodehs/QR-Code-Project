import { NavLink } from "react-router-dom";
import signinImg from "../img/signin1.png";

function AdminSignin() {
  return (
    <>
      <div className="row admin-signin-container m-5">
        <div className="col-md-6 col-xl-6 col-sm-12 signin-img" style={{ textAlign: "center" }}>
          <img src={signinImg} alt="Welcome greet!!" />
        </div>
        <div className="col-md-6 col-xl-5 col-sm-12 signin-data pt-5">
          <h1>Sign In</h1>
          <br />
          <div className="signin-input">
            <label for="uname" className="text-start fs-5 pb-3">
              Email:
            </label>
            <br />
            <input
              type="text"
              placeholder="fan@gmail.com"
              name="uname"
              required
              className="inputfocus mb-5"
            />
            <br />

            <label for="psw" className="text-start fs-5 pb-3">Password:</label>
            <br />
            <input
              type="password"
              placeholder="************"
              name="psw"
              required
              className="inputfocus "
            />
            <br />
            <a href="/#" className="text-end text-decoration-none pt-2">
              forgot password?
            </a>
            <br />
            <br />
           <NavLink to="/admin-dashboard/"> <button className="signin-btn">Login</button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignin;
