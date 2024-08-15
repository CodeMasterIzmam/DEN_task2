import React, { Component, useRef } from "react";
import "./Laboratoires.css";
import Lessthen from "../../Assets/Lessthen.svg";
import Greaterthen from "../../Assets/Greaterthen.svg";
import Image8 from "../../Assets/Image8.svg";
import Image9 from "../../Assets/Image9.svg";
import Image10 from "../../Assets/Image10.svg";
import Image11 from "../../Assets/Image11.svg";
import Location from "../../Assets/Location.svg";
import Eye from "../../Assets/Eye.svg";
import Checkmark from "../../Assets/Checkmark.svg";
import Star from "../../Assets/Star.svg";
import Heart from "../../Assets/Heart.svg";
import Icon7 from "../../Assets/Icon7.svg";
import Stroke from "../../Assets/Stroke.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Laboratoires = () => {
const sliderRef=useRef();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
   const next=()=> {
        sliderRef.current.slickNext();
      }
    const previous=()=> {
        sliderRef.current.slickPrev();
      }
    return (
        <div className="laboratories">
            <div className="m11">
                <p className="a">Explore all the</p>
                <div className="d-flex thug">
                    <div className="ories">
                        <h1 className=" categ">Laboratoires</h1>
                    </div>
                    <div className=" btnout">
                        <Link to="#" style={{ textDecoration: "none" }}>
                            <img className="lessthen" src={Lessthen} onClick={previous} alt="image" />{" "}
                        </Link>
                        <Link to="#" style={{ textDecoration: "none" }}>
                            <img src={Greaterthen} onClick={next} alt="image" />
                        </Link>
                    </div>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className="d-flex m100">
                <div className="card card1" style={{ width: "16rem" }}>
                    <img src={Image8} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                            <span>
                            {" "}
                            Dr. Mechri Nasser{" "}
                            </span>
                                <img  className="checkm check"src={Checkmark} alt="image" />
                        </h5>
                        <p className="oph">Ophtalmologie</p>
                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card card1" style={{ width: "16rem" }}>
                    <img src={Image9} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                           Dr.Mnaser rafik<span><img className="checkm" src={Checkmark} alt="" />
                            </span> 
                        </h5>
                        <p className="oph">Chirurgie Dentaire</p>
                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card card1" style={{ width: "16rem" }}>
                    <img src={Image10} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                            Dr. Othmani Salem
                            <span>
                                <img className="checkm check3" src={Checkmark} alt="image" />
                            </span>
                        </h5>
                        <p className="oph">Cardiologie</p>

                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src={Image11} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                            Dr. Hmidouch Djamel
                            <span>
                                <img className="checkm check4" src={Checkmark} alt="image" />
                            </span>
                        </h5>
                        <p className="oph">Généraliste</p>
                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card card1" style={{ width: "16rem" }}>
                    <img src={Image8} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                            <span>
                            {" "}
                            Dr. Mechri Nasser{" "}
                            </span>
                                <img  className="checkm check"src={Checkmark} alt="image" />
                        </h5>
                        <p className="oph">Ophtalmologie</p>
                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card card1" style={{ width: "16rem" }}>
                    <img src={Image9} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <img className="eyeico" src={Icon7} alt="Image" />
                        <h5 className="card-title">
                           Dr.Mnaser rafik<span><img className="checkm" src={Checkmark} alt="" />
                            </span> 
                        </h5>
                        <p className="oph">Chirurgie Dentaire</p>
                        <div className="locate d-flex">
                            <div className="location d-flex">
                                <img src={Location} alt="" />
                            </div>
                            <div className="d-flex">
                                <p className="card-text">
                                400 Housing District, next to the covered market, Berrouaghia, Médéa
                                </p>
                            </div>
                        </div>
                        <div className="d-flex m55k">
                            <div className="d-flex ey">
                                <img src={Eye} alt="image" />
                                <span className="k55 mx-2">55k</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Heart} alt="image" />
                                <span className="k55 mx-2">240</span>
                            </div>
                            <div className="d-flex ey">
                                <img src={Star} alt="image" />
                                <span className="k55 mx-2">4.8</span>
                            </div>
                        </div>
                        <Link to="#" className="btn bdpri text-primary">
                            <span className="spvoir">Voir Plus </span>{" "}
                            <img src={Stroke} alt="" />
                        </Link>
                    </div>
                </div>
            </Slider>
        </div>
    );

}
export default Laboratoires;