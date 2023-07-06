import React from "react";
import './CardStream.css'
import { FaCheckCircle,FaRegEye ,FaGamepad} from "react-icons/fa";

const CardStream = (props) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
        <div className="thumb">
          <img src={props.image} alt="" />
          <div className="hover-effect">
            <div className="content">
              <div className="live">
                <a href="#">Live</a>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FaRegEye />
                    </span>{" "}
                    {props.rate}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FaGamepad />
                    </span>{" "}
                    {props.gamename}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="down-content">
          <div className="avatar">
            <img className="avatar-img" src={props.image2} alt="" />
          </div>
          <span>
            <FaCheckCircle /> {props.username}
          </span>
          <h4>{props.desc}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardStream;
