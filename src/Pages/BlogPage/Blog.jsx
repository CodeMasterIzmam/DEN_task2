import { RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import CombinedShape from "../../Assets/Search.svg";
import Background5 from "../../Assets/Background5.svg";
import Background6 from "../../Assets/Background6.svg";
import Background7 from "../../Assets/Background7.svg";
import Background8 from "../../Assets/Background8.svg";
import Background9 from "../../Assets/Background9.svg";
import Background10 from "../../Assets/Background10.svg";
import Background11 from "../../Assets/Background11.svg";
import Background12 from "../../Assets/Background12.svg";
import Shape from "../../Assets/ShapeChanger.svg";
import List from "../../Assets/list 1.svg";
import Icon13 from "../../Assets/Icon13.svg";
import Avatar from "../../Assets/Avatar.svg";
import { Pagination, Select } from "antd";
import Eyadaty from "../../Components/EyadatyPage/Eyadaty";
import About from "../About/About";

const Blog = () => {
  const [layout, setLayout] = useState(true);
  const handleChange = () => {
    console.log("Handle clicked");
  };
  const une = "A lumbar disc hernia ventral";
  const lorem =
    "Lörem ipsum tempofiering reastat fastän treck, i tirade. Sitskate diledes tills nyk till funkis.";
  return (
    <div className="blog">
      <p className="accp2">
        <Link className="accp text-dark" to="/">
          Home
        </Link>{" "}
        <span className="outright">
          <RightOutlined />
        </span>{" "}
        <span className="text-primary">Blog</span>
      </p>
      <h1 className="hblog">See our </h1>
      <h1 className="hblog2">Latest blog</h1>
      <div className="d-flex flex-wrap m100">
        <div className="inp inpsearch">
          <label htmlFor="Chercher...">Search</label>
          <form className="d-flex ali">
            <input
              className="form-control inparea"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn searchb" type="submit">
              <img src={CombinedShape} alt="svg" />{" "}
            </button>
          </form>
        </div>
        <div className="inp inpcat">
          <label htmlFor="Trier par">Catégories</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Catégories</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className="inp">
          <label htmlFor="Trier par">Sort by</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Sort by</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div className="inp inp2">
          <p className="aff">
            <span className="chage">Display </span>
            <Link to="#">
              {" "}
              <img
                src={Shape}
                className={layout ? "list bg-primary" : "list bgLight"}
                onClick={() => setLayout(true)}
                alt="icon"
              />
              <img
                src={List}
                onClick={() => setLayout(false)}
                className={layout ? "list bgLight" : "list bg-primary"}
                alt="icon"
              />
            </Link>
          </p>
        </div>
      </div>
      <div className="row m10">
        <div className="col-md-4 ctg">
          <h1 className="categories">Catégories</h1>
          <p className="gen">
          Generalist <span className="sp">100</span>
          </p>
          <p className="gen">
          Dental Surgery <span className="sp">100</span>
          </p>
          <p className="gen">
            ORL <span className="sp">100</span>
          </p>
          <p className="gen">
          Ophthalmology <span className="sp">100</span>
          </p>
          <p className="gen">
          Dermatology and Venereology <span className="sp">100</span>
          </p>
          <p className="gen">
          Plastic Surgery <span className="sp">100</span>
          </p>
          <p className="gen">
          Pneumology-Phthisiology-Allergology <span className="sp">100</span>
          </p>
          <p className="gen">
            Cardiologie <span className="sp">100</span>
          </p>
          <p className="gen">
          Diabetology-Endocrinology <span className="sp">100</span>
          </p>
          <p className="gen">
          Hepatogastroenterology <span className="sp">100</span>
          </p>
          <p className="gen">
          Internal Medicine <span className="sp">100</span>
          </p>
          <p className="gen">
          Gynecology and Obstetrics<span className="sp">100</span>
          </p>
          <p className="gen">
          Pediatrie <span className="sp">100</span>
          </p>
          <p className="gen">
          Pediatric Surgeon <span className="sp">100</span>
          </p>
          <p className="gen">
          General Surgery <span className="sp">100</span>
          </p>
          <p className="gen">
          Orthopedics and Traumatology <span className="sp">100</span>
          </p>
          <p className="gen">
          Rheumatology <span className="sp">100</span>
          </p>
          <p className="gen">
          Physiotherapy and Functional Rehabilitation{" "}
            <span className="sp">100</span>
          </p>
          <p className="gen">
          Urology <span className="sp">100</span>
          </p>
          <p className="gen">
          Nephrology <span className="sp">100</span>
          </p>
          <p className="gen">
          Neurology <span className="sp">100</span>
          </p>
          <p className="gen">
          Neuropsychiatry <span className="sp">100</span>
          </p>
          <p className="gen">
          Psychiatry <span className="sp">100</span>
          </p>
          <p className="gen">
          Speech Therapist <span className="sp">100</span>
          </p>
          <p className="gen">
            Psycology <span className="sp">100</span>
          </p>
          <p className="gen">
            Radiology <span className="sp">100</span>
          </p>
          <p className="gen">
            Hématology <span className="sp">100</span>
          </p>
          <p className="gen">
            Biology <span className="sp">100</span>
          </p>
          <p className="gen">
          Biochemistry <span className="sp">100</span>
          </p>
          <p className="gen">
          Veterinarian <span className="sp">100</span>
          </p>
          <p className="gen">
          Nutritionist <span className="sp">100</span>
          </p>
          <p className="gen">
          Beauty and Alternative Medicine Center{" "}
            <span className="sp">100</span>
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background5} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Dental Surgery</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background6} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Cardiology</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background7} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmology</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background8} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background9} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background10} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={layout ? "col-md-6" : "col-md-12 "}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background11} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={layout ? "col-md-6 sthato" : "col-md-12"}>
              <div className={layout ? "card45" : "d-flex"}>
                <img src={Background12} className="timage" alt="image" />
                <div className={layout ? "ven" : "ven layven"}>
                  <div className="dblock">
                    <p className="text-primary dentary">Ophtalmologie</p>
                    <p className="card-text3">
                      <img src={Icon13} alt="" /> 25/05/2022{" "}
                    </p>
                    <h3 className="une">{une}</h3>
                    <p className="card-text2">
                      <img className="avatar" src={Avatar} alt="" />
                      Selma Achref
                    </p>
                    <p className="lorem">{lorem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rpmn d-flex">
            <button className="prev">Previous</button>
            <Pagination defaultCurrent={1} total={150} />
            <button className="nex">Next</button>{" "}
          </div>
        </div>
        <button className="voir-btn">See more</button>
      </div>
      <Eyadaty />
      <About />
    </div>
  );
};

export default Blog;
