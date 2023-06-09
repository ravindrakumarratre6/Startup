import "../Css/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-heading">
        <p>
          <b>StartUp</b> Login
        </p>
      </div>
      <div className="login-field">
        <div className="username"><h4>Username:*</h4></div>
        <div><input type="text" id="username" placeholder="Enter Your or Mobile Number" required /></div>
        <div> <button>LOG IN</button></div>
      </div>
      <div>
        <p>
          New User? <Link to="/register">Please Register</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
