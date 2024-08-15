import React, { useState } from "react";
import "./Login.css";
import Illustration from "../../Assets/Illustration.svg";
import Frame from "../../Assets/Frame.svg";
import Frame2 from "../../Assets/Frame 2.svg";
import Frame3 from "../../Assets/Frame3.svg";
import Eyadaty from "../../Components/EyadatyPage/Eyadaty";
import {
  RightOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Input, Space } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const [layout, setLayout] = useState(true);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleLogin = () => {
    setLayout(false);
  };
  const handleSign = () => {
    setLayout(true);
  };
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login">
      <div className="accuil">
        <p className="accp">
          <Link className="accp text-dark" to="/">
            Home
          </Link>{" "}
          <span className="outright">
            <RightOutlined />
          </span>{" "}
          <span className="current" >
            Login
          </span>
        </p>
        <div className="row">
          <div className="creer col-md-5">
            <h1 className="unreer">Create an </h1>
            <h1 className="unreer compt">account</h1>
            {layout ? (
              <div>
                <p className="vous">
                  Do you already have an account?{" "}
                  <button className="current1"onClick={handleLogin}> Login</button>
                </p>
                <form action="submit" onSubmit={(e)=>e.preventDefault()}>
                  <Space direction="vertical">
                    <div className="spea">
                      <p className="maile">E-mail</p>
                      <Input required placeholder="E-mail" />
                    </div>
                    <div className="spea">
                      <p className="maile">Password</p>
                      <Input.Password required placeholder="Password" />
                    </div>
                    <div className="spea">
                      <p className="maile">Repeat Password</p>
                      <Input.Password
                        placeholder="Repeat Password"
                        required
                        iconRender={(visible) =>
                          visible ? (
                            <EyeTwoTone className="eyetwo" />
                          ) : (
                            <EyeInvisibleOutlined />
                          )
                        }
                      />
                    </div>
                    <Checkbox className="jaccep" onChange={onChange}>
                      "I have read and{" "}
                      <span className="current">
                        {" "}
                        accept the privacy policy
                      </span>
                    </Checkbox>
                  </Space>
                  <div>
                    <button className="pinsb" type="primary">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <p className="vous">
                  Do not have an account?{" "}
                  <button className="current1" onClick={handleSign}>
                    {" "}
                    Sign Up
                  </button>
                </p>
                <form action="submit" onSubmit={(e)=>e.preventDefault()}>
                  <Space direction="vertical">
                    <div className="spea">
                      <p className="maile">E-mail</p>
                      <Input required placeholder="E-mail" />
                    </div>
                    <div className="spea">
                      <p className="maile">Password</p>
                      <Input.Password required placeholder="Password" />
                    </div>

                    <Checkbox className="jaccep" onChange={onChange}>
                      "I have read and{" "}
                      <span className="current">
                        {" "}
                        accept the privacy policy
                      </span>
                    </Checkbox>
                  </Space>
                  <div>
                    <button className="pinsb" type="primary">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            )}
            <hr className="hr" />
            <p className="oup">Or</p>
            <div className="goologo">
              <img className="frame" src={Frame} alt="icon" />
              <img className="frame" src={Frame2} alt="icon" />
              <img className="frame" src={Frame3} alt="icon" />
            </div>
          </div>
          <div className="flex-wrape col-md-4">
            <img className="illustration" src={Illustration} alt="" />
          </div>
        </div>
      </div>
      <Eyadaty />
    </div>
  );
};

export default Login;
