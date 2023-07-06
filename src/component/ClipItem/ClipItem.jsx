import React from "react";
import './ClipItem.css'

const ClipItem = (props) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="item">
        <div className="thumb">
          <img src={props.children} />
          <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank">
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className="down-content">
          <h4>{props.children}</h4>
          <span>
            <i className="fa fa-eye"></i> {props.children}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClipItem;
