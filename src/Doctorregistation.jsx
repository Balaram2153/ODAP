import React from "react";
import './Doctorregistration.css'
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";

export default function Doctorregistration(){
  
  
  return(
    <>
    <LandNav></LandNav>
      <div className="DRcontainer d-flex flex-row">
        <div className="DRcard">
          <img className="DRimage" src="doctorregister.jpg"></img>
          <p>Please fill in the details to register yourself.</p>
        </div>
        <div>
        <table className="Doctable">
          <tr>
            <td>Doctor Name :</td>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <td>Speciality :</td>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <td>Experience :</td>
            <td><input type="number" placeholder="In years"></input></td>
          </tr>
          <tr>
            <td>Date of obtaining medical license :</td>
            <td><input type="date"></input></td>
          </tr>
          <tr>
            <td>Country of license issued :</td>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <td>License number :</td>
            <td><input type="number"></input></td>
          </tr>
          <tr>
            <td>Current Workplace :</td>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <td>Phone number :</td>
            <td><input type="number"></input></td>
          </tr>
          <tr>
            <td>Email address :</td>
            <td><input type="email"></input></td>
          </tr>
          <tr>
            <td>Create Password :</td>
            <td><input type="text"></input></td>
          </tr>
          <tr>
            <td>Confirm Password :</td>
            <td><input type="text"></input></td>
          </tr>
        </table>
        <buttun className="DRbtn">submit</buttun>
        </div>
      </div>
    <FooterPage></FooterPage>
    </>
  );
}