import React from "react";
import { Link } from "react-router-dom";
import "./StartStream.css";
import Service1 from '../../assets/images/service-01.jpg'
import Service2 from '../../assets/images/service-02.jpg'
import Service3 from '../../assets/images/service-03.jpg'
import { Button } from "../../component/index";
const StartStream = () => {
  return (
    <div className="start-stream">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4>
            <span>How To Start Your</span> Live Stream
          </h4>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <div className="icon">
                <img src={Service1} alt="" />
              </div>
              <h4>Go To Your Profile</h4>
              <p>
                Cyborg Gaming is free HTML CSS website template provided by
                TemplateMo. This is Bootstrap v5.2.0 layout.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="icon">
                <img src={Service2} alt="" />
              </div>
              <h4>Live Stream Button</h4>
              <p>
                If you wish to support us, you can make a{" "}
                <a href="https://paypal.me/templatemo" target="_blank">
                  small contribution via PayPal
                </a>{" "}
                to info at templatemo.com
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="icon">
                <img src={Service3} alt="" />
              </div>
              <h4>You Are Live</h4>
              <p>
                You are not allowed to redistribute this template's downloadable
                ZIP file on any other template collection website.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="main-button">
              <Link to="/profile"><Button>Go To Profile</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartStream;
