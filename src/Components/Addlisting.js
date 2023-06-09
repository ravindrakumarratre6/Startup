import "../Css/Addlisting.css";
import { Link } from "react-router-dom";
const Addlisting = () => {
  return (
    <div className="addlisting-container">
      <div className="addlisting-heading">
        <p>
          <b>Startup</b> Registration
        </p>
      </div>
      <form className="form-field">
        <div className="select-container">
          <div style={{position:"relative",right:"14rem"}}>
            <h4>Select Country:*</h4>
          </div>

          <select style={{width:"50%",padding:"0.5rem"}}>
            <option >Select Country</option>
          </select>
        </div>
        <div className="startup-name">
          <div className="username">
            <h4>StartUp Name:*</h4>
          </div>
          <div className="input">
            <input type="text" id="fname" placeholder="e.g.:Startupz World" />
          </div>
        </div>
        <div className="mobile-number">
          <div>
            <h4>Mobile name:*</h4>
          </div>
          <div className="input">
            <input
              type="number"
              id="mnumber"
              placeholder="Your 10 Digit Number"
            />
          </div>
        </div>
        <div className="email">
          <div>
            <h4>Email:*</h4>
          </div>
          <div className="emails">
            <input
              type="text"
              id="email"
              placeholder="e.g.:deepak@startupz.world"
            />
          </div>
        </div>
        <div className="checkbox-conatainer">
          <div className="checkboxs">
            <input type="checkbox" style={{position:"relative",top:"2.3rem",right:"21rem"}} />
          </div>
          <div className="checkbox-paragraph">
            <p>
              I have reviewed the Privacy Policy & agree to receive Text message
              and email alerts. By tapping Register you agree to our Terms of
              Use & Privacy Policy
            </p>
          </div>
        </div>
        <input type="submit" value="REGISTER" style={{width:"50%",padding:"1rem",color:"white",backgroundColor:"red",border:"0.001rem solid rgb(220,217,217)",fontWeight:"bold"}}/>
      </form>

      <div className="addlisting-sign">
        <p>
          Returning User? Please <Link>Sign In</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Addlisting;
