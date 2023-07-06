import React from 'react'
import './ProfileSection.css'
import { SecondaryButton, SectionHeader, SectionWrapper } from "../../component/index";
import peofile from '../../assets/images/profile.jpg'
import clip from '../../assets/images/clip-01.jpg'
import clip2 from '../../assets/images/clip-02.jpg'
import clip3 from '../../assets/images/clip-02.jpg'
import { Button } from '../../component/index';
import { FaPlay} from "react-icons/fa";


const ProfileSection = () => {
  return (
    <>
      <SectionWrapper>
        <div className="row">
            <div className="col-lg-12">
              <div className="main-profile ">
                <div className="row">
                  <div className="col-lg-4">
                    <img src= {peofile}/>
                  </div>
                  <div className="col-lg-4 align-self-center">
                    <div className="main-info header-text">
                      <span>Offline</span>
                      <h4>Alan Smithee</h4>
                      <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                      <div className="main-border-button">
                        <SecondaryButton>Start Live Stream</SecondaryButton>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 align-self-center">
                    <ul>
                      <li>Games Downloaded <span>3</span></li>
                      <li>Friends Online <span>16</span></li>
                      <li>Live Streams <span>None</span></li>
                      <li>Clips <span>29</span></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="clips">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading-section">
                            <h4>Your Most Popular <span>Clips</span> </h4>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img src={clip2} />
                              <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><FaPlay/></a>
                            </div>
                            <div className="down-content">
                              <h4>Second Clip</h4>
                              <span><i className="fa fa-eye"></i> 183</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img src={clip2} />
                              <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><FaPlay/></a>
                            </div>
                            <div className="down-content">
                              <h4>Second Clip</h4>
                              <span><i className="fa fa-eye"></i> 183</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img src={clip3} />
                              <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><FaPlay/></a>
                            </div>
                            <div className="down-content">
                              <h4>Third Clip</h4>
                              <span><i className="fa fa-eye"></i> 141</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <div className="thumb">
                              <img src={clip} />
                              <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><FaPlay/></a>
                            </div>
                            <div className="down-content">
                              <h4>Fourth Clip</h4>
                              <span><i className="fa fa-eye"></i> 91</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="main-button">
                            <Button>Load More Clips</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </SectionWrapper>
    </>
  )
}

export default ProfileSection