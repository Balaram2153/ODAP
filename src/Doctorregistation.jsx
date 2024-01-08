import React, { useState } from "react";
import './Doctorregistration.css'
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Doctorregistration(){
  
  const[Doctorname, setDoctorname] = useState('');
  const[Speciality, setSpeciality] = useState('');
  const[Experience, setExperience] = useState('');
  const[Dateofmedicallicense, setDateofmedicallicense] = useState('');
  const[Countryoflicense, setCountryoflicense] = useState('');
  const[Licensenumber, setLicensenumber] = useState('');
  const[Currentworkplace, setCurrentworkplace] = useState('');
  const[Phonenumber, setPhonenumber] = useState('');
  const[Email, setEmail] = useState('');
  const[Password, setPassword] = useState('');
  const[Confirmpassword, setConfirmpassword] = useState('');
  const[ErrorMessage, setErrorMessage] = useState('');
  const[Error, setError] = useState('');
  const navigate = useNavigate('');
  
  const submit = async()=>{
    
    const data = {
      Doctorname,
      Speciality,
      Experience,
      Dateofmedicallicense,
      Countryoflicense,
      Licensenumber,
      Currentworkplace,
      Phonenumber,
      Email,
      Password,
      Confirmpassword
    };
    try{
      const response =await axios.post("'http://localhost:9082/api/Msdata' ,data")
      setDoctorname('');
      setSpeciality('');
      setExperience('');
      setDateofmedicallicense('');
      setCountryoflicense('');
      setLicensenumber('');
      setCurrentworkplace('');
      setPhonenumber('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');
      alert("Doctor registration successful");
      
    }
    catch(error){
      
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
            <td>Doctor Name :</td>
            <td><input type="text" id="Doctorname" value={Doctorname} onChange={(e)=>setDoctorname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Speciality :</td>
            <td><input type="text" id="Speciality" value={Speciality} onChange={(e)=>setSpeciality(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Experience :</td>
            <td><input type="number" placeholder="In years" id="Experience" value={Experience} onChange={(e)=>setExperience(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Date of obtaining medical license :</td>
            <td><input type="date" id="Dateofmedicallicense" value={Dateofmedicallicense} onChange={(e)=>setDateofmedicallicense(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Country of license issued :</td>
            <td><input type="text" id="Countryoflicense" value={Countryoflicense} onChange={(e)=>setCountryoflicense(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>License number :</td>
            <td><input type="number" id="Licensenumber" value={Licensenumber} onChange={(e)=>setLicensenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Current Workplace :</td>
            <td><input type="text" id="Currentworkplace" value={Currentworkplace} onChange={(e)=>setCurrentworkplace(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Phone number :</td>
            <td><input type="number" id="Phonenumber" value={Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Email address :</td>
            <td><input type="email" id="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Create Password :</td>
            <td><input type="text" id="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Confirm Password :</td>
            <td><input type="text" id="Confirmpassword" value={Confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}></input></td>
          </tr>
        </table>
        <buttun className="DRbtn">submit</buttun>
        </div>
      </div>
    <FooterPage></FooterPage>
    </>
  );
}