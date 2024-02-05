import React from "react";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUserMd } from '@fortawesome/free-solid-svg-icons';
import './Doctorlandpage.css';


export default function () {
    return (
        <>
            <LandNav></LandNav>
            <div>
                <div className="doctorlandpage-card1 row">
                    <div className="doctorlandpage-content1 col-6">
                        <h1>Patients are looking for doctors like you </h1>
                        <p>Millions of patients are looking for the right doctor. Start your digital journey with our web application</p>
                        <p>Register Your self today and start consulting</p>
                        <button className="doctorlandpage-card1-btn"><Link to={'/Doctorregistration'}>Register Yourself</Link></button>
                    </div>
                    <div className="doctorlandpage-img1 col-6">
                        <img src="doctorlandimage1.png"></img>
                    </div>
                </div>
                <div className="doctorlandpage-card2 row">
                    <div className="doctorlandpage-img2 col-6">
                        <img src="doctorlandimage2.png"></img>
                    </div>
                    <div className="doctorlandpage-content2 col-6">
                        <p>Keep track of patients.</p>
                        <p>Know whom you consulted</p>
                        <p>Be up to date</p>
                    </div>
                </div>
                <div className="doctorlandpage-card3">
                    <h2>Create your free profile in easy and simple steps</h2>
                    <div className="row">
                    <div className="col-4">
                        <img src="doctorlandimage5.PNG"></img>
                        <p>Enter your name, email id, mobile number and clinic or establishment name.</p>
                    </div>
                    <div className="col-4">
                        <img src="doctorlandimage4.PNG"></img>
                        <p>Fill details about you and your practice including your medical registration, fees, timings and more.</p>
                    </div>
                    <div className="col-4">
                        <img src="doctorlandimage3.PNG"></img>
                        <p>Complete our a simple verification process online, and go live!</p>
                    </div>
                    <button className="doctorlandpage-card3-btn2">Register Yourself</button>
                    <p style={{fontWeight:"bold"}}>Note: Verifying your medical registration and qualification ensures that you get listed as a genuine medical practitioner.</p>
                    </div>
                </div>
            </div>
            <FooterPage></FooterPage>
        </>
    );
}