import { Link } from "react-router-dom";
import "../Css/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-list">
        <div className="footer-img">
          <img src="https://startupz.world/images/white-logo.png" alt="img" />
           <ul className="list address">
            <li>  <p>101, Relcon Enclave, NH-48 </p></li>
            <li><p> Surat,Gujarat </p></li>
            <li>  <p>India - 394325</p></li>
           </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul className="list company">
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link>Pricing</Link></li>
            </ul>
        </div>
        <div>
          <h2>Quiky Links</h2>
          <ul className="list quiky">
            <li><Link>Community Guidelines</Link></li>
           <li><Link>Privacy Policy</Link></li>
           <li><Link>Terms Of Use</Link></li>
           <li><Link>Cancellation & Refund</Link></li>
           <li><Link>Shipping & Exchange</Link></li>
          </ul>
        </div>
        <div>
          <h2>FAQs</h2>
          <ul className="list faqs">
            <li><Link>Startup FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className="icons-container">
        <ul className="icon-list">
          <li>
          <i className="fa-brands fa-twitter"></i>
          </li>
          <li><i className="fa-brands fa-facebook"></i></li>
          <li ><i class="fa-brands fa-instagram"></i></li>
          <li className="info">
          © 2023<Link to="/">StartupzWorld</Link>,All Rights Resevered.
          </li>
        </ul>
      </div>
      </div>
  );
};
export default Footer;
