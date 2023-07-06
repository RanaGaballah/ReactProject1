import React from "react";
import "./TopStreams.css";
import avatar1 from '../../assets/images/avatar-01.jpg'
import avatar2 from '../../assets/images/avatar-02.jpg'
import avatar3 from '../../assets/images/avatar-03.jpg'
import avatar4 from '../../assets/images/avatar-04.jpg'

import { Button } from '../../component/index';
import { FaCheckCircle} from "react-icons/fa";

const TopStreams = () => {
  return (
    
      <div className="top-streamers">
        <div className="heading-section">
          <h4>
            <span>Top</span> Streamers
          </h4>
        </div>
        <ul>
          <li>
            <span>01</span>
            <img src={avatar1} alt="" />
            <h6>
              <FaCheckCircle /> LahutaM
            </h6>
            <div className="main-button">
              <Button>Follow</Button>
            </div>
          </li>
          <li>
            <span>02</span>
            <img src={avatar2} alt="" />
            <h6>
              <FaCheckCircle /> Kengan
            </h6>
            <div className="main-button">
              <Button>Follow</Button>
            </div>
          </li>
          <li>
            <span>03</span>
            <img src={avatar3} alt="" />
            <h6>
              <FaCheckCircle /> Areluwa
            </h6>
            <div className="main-button">
              <Button>Follow</Button>
            </div>
          </li>
          <li>
            <span>04</span>
            <img src={avatar4} alt="" />
            <h6>
              <FaCheckCircle /> Omeg
            </h6>
            <div className="main-button">
              <Button>Follow</Button>
            </div>
          </li>
          <li>
            <span>05</span>
            <img src={avatar1} alt="" />
            <h6>
              <FaCheckCircle /> GangTeam
            </h6>
            <div className="main-button">
              <Button>Follow</Button>
            </div>
          </li>
        </ul>
      </div>
   
  );
};

export default TopStreams;
