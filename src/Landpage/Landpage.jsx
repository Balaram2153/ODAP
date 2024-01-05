import React from "react";
import './Landpage.css'
import FooterPage from "./FooterPage";
import LandNav from "./LandNav";
import { Link } from "react-router-dom";

export default function Landpage() {
  return (
    <>
      <LandNav></LandNav>
      <div className="landpage-container">
        <div className="banner-card">
          <img className="bannerimage" src="https://source.unsplash.com/1600x1000/?treatment "></img>
          <div className="banner-text">
            <p>The best medical services</p>
            <p>We have most dedicated team to maintain ypur health.</p>
          </div>         
        </div>
      
        <div className="container-fluid card1">
          <div className="row">
          <div className="col-12 col-md-6 col-xl-3 service-card"><Link to="/"><img className="landimage" src="doctor image.jpg" alt=""></img></Link>
            <p>Consultation services</p>
          </div>

          <div className="col-12 col-md-6 col-xl-3 service-card"><Link to="/MedicalServices"><img className="landimage" src="therapy.jpg" alt=""></img></Link>
            <p>Medical Services</p>
          </div>

          <div className="col-12 col-md-6 col-xl-3 service-card"><img className="landimage" src="ambulance.jpg" alt=""></img>
            <p>Ambulance Services</p>
          </div>
          <div className="col-12 col-md-6 col-xl-3 service-card"><img className="landimage" src="diagnostic.jpg" alt=""></img>
            <p>Diagnostic services</p>
          </div>
        </div>
        </div>
        <div className="container-fluid fee">
        <div className="row">
        <div className="col-12 col-md-6 col-xl-4 Jdoiasznj">

          <h3>Diagnostic Tests</h3>
          <ul className="dskjhfj">
            <li className="landli">Complete Blood Count (CBC) Rs.200/-</li>
            <li className="landli">Blood Chemistry Panel RS.250/-</li>
            <li className="landli">Liver Function Tests (LFTs) Rs.300/-</li>
            <li className="landli">Kidney Function Tests (KFTs) Rs.400/-</li>
            <li className="landli">X-rays Rs.500/-</li>
            <li className="landli">Computed Tomography (CT) Scan Rs.600/-</li>
            <li className="landli">Magnetic Resonance Imaging (MRI) Rs.600/-</li>
            <li className="landli">Ultrasound Rs.800/-</li>
            <li className="landli">Electrocardiogram Rs.500/- (ECG or EKG)</li>
            <li className="landli">Biopsy Rs.1000/-</li>
            <li className="landli">Endoscopy Rs.1500/-</li>
            <li className="landli">Genetic Tests Rs.2000/-</li>
            <li className="landli">Pulmonary Function Tests Rs.1500/-</li>
            <li className="landli">Urinalysis  Rs.1000/-</li>
            <li className="landli">Colonoscopy Rs.1200/- </li>
            <li className="landli">Lumbar Puncture (Spinal Tap) Rs.3000/-</li>
          </ul>
          <button className="action-button">Book Now</button>
        </div>

        <div className="col-12 col-md-6 col-xl-4 Jdoiasznj">

          <h3>Consultation sevices</h3>
          <ul className="dskjhfj">
            <li className="landli">Complete Blood Count (CBC) Rs.200/-</li>
            <li className="landli">Blood Chemistry Panel RS.250/-</li>
            <li className="landli">Liver Function Tests (LFTs) Rs.300/-</li>
            <li className="landli">Kidney Function Tests (KFTs) Rs.400/-</li>
            <li className="landli">X-rays Rs.500/-</li>
            <li className="landli">Computed Tomography (CT) Scan Rs.600/-</li>
            <li className="landli">Magnetic Resonance Imaging (MRI) Rs.600/-</li>
            <li className="landli">Ultrasound Rs.800/-</li>
            <li className="landli">Electrocardiogram Rs.500/- (ECG or EKG)</li>
            <li className="landli">Biopsy Rs.1000/-</li>
            <li className="landli">Endoscopy Rs.1500/-</li>
            <li className="landli">Genetic Tests Rs.2000/-</li>
            <li className="landli">Pulmonary Function Tests Rs.1500/-</li>
            <li className="landli">Urinalysis  Rs.1000/-</li>
            <li className="landli">Colonoscopy Rs.1200/- </li>
            <li className="landli">Lumbar Puncture (Spinal Tap) Rs.3000/-</li>
          </ul>
          <button className="action-button">Book Now</button>
        </div>

        <div className="col-12 col-md-6 col-xl-4 Jdoiasznj">

          <h3>Medical sercives</h3>
          <ul className="dskjhfj">
            <li className="landli">Complete Blood Count (CBC) Rs.200/-</li>
            <li className="landli">Blood Chemistry Panel RS.250/-</li>
            <li className="landli">Liver Function Tests (LFTs) Rs.300/-</li>
            <li className="landli">Kidney Function Tests (KFTs) Rs.400/-</li>
            <li className="landli">X-rays Rs.500/-</li>
            <li className="landli">Computed Tomography (CT) Scan Rs.600/-</li>
            <li className="landli">Magnetic Resonance Imaging (MRI) Rs.600/-</li>
            <li className="landli">Ultrasound Rs.800/-</li>
            <li className="landli">Electrocardiogram Rs.500/- (ECG or EKG)</li>
            <li className="landli">Biopsy Rs.1000/-</li>
            <li className="landli">Endoscopy Rs.1500/-</li>
            <li className="landli">Genetic Tests Rs.2000/-</li>
            <li className="landli">Pulmonary Function Tests Rs.1500/-</li>
            <li className="landli">Urinalysis  Rs.1000/-</li>
            <li className="landli">Colonoscopy Rs.1200/- </li>
            <li className="landli">Lumbar Puncture (Spinal Tap) Rs.3000/-</li>
          </ul>
          <button className="action-button">Book Now</button>
        </div>
        </div>
        </div>
      </div>
      <FooterPage></FooterPage>
    </>
  );
}