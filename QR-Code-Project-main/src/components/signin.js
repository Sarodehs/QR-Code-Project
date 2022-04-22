import signinImg from'../img/signin1.png';

function Signin(){
    return(
    <>
    <div className="row signin-container">
        <div className="col signin-img" style={{textAlign: 'center'}}>
            <img src={signinImg} alt="Welcome greet!!" />
        </div>
        <div className="col signin-data">
            <h1>Sign In</h1><br />
            <div className="signin-input">
            <label for="uname" style={{textAlign: 'left'}}>Email:</label><br />
            <input type="text" placeholder="fan@gmail.com" name="uname" required /><br />

            <label for="psw">Password:</label><br />
            <input type="password" placeholder="************" name="psw" required /><br />
            <a href="#" style={{textAlign: 'right'}}>forgot password?</a><br/><br/>
            <button className="signin-btn">Login</button>
            </div>
        </div>
    </div>
    </>);
}

export default Signin;