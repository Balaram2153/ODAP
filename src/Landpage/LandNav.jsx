import React from "react";
import './Landnav.css';
import Doctorregistraion from "../Doctorregistation";
import { Link } from "react-router-dom";



function LandNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to='/Landpage'>
                <button className="nav-link">
                  Home
                </button>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <Link to="/Login">Login</Link>
            </button>
          </form>
        </div>
      </nav>
    </>
  )
}
export default LandNav;