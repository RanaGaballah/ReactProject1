import React from "react";
import fimg from '../../assets/images/feature-left.jpg'
import fimg2 from '../../assets/images/feature-right.jpg'
import detailes1 from '../../assets/images/details-01.jpg'
import detailes2 from '../../assets/images/details-02.jpg'
import detailes3 from '../../assets/images/details-03.jpg'
import { SecondaryButton } from "../../component/index";
import { FaPlay,FaStar ,FaDownload,FaServer,FaGamepad} from "react-icons/fa";
import "./Details.css";
const Details = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-banner header-text">
                  <div className="row">
                    <div className="col-lg-4">
                      <img   src={fimg} alt="" style={{"border-radius": "23px" }}/>
                    </div>
                    <div className="col-lg-8">
                      <div className="thumb">
                        <img className="image-details" src={fimg2} alt="" />
                        <a
                          href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                          target="_blank"
                        >
                          <FaPlay/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="game-details">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Fortnite Details</h2>
                </div>
                <div className="col-lg-12">
                  <div className="content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="left-info">
                          <div className="left">
                            <h4>Fortnite</h4>
                            <span>Sandbox</span>
                          </div>
                          <ul>
                            <li>
                            <FaStar style={{"color":"var(--color-staricon)"}}/> 4.8
                            </li>
                            <li>
                            <FaDownload style={{"color":"var(--color-primary)"}}/> 2.3M
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-info">
                          <ul>
                            <li>
                            <FaStar style={{"color":"var(--color-staricon)"}}/> 4.8
                            </li>
                            <li>
                            <FaDownload style={{"color":"var(--color-primary)"}}/> 2.3M
                            </li>
                            <li>
                              <FaServer style={{"color":"var(--color-primary)"}}/> 36GB
                            </li>
                            <li>
                              <FaGamepad style={{"color":"var(--color-primary)"}}/> Action
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img className="detailsimg" src={detailes1} alt="" />
                      </div>
                      <div className="col-lg-4">
                        <img className="detailsimg" src={detailes2} alt="" />
                      </div>
                      <div className="col-lg-4">
                        <img className="detailsimg" src={detailes3} alt="" />
                      </div>
                      <div className="col-lg-12">
                        <p>
                          Cyborg Gaming is free HTML CSS website template
                          provided by TemplateMo. This is Bootstrap v5.2.0
                          layout. You can make a{" "}
                          <a
                            href="https://paypal.me/templatemo"
                            target="_blank"
                          >
                            small contribution via PayPal
                          </a>{" "}
                          to info [at] templatemo.com and thank you for
                          supporting. If you want to get the PSD source files,
                          please contact us. Lorem ipsum dolor sit consectetur
                          es dispic dipiscingei elit, sed doers eiusmod lisum
                          hored tempor.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="main-border-button">
                            <a href=""><SecondaryButton>Download Fortnite Now!</SecondaryButton></a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
