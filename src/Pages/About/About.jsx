import React, { useState } from "react";
import Background4 from "../../Assets/Background4.svg";
import Logo2 from "../../Assets/Logo2.svg";
import Facebook from "../../Assets/Facebook.svg";
import Twitter from "../../Assets/Twitter.svg";
import Instagram from "../../Assets/Instagram.svg";
import Linkedin from "../../Assets/Linkedin.svg";
import Eyadaty from "../../Components/EyadatyPage/Eyadaty";
import Search from "antd/es/transfer/search";
import { Button, Input, Modal } from "antd";
import "./About.css";

const About = () => {
  const { Search } = Input;
  const onSearch = (value) => {
    console.log(value);
  };
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="about">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={Background4} className="d-block w-100" alt="..." />

            <div className="carousel-cap">
              <div className="crodoc">
                <div className="logo2">
                  <img src={Logo2} alt="logo" />
                </div>
                <h1 className="abonnez">Subscribe for any updates.</h1>
                <div className="inp">
                  <Search
                    placeholder="E-mail"
                    allowClear
                    enterButton="Subscribe"
                    size="large"
                    onSearch={onSearch}
                  />
                </div>
                <div className="icosf">
                  <p>
                    <span className="suivez">Follow us on</span>{" "}
                    <span className="face">
                      <img src={Facebook} alt="" />
                    </span>
                    <span className="face">
                      <img src={Twitter} alt="" />
                    </span>
                    <span className="face">
                      <img src={Instagram} alt="" />
                    </span>
                    <span className="face">
                      <img src={Linkedin} alt="" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="modal-btn-div">
            <Button type="primary" className="modle-btn" onClick={showLoading}>
              Watch a Video
            </Button>
          </div>
          <Modal
            title={<p></p>}
            footer=""
            loading={loading}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <video className="video" autoPlay controls>
              <source src="https://youtu.be/vo1NyNB9rN8?si=JGTmpnPWl4zOekhS" />
            </video>
          </Modal>
        </div>
        <div className="accordion" id="accordionExample">
          <h1 className="accordion-head">FAQs</h1>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Who We Are?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Meet Our Team of Qualified Doctors At Eyadaty, </strong>
                Eyadaty is a group of highly Qualified Doctors. Our team of
                highly qualified and compassionate doctors is dedicated to
                providing exceptional care tailored to your needs. With years of
                experience across various medical specialties, our doctors are
                committed to delivering accurate diagnoses and effective
                treatments. Each member of our team stays at the forefront of
                medical advancements, ensuring that you receive the best
                possible care in a warm and welcoming environment.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What qualifications do our doctors have?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our doctors are all highly qualified, with advanced degrees from
                reputable medical schools and extensive training in their
                respective fields. They are board-certified and continuously
                update their knowledge through ongoing education and
                professional development.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How do you choose the right doctor for your needs?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We understand that choosing the right doctor is important. Our
                patient coordinators are here to help you find the best match
                based on your medical history, current needs, and personal
                preferences. We also offer detailed profiles of our doctors to
                assist you in making an informed decision.
              </div>
            </div>
          </div>
        </div>
        <Eyadaty />
      </div>
    </div>
  );
};

export default About;
