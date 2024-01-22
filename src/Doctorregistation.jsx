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
  const[errorMessage, setErrorMessage] = useState('');
  const[error,setError] = useState('');
  
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
      setError(false);
      const digits = /[0-9]/;
      const emaildigit = /^[0-9]/;
      const alphabets = /[a-z]/;
      const specialchars = /[!@#$%^&*()_+|}{:"?><}]/;
      const emailspecialchars = /[!#$%^&*()_+|}{":?><}]/;
      const emailend = /[@gamil.com | @Yahoo.com]/;
      
      if(digits.test(doctorFirstname) || specialchars.test(doctorFirstname))
        throw new Error("Enter valid Firstname");
      if(digits.test(doctorLastname) || digits.test(doctorLastname))
        throw new Error("Enter valid Lastname");
      if(digits.test(speciality) || specialchars.test(speciality))
        throw new Error("Enter valid Speciality");
      if(experience.length >2)
        throw new Error("Enter valid Experience");
      if(digits.test(countryofLicenseobtained) || specialchars.test(countryofLicenseobtained))
        throw new Error("Enter Valid Country");
      if(alphabets.test(licensenumber) || specialchars.test(licensenumber))
        throw new Error("Enter valid license number");
      if(digits.test(currentWorkplace) || specialchars.test(currentWorkplace))
        throw new Error("Enter valid Work place");
      if(alphabets.test(phonenumber) || specialchars.test(phonenumber) || phonenumber.length !== 10)
        throw new Error("Enter valid Phone number")
      if(emaildigit.test(email) || emailspecialchars.test(email) || !email.endsWith(emailend))
        throw new Error("Enter valid Email")
      if(password !== confirmPassword)
        throw new Error("The Password and Confirmpassword should match")
      
      const response =await axios.post('http://localhost:9082/api/DRData' ,data)
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
    catch(e){
      setError(true);
      setErrorMessage(e.message);
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
            <td><input type="text" id="Doctorfirstname" required value={doctorFirstname} onChange={(e)=>setDoctorFirstname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Doctor Last Name :</td>
            <td><input type="text" id="Doctorlastname" required value={doctorLastname} onChange={(e)=>setDoctorLastname(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Speciality :</td>
            <td><input type="text" id="Speciality" required value={speciality} onChange={(e)=>setSpeciality(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Experience :</td>
            <td><input type="number" placeholder="In years" required id="Experience" value={experience} onChange={(e)=>setExperience(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Date of obtaining medical license :</td>
            <td><input type="date" id="DateofLicenseobtained" required value={dateofLicenseobtained} onChange={(e)=>setDateofLicenseobtained(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Country of license issued :</td>
            <td><input type="text" id="CountryofLicenseobtained" required value={countryofLicenseobtained} onChange={(e)=>setCountryofLicenseobtained(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>License number :</td>
            <td><input type="number" id="Licensenumber" required value={licensenumber} onChange={(e)=>setLicensenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Current Workplace :</td>
            <td><input type="text" id="CurrentWorkplace" required value={currentWorkplace} onChange={(e)=>setCurrentWorkplace(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Phone number :</td>
            <td><input type="number" id="Phonenumber" required value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Email address :</td>
            <td><input type="email" id="Email" value={email} required onChange={(e)=>setEmail(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Create Password :</td>
            <td><input type="password" id="Password" value={password} required onChange={(e)=>setPassword(e.target.value)}></input></td>
          </tr>
          <tr>
            <td>Confirm Password :</td>
            <td><input type="password" id="ConfirmPassword" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input></td>
          </tr>
        </table>
        

        <button type='button' className="DRbtn" onClick={submit}>submit</button>
        {error && <p style={{ color: "royalblue" }}>{errorMessage}</p>}

        </div>
      </div>
    <FooterPage></FooterPage>
    </>
  );
}