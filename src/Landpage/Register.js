
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FooterPage from './FooterPage';
import LandNav from './LandNav';

function Register(){
    const [patientName, setPatientName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [medicalInformation, setMedicalInformation] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [chronicDisease, setChronicDisease] = useState('');
    const [familyDoctorName, setFamilyDoctorName] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [gender, setGender] = useState('');
    const [medicalInsurances, setMedicalInsurances] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   // const [medicalReports, setMedicalReports] = useState(null);


    const submit = async () => {
        
        var checkbox = document.getElementById('gridCheck');
       
        


        if(patientName === '' ){
            alert("patient name is required field");
            document.getElementById('inputPatientName').style.borderColor= 'red';
        }
        else if (mobileNumber === ''){
            alert("mobile number is required field");
            document.getElementById('inputMobile').style.borderColor= 'red'; 
        }
        else if (email === ''){
            alert("email id is required field ");
            document.getElementById('inputEmail').style.borderColor = 'red';
        }
        else if (medicalInformation === '') {
            alert('medical information is a required field');
            document.getElementById('inputMedicalInformation').style.borderColor = 'red';
          } else if (bloodGroup === '') {
            alert('Blood group is a required field');
            document.getElementById('inputBloodGroup').style.borderColor = 'red';
          } else if (chronicDisease === '') {
            alert('diseases is a required field');
            document.getElementById('inputchronicdiseases').style.borderColor = 'red';
          } else if (familyDoctorName === '') {
            alert('family doctor name is a required field');
            document.getElementById('inputfamilydoctorname').style.borderColor = 'red';
          }  else if (emergencyContact === '') {
            alert('emergency contact number is a required field');
            document.getElementById('inputemergencycontactnumber').style.borderColor = 'red';
          } else if (addressLine1 === '') {
            alert('line 1 is a required field');
            document.getElementById('inputaddressline1').style.borderColor = 'red';
          } else if (addressLine2 === '') {
            alert('line 2 is a required field');
            document.getElementById('inputaddressline2').style.borderColor = 'red';
          } else if (city === '') {
            alert('city is a required field');
            document.getElementById('inputcity').style.borderColor = 'red';
          }  else if (state === '') {
            alert('state is a required field');
            document.getElementById('inputstate').style.borderColor = 'red';
          }else if (pincode === '' || pincode.length !== 6) {
            alert('Enter a valid 6-digit Pincode');
            document.getElementById('inputpincode').style.borderColor = 'red';
          }else if (gender === '') {
            alert('gender is a required field');
            document.getElementById('inputgender').style.borderColor = 'red';
          } else if (medicalInsurances === '') {
            alert('medical insurance is a required field');
            document.getElementById('inputmedicalinsurance').style.borderColor = 'red';
          } else if (aadhar === '' || aadhar.length !==12) {
            alert('Enter a valid 12-digit aadhar card number');
            document.getElementById('inputaadhar').style.borderColor = 'red';
          }else if (password === '') {
            alert('password is a required field');
            document.getElementById('inputpassword').style.borderColor = 'red';
          } else if (confirmPassword === '') {
            alert('confirm password is a required field');
            document.getElementById('inputrepassword').style.borderColor = 'red';
          // } else if (medicalReports === '') {
          //   alert('medical reports is a required field');
          //   document.getElementById('inputfile').style.borderColor = 'red';
          }  
          else if (!checkbox.checked) {
            alert('Please check the checkbox');
            document.getElementById('gridCheck').style.borderColor = 'red';
          } 
          else if (!isValidEmail(email)) {
            alert('Enter a valid email address');
            document.getElementById('inputEmail').style.borderColor = 'red';
          } else if (!isValidPassword(password)) {
            alert(
              'Password must be 8 to 16 characters long and include at least one letter, one number, and one special character.'
            );
            document.getElementById('inputpassword').style.borderColor = 'red';
          }else if (!isValidRePassword(confirmPassword)) {
            alert(
              'Password must be 8 to 16 characters long and include at least one letter, one number, and one special character.'
            );
            document.getElementById('inputrepassword').style.borderColor = 'red';
          }else if(password!==confirmPassword){
            alert('password doesnot match');
          }else if(!inputCity(city)){
            alert('must enter city name with only alphabets');
            document.getElementById('').style.borderColor='red';
          }else if(!inputState(state)){
            alert('must enter state name with only alphabets');
          }else if(!inputPatientName(patientName)){
            alert('must enter name with only alphabets');
          }else if(!inputMedicalInformation(medicalInformation)){
            alert('must enter information with only alphabets');
          }else if(!inputmobileNumber(mobileNumber)){
            alert('mobile number must contain only 10 numbers');
          }else if(!inputemergencyNumber(emergencyContact)){
            alert('emergency contact number must contain only 10 numbers');
          }


        else{
            const data = {
                patientName,
                mobileNumber,
                email,
                medicalInformation,
                bloodGroup,
                chronicDisease,
                familyDoctorName,
                emergencyContact,
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                gender,
                medicalInsurances,
                aadhar,
                password,
                confirmPassword,
                // medicalReports,
            };
        


    try {
      const response = await axios.post('http://localhost:8085/api/register' ,data);
        setPatientName('');
        setMobileNumber('');
        setEmail('');
        setMedicalInformation('');
        setBloodGroup('');
        setChronicDisease('');
        setFamilyDoctorName('');
        setEmergencyContact('');
        setAddressLine1('');
        setAddressLine2('');
        setCity('');
        setState('');
        setPincode('');
        setGender('');
        setMedicalInsurances('');
        setAadhar('');
        setPassword('');
        setConfirmPassword('');
        //setMedicalReports('');
        checkbox.checked = false;
        alert(" Registration successful... " );

      }catch(error){
        console.error("error occured:", error);
      }
    }
    };

    const isValidEmail = (email) =>{
        const validDomains = ['gmail.com','gmail.in','gmail.org','hotmail.com','hotmail.in','hotmail.org','yahoo.com','yahoo.in','yahoo.org'];
        const emailRegex = new RegExp(`^[A-Za-z0-9._%+-]+@(${validDomains.join('|')})$`);
        return emailRegex.test(email);
    }
    const isValidPassword = (password) =>{
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return passwordRegex.test(password);
    }
    const isValidRePassword = (confirmPassword) =>{
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return passwordRegex.test(confirmPassword);
    }
  
  
    const inputState = (state) => {

        const stateRegex= /^[a-zA-Z]+$/;
        return stateRegex.test(state);          
      }
      
    
      const inputMedicalInformation = (medicalInformation) => {
        const medicalRegex=/^[a-zA-Z]+$/;
          return medicalRegex.test(medicalInformation);
      }
    
      const inputmobileNumber = (mobileNumber)=>
      {
        const mobileRegex=/^\d{10}$/;
        return mobileRegex.test(mobileNumber);
      }

      const inputemergencyNumber = (emergencyContact)=>
      {
        const numberRegex=/^\d{10}$/;
        return numberRegex.test(emergencyContact);
      }

       
    
    const inputCity = (city) => {
        const cityRegex=/^[a-zA-Z]+$/;
        return cityRegex.test(city);
      }
    
      const inputPatientName = (patientName) => {
       const nameRegex=/^[a-zA-Z]+$/;
       return nameRegex.test(patientName);
      }
    
    

   return(
        <>
        <LandNav></LandNav>
    <div className="container-fluid bg-body-tertiary p-5">
        <div className="row">
        <div className="col-12">
          <div className="container pt-4">
            <form className="row g-3">    
          <div className='col-md-6'>
            <label for='patientName'  text-primary fw-bold>Patient Name :</label> 
            <input type='text' className="form-control" id='inputPatientName' value={patientName} onChange={(e)=>setPatientName(e.target.value)} placeholder='enter patientname' required/>
          </div>
          <div className='col-md-6'>
            <label for='mobileNumber' >Mobile :</label>
            <input type='tel' className="form-control" id='inputMobile'value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} placeholder='enter mobile number' required/>
          </div>
          <div className='col-md-6'>
            <span id='check-email'></span>
            <label for='email' >Email :</label>
            <input type='email' name='email' className="form-control" id='inputEmail' value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder='enter your email'/>
          </div>
          <div className='col-md-6'>
            <label for='medicalInformation' >Medical Information :</label>
            <input type='text' className="form-control" id='inputMedicalInformation' value={medicalInformation} onChange={(e)=>setMedicalInformation(e.target.value)} placeholder='enter medical information'/>
          </div>
          <div className='col-md-6'>
            <label for='bloodGroup' >Blood Group :</label>
            <select id='inputBloodGroup'  class="form-select form-select-sm" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)}  aria-label=".form-select-sm example">
                <option selected>select bloodGroup</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
            </select>
          </div>
          <div className='col-md-6'>
            <label for='chronicDisease' >Chronic diseases :</label>
            <select id='inputchronicdiseases' class="form-select form-select-sm" value={chronicDisease} onChange={(e)=>setChronicDisease(e.target.value)} aria-label=".form-select-sm example" >
                <option selected>select diseases</option>
                <option>Heart Disease</option>
                <option>Diabetes</option>
                <option>CKD</option>
                <option>Neurological diseases</option>               
            </select>
          </div>
          <div className='col-md-6'>
            <label for='familyDoctorName' >Family Doctor Name :</label>
            <input type='text' id='inputfamilydoctorname' className="form-control" value={familyDoctorName} onChange={(e)=>setFamilyDoctorName(e.target.value)} placeholder='enter family doctor name'/>
          </div>
          <div className='col-md-6'>
            <label for='emergencyContact' >Emergency Contact Number :</label>
            <input type='tel' id='inputemergencycontactnumber' className="form-control" value={emergencyContact} onChange={(e)=>setEmergencyContact(e.target.value)} placeholder='enter emergency contact number' required/>
          </div>
          <div className='col-md-6'>
            <label for='addressLine1' >Address Line1 :</label>
            <input type='text' id='inputaddressline1' className="form-control" value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)} placeholder='enter Line 1'/>
          </div>
          <div className='col-md-6'>
            <label for='addressLine2' >Address Line2 :</label>
            <input type='text' id='inputaddressline2' className="form-control" value={addressLine2} onChange={(e)=>setAddressLine2(e.target.value)} placeholder='enter Line 2'/>
          </div>
          <div className='col-md-6'>
            <label for='city' >City :</label>
            <input type='text' id='inputcity' className="form-control" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='enter city'/>
          </div>
          <div className='col-md-6'>
            <label for='state' >State :</label>
            <input type='text' id='inputstate' className="form-control" value={state} onChange={(e)=>setState(e.target.value)} placeholder='enter state'/>
          </div>
          <div className='col-md-6'>
            <label for='pincode' >Pincode :</label>
            <input type='number' id='inputpincode' className="form-control" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder='enter pincode'/>
          </div>
          <div className='col-md-6'>
            <label for='gender' >Gender :</label>
            <select id='inputgender' class="form-select form-select-sm" value={gender} onChange={(e)=>setGender(e.target.value)} aria-label=".form-select-sm example" >
                <option selected>select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>       
            </select>
          </div>
          <div className='col-md-6'>
            <label for='medicalInsurances' >Medical Insurance :</label>
            <select id='inputmedicalinsurance' class="form-select form-select-sm" value={medicalInsurances} onChange={(e)=>setMedicalInsurances(e.target.value)} aria-label=".form-select-sm example" >
                <option selected>select Medical Insurances</option>
                <option>Govt</option>
                <option>Private</option>                             
            </select>
          </div>
          <div className='col-md-6'>
            <label for='aadhar' >Aadhar Card Number :</label>
            <input type='number' id='inputaadhar' className="form-control" value={aadhar} onChange={(e)=>setAadhar(e.target.value)} placeholder='enter aadhar card number'/>
          </div>
          <div className='col-md-6'>
            <label for='password' >Password :</label>
            <input type='password' id='inputpassword' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'/>
          </div>
          <div className='col-md-6'>
            <label for='repassword' >Re-Password :</label>
            <input type='password' id='inputrepassword' className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='re-enter password'/>
          </div>
        
          {/* <div class="col-md-6">
            <label for="formFile" class="form-label">Medical Reports :</label>
            <input class="form-control" type='file' className="form-control" id='inputfile' value={medicalReports} onChange={(e)=>setMedicalReports(e.target.value)} placeholder='enter aadhar card number'/>

          </div> */}

          <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label text-primary fw-bold" for="gridCheck">
                Check me out
                </label>
            </div>
          </div>
        
          <div className='text-center'>
            <button type="button" className="btn btn-primary" onClick={submit}>Sign Up</button>
          </div> 
          <div className="p-3">
            <p>have an Account? <Link to='/login'>Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<FooterPage></FooterPage>

</>
    );
}



export default Register;

