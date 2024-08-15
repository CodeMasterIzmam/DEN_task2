import React, { Component, useRef } from "react";
import "./Categories.css";
import Slider from "react-slick";
import Greaterthen from "../../Assets/Greaterthen.svg";
import Lessthen from "../../Assets/Lessthen.svg";
import Icon from "../../Assets/Icon.svg";
import Icon2 from "../../Assets/Icon2.svg";
import Icon3 from "../../Assets/Icon3.svg";
import Icon4 from "../../Assets/Icon4.svg";
import Icon5 from "../../Assets/Icon5.svg";
import Icon6 from "../../Assets/Icon6.svg";
import { Link } from "react-router-dom";

const Catagories = () => {
    const sliderRef = useRef();
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

        ]
    };
    const Next = () => {
        sliderRef.current.slickNext();
    }
    const Previous = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="categories">
            <div className="m10">
                <div>
                    <p className="a">Explore all the</p>
                    <div className="d-flex thug">
                        <div className="ories">
                            <p className=" categ">Catégories</p>
                        </div>
                        <div className=" btnout">
                            <Link to="#" style={{ textDecoration: "none" }}>
                                <img className="lessthen" onClick={Previous} src={Lessthen} alt="image" />{" "}
                            </Link>
                            <Link to="#" style={{ textDecoration: "none" }}>
                                <img src={Greaterthen} onClick={Next} alt="image" />
                            </Link>
                        </div>
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        <div className="temp">
                            <div className="icom">
                                <img className="sthato" src={Icon} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">General practitioner</p>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="icom">
                                <img className="sthato" src={Icon2} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">Dentist</p>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="icom ">
                                <img className="sthato" src={Icon3} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">Surgeon</p>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="icom ">
                                <img className="sthato" src={Icon4} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">Eye Specialist</p>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="icom ">
                                <img className="sthato" src={Icon5} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">Cardiologist</p>
                            </div>
                        </div>
                        <div className="temp">
                            <div className="icom mx-0">
                                <img className="sthato" src={Icon6} alt="icon" />
                            </div>{" "}
                            <div>
                                <p className="generaliste">Dermatologist</p>
                            </div>
                        </div>

                    </Slider>
                    </div>
            </div>
        </div>
    );
}
export default Catagories;