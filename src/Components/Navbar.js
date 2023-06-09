import { Link } from "react-router-dom";
import "../Css/Navbar.css"
const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="navbar-list">
        <li className="imges" style={{flex:1}}>
            <img src="https://startupz.world/images/white-logo.png" alt="img"/>
        </li>
        <li>
          <Link to="/" >HOME</Link>
        </li>
        <li>
          <Link to="/startup">STARTUP</Link>
        </li>
        <li>
          <Link to="/investor">INVESTOR</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/login">LOG IN</Link>
        </li>
        <li className="addbtn">
            <Link to="/register">ADD LISTING </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
