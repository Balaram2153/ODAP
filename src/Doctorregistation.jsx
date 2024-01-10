import React, { useState } from "react";
import './Doctorregistration.css'
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import axios from "axios";

export default function Doctorregistration(){
  
  const[doctorFirstname, setDoctorFirstname] = useState('');
  const[doctorLastname, setDoctorLastname] = useState('');
  const[speciality, setSpeciality] = useState('');
  const[experience, setExperience] = useState('');
  const[dateofLicenseobtained, setDateofLicenseobtained] = useState('');
  const[countryofLicenseobtained, setCountryofLicenseobtained] = useState('');
  const[licensenumber, setLicensenumber] = useState('');
  const[currentWorkplace, setCurrentWorkplace] = useState('');
  const[phonenumber, setPhonenumber] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  
  const submit = async()=>{
    
    const data = {
      doctorFirstname,
      doctorLastname,
      speciality,
      experience, 
      dateofLicenseobtained,
      countryofLicenseobtained,
      licensenumber,
      currentWorkplace,
      phonenumber,
      email,
      password,
      confirmPassword,
    };
    try{
      const response = axios.post('http://localhost:9082/api/DRData' ,data)
      setDoctorFirstname('');
      setDoctorLastname('');
      setSpeciality('');
      setExperience('');
      setDateofLicenseobtained('');
      setCountryofLicenseobtained('');
      setLicensenumber('');
      setCurrentWorkplace('');
      setPhonenumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      alert("Doctor registration successful");
      console.log(response);
      
    }
    catch(error){
      console.log("error occured",error);
    }
    
  }
  
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
            <td>Doctor First Name :</td>
            <td><input type="text" id="Doctorfirstname" value={doctorFirstname} onChange={(e)=>setDoctorFirstname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Doctor Last Name :</td>
            <td><input type="text" id="Doctorlastname" value={doctorLastname} onChange={(e)=>setDoctorLastname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Speciality :</td>
            <td><input type="text" id="Speciality" value={speciality} onChange={(e)=>setSpeciality(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Experience :</td>
            <td><input type="number" placeholder="In years" id="Experience" value={experience} onChange={(e)=>setExperience(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Date of obtaining medical license :</td>
            <td><input type="date" id="DateofLicenseobtained" value={dateofLicenseobtained} onChange={(e)=>setDateofLicenseobtained(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Country of license issued :</td>
            <td><input type="text" id="CountryofLicenseobtained" value={countryofLicenseobtained} onChange={(e)=>setCountryofLicenseobtained(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>License number :</td>
            <td><input type="number" id="Licensenumber" value={licensenumber} onChange={(e)=>setLicensenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Current Workplace :</td>
            <td><input type="text" id="CurrentWorkplace" value={currentWorkplace} onChange={(e)=>setCurrentWorkplace(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Phone number :</td>
            <td><input type="number" id="Phonenumber" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Email address :</td>
            <td><input type="email" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Create Password :</td>
            <td><input type="text" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Confirm Password :</td>
            <td><input type="text" id="ConfirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input></td>
          </tr>
        </table>
        <buttun type='button' className="DRbtn" onClick={submit}>submit</buttun>
        </div>
      </div>
    <FooterPage></FooterPage>
    </>
  );
}