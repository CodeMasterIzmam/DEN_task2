import React from "react";
import Background4 from "../../Assets/Background4.svg";
import Stroke2 from "../../Assets/Stroke2.svg";
import Eyadaty from "../../Components/EyadatyPage/Eyadaty";
import Catagories from "../../Components/Catagories/Catagories";
import Laboratories from "../../Components/LaboratoiresPage/Laboratoires";
import Image2 from "../../Assets/Image2.svg";
import "./Main.css";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img className="img1" alt="" src={Background4}/>

          </div>
          <div className="carousel-item">
          <img className="img1" alt="" src={Background4}/>
          </div>
          <div className="carousel-item">
          <img className="img1" alt="" src={Background4}/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="qui row">
        <div className=" col-md-6 img2">
          <img className="docmanimg" src={Image2} alt="image" />
        </div>
        <div className="col-md-6 nous">
          <p className="a">About us</p>
          <h1 className="sommes">Who are we?</h1>
          <p className="lore">
            Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok.
            Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod
            semigon. Rest reska inte eubel sasade. Du kan vara drabbad. Ananade
            krogogt fulparkerare. Speskade syll men polylunat biortad. Hell
            dede. Kasa keredybär.
          </p>
          <Button className="pxar" type="primary">
          See more <RightOutlined />
          </Button>
          <div className=" d-flex car">
            <div className=" h3600">
              <h1 className="h136">
                3600 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Happy patients.</p>
            </div>
            <div className="  h3600">
              <h1 className="h136">
                1200 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Online appointments</p>
            </div>
          </div>
          <div className="d-flex car">
            <div className=" h3600">
              <h1 className="h136">
                20 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Years of experience</p>
            </div>
            <div className="  h3600">
              <h1 className="h136">
                200 <span className="green">+</span>{" "}
              </h1>
              <p className="patient">Doctors and Clinics</p>
            </div>
          </div>
        </div>
      </div>
      <Catagories />
      <div className="button text-center">
        <Link to="#" className="btn quvoir text-light bg-primary">
          <span className="spvoir">See all Catagories</span>{" "}
          <img src={Stroke2} alt="" />
        </Link>
      </div>
      <div className="colo">
        <Laboratories />

        <div className="button text-center">
          <Link to="#" className="btn quvoir text-light bg-primary">
            <span className="spvoir">See all Laboratories</span>{" "}
            <img src={Stroke2} alt="" />
          </Link>
        </div>
      </div>
      <Eyadaty />
    </div>
  );
};

export default Main;
