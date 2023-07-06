import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'
import logo from  '../../assets/images/logo.png'
import img from '../../assets/images/profile-header.jpg'
import NavItem,{NavItemDropDown} from '../../component/NavItem/NavItem'
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <a href="/" className="navbar-brand">
                <img src={logo} alt="" />
            </a>
            <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword"  />
                        <span><FaSistrix/></span>
                      </form>
                    </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="dropdown" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link to="/" className="nav-link" style={{"color":"var(--color-gray)"}}>Home</Link>
                    </NavItem> 
                    <NavItem>
                    <a href="/browse" className="nav-link" style={{"color":"var(--color-gray)"}}>Browse</a>
                    </NavItem> 
                    <NavItem>
                        <a href="/details" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"var(--color-gray)"}}>Details</a>
                        
                    </NavItem>
                        
                    
                    <NavItem><a href="/streams" className="nav-link" style={{"color":"var(--color-gray)"}}>Streams</a></NavItem> 
                    <NavItem><Link to="/profile" className="nav-link profile " style={{"color":"var(--color-gray)"}}>Profile <img src={img} alt=""/></Link> </NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header