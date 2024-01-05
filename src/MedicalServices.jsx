import React from "react";
import "./MedicalServices.css";
import LandNav from "./Landpage/LandNav.jsx";
import FooterPage from "./Landpage/FooterPage.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { Link } from "react-router-dom";



export default function MedicalServices() {
  return (
    <>
    
    <LandNav></LandNav>
    
      <div className="container-fluid d-flex flex-column">
        <div className="row services-section">
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" alt=""  src="therapy.jpg" />
            <div className="card-bottom">
            <p>Book your Therapy session</p>
            <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
            </div>
          </div>
          
          
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" src="dialysis.jpg" alt=""/>
            <div className="card-bottom">
            <p>Book your Therapy session</p>
            <Link to="/Therapy"><button  className="msbtn">Bookslot</button></Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" src="physiotherapy.jpg" alt="" />
            <div className="card-bottom">
            <p>Book your physiotherapy session</p>
            <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" src="bloodtransfusion.jpg" alt=""/>
            <div className="card-bottom">
            <p>Book your bloddtransfusion session</p>
            <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" src="audio.jpg" alt="" />
            <div className="card-bottom">
            <p>Book your Audiology session</p>
            <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
            </div>
          </div>
        </div>
        <div>
        <div className="container-fluid">
        <div className="row doctorcards">
        <div className="col-sm-12 col-md-3 col-xl-3 doctorprofile d-flex flex-row">
            <div>
              <img className="docimage" src="doctor image.jpg" alt=""></img>
              <p>Dr.Agarwal</p>
            </div>
            <div className="docdetails">
              <p>About me</p>
              <p>Experience:10years</p>
              <p>Speciality:Cardilogy</p>
              <p>Qualifications:MBBS,FRCS</p>
              <p>Practice License:123987665</p>
            </div>
            </div>
        <div className="col-12 col-md-3 col-xl-3 doctorprofile d-flex flex-row">
            <div>
              <img className="docimage" src="doctor image.jpg" alt=""></img>
              <p>Dr.Agarwal</p>
            </div>
            <div className="docdetails">
              <p>About me</p>
              <p>Experience:10years</p>
              <p>Speciality:Cardilogy</p>
              <p>Qualifications:MBBS,FRCS</p>
              <p>Practice License:123987665</p>
            </div>
            </div>
            <div className="col-12 col-md-3 col-xl-3 doctorprofile d-flex flex-row">
            <div>
              <img className="docimage" src="doctor image.jpg" alt=""></img>
              <p>Dr.Agarwal</p>
            </div>
            <div className="docdetails">
              <p>About me</p>
              <p>Experience:10years</p>
              <p>Speciality:Cardilogy</p>
              <p>Qualifications:MBBS,FRCS</p>
              <p>Practice License:123987665</p>
            </div>
            </div>
            </div>
            </div>
        </div>
             
      </div>
      <FooterPage></FooterPage>
    </>
  );
}
