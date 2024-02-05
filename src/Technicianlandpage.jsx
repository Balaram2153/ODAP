import React from "react";
import { Link } from "react-router-dom";
import "./Technicianlandpage.css";
import FooterPage from "./Landpage/FooterPage";


export default function Technicianlandpage() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">signup</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">signin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="d-flex flex-row technician-card1">
                    <div className="col-xl-6 col-md-6 col-sm-12">              
                        <img className="technicianlandimg1" src="technicianlandimg1.webp"></img>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 technician-card1-content">
                        <p>Please register here and start your technician journey</p>
                        <Link to={"/Technicianafterlogin"}><button>Register</button></Link>
                    </div>
                    </div>
                </div>
                <div className="technician-card2">
                    <h1>Our Features</h1>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="technician-card2-cont">
                            <p>You can revisit your patient history at anytime.</p>
                        </div>
                        <div className="technician-card2-cont">
                            <p>You can directly send the medical reports</p> <p>to the customer through email</p>
                            <p>just by clicking a button.</p>
                        </div>
                        <div className="technician-card2-cont">
                            <p>Safe and secure procedure to visit the</p> <p>patients and collect the samples </p>
                            <p>of the customers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPage></FooterPage>
        </>
    );
}