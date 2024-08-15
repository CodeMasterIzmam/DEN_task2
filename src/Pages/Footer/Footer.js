import React from "react";
import "./Footer.css";
import Linkedin2 from "../../Assets/Linkedin2.svg";
import Envelope from "../../Assets/Envelope_icon.svg";
import Phone from "../../Assets/Phone_icon.svg";
import Marker from "../../Assets/Marker_icon.svg";
import Instagram2 from "../../Assets/Instagram2.svg";
import Facebook2 from "../../Assets/Facebook2.svg";
import Twitter2 from "../../Assets/Twitter2.svg";
import Logo2 from "../../Assets/Logo2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blacky">
        <div className="row m100x d-flex flex-wrap">
          <div className="col-md-3">
            <div className="complogo">
              <img src={Logo2} alt="" />
            </div>
            <p className="prektigt">
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
              Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
              semigon.
            </p>
            <div className="icosf2">
              <span className="face2">
                <img src={Facebook2} alt="" />
              </span>
              <span className="face2">
                <img src={Twitter2} alt="" />
              </span>
              <span className="face2">
                <img src={Instagram2} alt="" />
              </span>
              <span className="face2">
                <img src={Linkedin2} alt="" />
              </span>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className="col-md-6 rpm">
              <h1 className="Liens">
               <Link to="#">Links</Link> </h1>
              <p className="propde acc"><Link to="/">Home</Link></p>
              <p className="propde"><Link to="/about">About Us</Link></p>
              <p className="propde"><Link to="#">Rozaliss</Link></p>
              <p className="propde"><Link to="#">Terms and Conditions</Link></p>
              <p className="propde"><Link to="#">Privacy Policy</Link></p>
            </div>
            <div className="col-md-6 rpm rpm2">
              <div className="tac">
                <p className="propde acc"><Link to="/blog">Blog</Link></p>
                <p className="propde"><Link to="#">Contact Us</Link></p>
                <p className="propde"><Link to="#">Our Partners</Link></p>
                <p className="propde"><Link to="#">FAQ</Link></p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h1 className="Liens">Contact Us</h1>
            <p className="propde acc">
              {" "}
              <img className="phone" src={Envelope} alt="ico" />
              <span> Eyadaty@email.com</span>
            </p>
            <p className="propde">
              <img className="phone" src={Phone} alt="ico" />
              <span>+213540070124</span>
            </p>
            <p className="propde">
              <img className="phone" src={Marker} alt="ico" />
              <span>Algiers, Algeria</span>
            </p>
            <p className="propde">
              <img className="phone" src={Phone} alt="ico" />
              <span>+213540070124</span>
            </p>
          </div>
          <div className="col-md-3">
            <h1 className="Liens">Subscribe to Us</h1>
            <input type="email" className="email2" placeholder="E-mail" />
            <button type="button" className="btn btn-primary priabo">
            Subscribe
            </button>
          </div>
        </div>
        <hr className="hr" />
        <p className=" droson"> All Rights &copy; Reserved for This Website </p>
      </div>
    </div>
  );
};

export default Footer;
