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
        <div className="row MDfirstcard">
          <div className="MDfirstcard-cont col-xl-6">
            <h1>Online Medical Services</h1>
            <p>book your slot today</p>
            <button className="Mdfirstcardbtn">Book Slot</button>
          </div>
          <div className="MDfirstcard-img col-xl-4"><img src="animateddoctor.jpg"></img></div>
        </div>
        <div className="row services-section">
          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" alt="" src="therapy.jpg" />
            <div className="card-bottom">
              <p>Book your Therapy session</p>
              <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
            </div>
          </div>


          <div className="col-sm-12 col-md-2 col-xl-2 card">
            <img className="therapyimage" src="dialysis.jpg" alt="" />
            <div className="card-bottom">
              <p>Book your Therapy session</p>
              <Link to="/Therapy"><button className="msbtn">Bookslot</button></Link>
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
            <img className="therapyimage" src="bloodtransfusion.jpg" alt="" />
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
              <h1 className="ourdocs">Our Doctors</h1>
              <div className="col-sm-12 col-md-3 col-xl-3 doctorprofile d-flex flex-row">
                <div>
                  <img className="docimage" src="doctor image.jpg" alt=""></img>
                  <p>Dr.Agarwal</p>
                </div>
                <div className="docdetails">
                  <p>About me</p>
                  <p>Experience:10years</p>
                  <p>Speciality:Therapy</p>
                  <p>Qualifications:MBBS,FRCS</p>
                  <p>Practice License:123987665</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-xl-3 doctorprofile d-flex flex-row">
                <div>
                  <img className="docimage" src="doctor image.jpg" alt=""></img>
                  <p>Dr.Reddy</p>
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
                  <p>Dr.rakash</p>
                </div>
                <div className="docdetails">
                  <p>About me</p>
                  <p>Experience:10years</p>
                  <p>Speciality:Respiratory</p>
                  <p>Qualifications:MBBS,FRCS</p>
                  <p>Practice License:123987665</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        
        <div className="d-flex flex-row">
          <div className="articlecontent">
            <h1>Read top articles from health experts</h1>
            <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
          </div>
          <div className="d-flex flex-row">
            <div className="articleacard">
            <a href="https://www.practo.com/healthfeed/12-coronavirus-myths-and-facts-that-you-should-be-aware-of-40556/post">

              <img className="articleimg" src="coronovirus.jpg"></img>
            </a>
              <p>CORONOVIRUS</p>
              <h3>Know the facts about the corono virus</h3>
            </div>
            
            <div className="articlecard">
            <a href="https://www.practo.com/healthfeed/eating-right-to-build-immunity-against-cold-and-viral-infections-40908/post">

              <img className="articleimg" src="vitamins.jpg"></img>
              </a>
              <p>NUTRIRION</p>
              <h3>Boost your immunity</h3>
            </div>
          
          </div>
        </div>
        
        <hr></hr>

      </div>
      <FooterPage></FooterPage>
    </>
  );
}
