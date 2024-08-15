import React from 'react'
import "./Eyadaty.css";
import Playstore from "../../Assets/Playstore.svg";
import Apple from "../../Assets/Apple.svg";
import Image3 from "../../Assets/Image3.svg";

const Eyadaty = () => {
  return (
    <div className="appli">
        <div className="headline">
          <div className="d-flex">
            <div className="d-flex charge">
              <div className="gez">
                <div className="happle">
                <h1 className="eya">
                  {" "}
                  <div>Download </div>the Eyadaty app.
                </h1>

                <p className="soin text-light">
                And take good care of your health.
                </p>
                </div>
                <div className="d-flex appleapp">
                  <div className="d-flex cationn">
                    <div className="head">
                      <p className="tele">Download the app from</p>
                      <h1 className="my-0 astore">Apple Store</h1>
                    </div>
                    <div className="headicon">
                      {" "}
                      <img src={Apple} alt="image" />
                    </div>
                  </div>
                  <div className="d-flex cationn">
                    <div className="head">
                      <p className="tele">Download the app from</p>
                      <h1 className="my-0 astore">Google Store</h1>
                    </div>
                    <div className="headicon">
                      {" "}
                      <img src={Playstore} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex hand">
              <img className='handimage' src={Image3} alt="image" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Eyadaty
