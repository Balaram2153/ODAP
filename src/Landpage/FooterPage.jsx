import React from 'react';
import './FooterPage.css';
import { Link } from 'react-router-dom';

function FooterPage() {
    return (

        <div className='container-fluid'>
            <div className="row footer-container">
                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5 ">
                    <h5 className="text">About</h5>
                    <ul className="list-unstyled mb-0">
                        <li><a className="text-dark">Know Us</a></li>
                        <li><a className="text-dark">Hospitals & Directions </a></li>
                        <li><a className="text-dark"> Specialities & Treatment</a></li>
                        <li><a className="text-dark">International Patient Services  </a></li>
                        <li><a className="text-dark">News & Media</a></li>
                        <li><a className="text-dark">About Us</a></li>
                        <li><a className="text-dark">Careers</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5">
                    <h5 className="text ">Actions</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark">Actions</a></li>
                        <li><a className="text-dark">Contact Us</a></li>
                        <li><a className="text-dark">Book an Appointment </a></li>
                        <li><a className="text-dark">Pay Online </a></li>
                        <li><a className="text-dark">Feedback </a></li>
                        <li><a className="text-dark">Lab Reports </a></li>
                        <li><a className="text-dark">Video Consultation </a></li>
                        <li><a className="text-dark">COVID </a></li>
                        <li><a className="text-dark">CARE Packages </a></li>
                        <li><a className="text-dark">Stroke Risk Assessment  </a></li>
                    </ul>

                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5">
                    <h5 className="text">Blogs </h5>
                    <ul className="list-unstyled mb-0">
                        <li><a className="text-dark"> Online Services</a></li>
                        <li><a className="text-dark">Diagnostics </a></li>
                        <li><a className="text-dark">Mediacal Services</a></li>
                        <li><a className="text-dark">Doctor Avialbility</a></li>
                        <li><a className="text-dark">Reschedule</a></li>
                        <li><a className="text-dark">Ambulance Services</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5">
                    <h5 className="text ">Centres of Excellence </h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark"> Cardiac Sciences </a></li>
                        <li><a className="text-dark">Gastro Sciences </a></li>
                        <li><a className="text-dark">Nephrology</a></li>
                        <li><a className="text-dark">Oncology</a></li>
                        <li><a className="text-dark">Orthopaedics </a></li>
                        <li><a className="text-dark">Paediatrics</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5">
                    <h5 className="text ">Centres of Excellence</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark">Pulmonology</a></li>
                        <li><a className="text-dark">Robot-Assisted Surgery</a></li>
                        <li><a className="text-dark">Transplants </a></li>
                        <li><a className="text-dark"> Urology </a></li>
                        <li><a className="text-dark">Vascular&Endovascular </a></li>
                        <li><a className="text-dark"> Radiology Woman & Child Institute </a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-6 col-lg-4 col-xl-2 pl-5">
                    <h5 className="text ">Media Room</h5>
                    <ul className="list-unstyled">
                        <li><a className="text-dark"> News & Media News</a></li>
                        <li><a className="text-dark">Events</a></li>
                        <li><a className="text-dark">Interviews</a></li>
                        <li><a className="text-dark">Watch OurVideos</a></li>
                        <li><a className="text-dark">Media Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid'>
            <div className="row advtOdap" >
               <div className='col-12 col-md-6 col-xl-8'>
                        <p className='right'>© 2024 Company, Inc. All rights reserved.</p>
                        <p className='right'>https://anarghyacommunications.com</p>
                        <p className='right'>+91-040-67932204</p>
                        <p><Link to='/Doctorregistration'>Doctor Login</Link></p>
                </div>
                <div className='col-12 col-md-6 col-xl-4 footer-images'>                                   
                        <td><a href=""><img className="imgfc" src="https://www.aptemples.ap.gov.in/static/media/MDI%20-%20facebook.80d17278.svg" width="30px" height="30px" /></a></td>
                        <td><a href=""><img className="imgtwt" src="https://www.aptemples.ap.gov.in/static/media/MDI%20-%20twitter.655d1bd7.svg" width="30px" height="30px" /></a></td>
                        <td><a href=""><img className="imgyt" src="https://www.aptemples.ap.gov.in/static/media/MDI%20-%20youtube.b279f9e6.svg" width="30px" height="30px" /></a></td>
                        <td><a href=""><img className="imgi" src="https://www.aptemples.ap.gov.in/static/media/MDI%20-%20instagram.df970887.svg" width="30px" height="30px" /></a></td>
                </div>
                </div>
            </div>
        </div>





    );
}
export default FooterPage;