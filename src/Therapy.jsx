import React, { useState } from "react";
import './Therapy.css';
import LandNav from "./Landpage/LandNav.jsx";
import FooterPage from "./Landpage/FooterPage.jsx";
import axios from 'axios';
import { Form, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

 

function OnlineService() {

  const [patientname, setPatientName] = useState('');
  const [referaldoctorname, setReferalDoctorName] = useState('');
  const [bookingdate, setBookingdate] = useState('');
  const [typeofservices, setTypeofservices] = useState('');
  const [hospitalname, setHospitalName] = useState('');
  const [slottime, setSlottime] = useState('');
  const [procedures, setProcedures] = useState('');
  const [amount, setAmount] = useState('1000');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate('');
  
  


  const submit = async () => {


    const Data = {
      patientname,
      referaldoctorname,
      bookingdate,
      typeofservices,
      hospitalname,
      slottime,
      procedures,
      amount,
      email,
      mobilenumber,

    };
    try {

      setError(false);
      const digits = /[0-9]/;
      const emaildigit = /^[0-9]/;
      const startswith = /^[6,7,8,9]/
      const emailend = "@gmail.com"
      const alphabets = /[a-z,A-Z]/;

      if (digits.test(patientname))
        throw new Error("Patient name should not contain numbers")
      if (patientname.length < 5)
        throw new Error("Patient name should have more than 5 chars")
      if (digits.test(referaldoctorname))
        throw new Error("Doctor name sholud not contain numbers")
      if (referaldoctorname.length < 5)
        throw new Error("Doctor name should have more than 5 chars")
      if (bookingdate === "")
        throw new Error("Select a booking date")
      if (typeofservices === "")
        throw new Error("Select a service")
      if (hospitalname === "")
        throw new Error("Select a hospital")
      if (slottime === "")
        throw new Error("Select a slot")
      if (procedures === "")
        throw new Error("Select a procedure")
      if (emaildigit.test(email) || !email.endsWith(emailend))
        throw new Error("Enter a valid email address")
      if (alphabets.test(mobilenumber) || mobilenumber.length !== 10 || !startswith.test(mobilenumber))
        throw new Error("Mobilenumber should not contain alphabets and must contain 10 numbers")

      const response = await axios.post('http://localhost:9082/api/Msdata', Data);
      setPatientName('');
      setReferalDoctorName('');
      setBookingdate('');
      setTypeofservices('');
      setHospitalName('');
      setSlottime('');
      setProcedures('');
      setAmount('');
      setEmail('');
      setMobileNumber('');
      alert("please select ok to make payment to book your slot");
      console.log(response);
      navigate('Payment')
      const pdf = new jsPDF();
      pdf.text("slot booking reciept", 80, 20);
      pdf.text('username :' + patientname, 80, 30);
      pdf.text('lottime:'+slottime,80,40);
      pdf.save('slot reciept.pdf');
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    catch (e) {
      setError(true);
      setErrorMessage(e.message);
    }
  }

  
  function onclick(){
    submit();
    // handleSendEmail();
    
  }
    


  function showForm() {
    var selectedOption = document.getElementById("Paymentmode").value;
    var hiddenForm = document.getElementById("Paymentoptions");
    if (selectedOption === "insurance") {
      hiddenForm.style.display = "block";
    } else {
      hiddenForm.style.display = "none";
    }
  }


  return (
    <>

      <LandNav></LandNav>
      <h1>Book Your Slot</h1>

      <div className="Therapy-slot-container d-flex flex-column">
        <table>

          <tr>
            <td text-primary fw-bold>Patient Name :</td>
            <td><input type='text' className="form-control" id='Patientname' value={patientname} onChange={(e) => setPatientName(e.target.value)} placeholder='enter patientname' required /></td>
          </tr>


          <tr>
            <td text-primary fw-bold>ReferalDoctorname:</td>
            <td><input type='text' className="form-control" id='ReferalDoctorname' value={referaldoctorname} onChange={(e) => setReferalDoctorName(e.target.value)} placeholder='enter doctorname' required /></td>
          </tr>

          <tr>
            <td for='date' >Date :</td>
            <td>            <input type='date' className="form-control" id='Bookingdate' value={bookingdate} onChange={(e) => setBookingdate(e.target.value)} placeholder='enter mobile number' required />
            </td>
          </tr>

          <tr>
            <td >Typeofservices :</td>
            <td><select id='Typeofservices' class="form-select form-select-sm" value={typeofservices} onChange={(e) => setTypeofservices(e.target.value)} aria-label=".form-select-sm example" >
              <option selected>services</option>
              <option>Therapy</option>
              <option>Dialysis</option>
              <option>PhysioTherapy</option>

            </select></td>
          </tr>

          <tr>
            <td>Hospitalname:</td>
            <td><select id='hospitalname' class="form-select form-select-sm" value={hospitalname} onChange={(e) => setHospitalName(e.target.value)} aria-label=".form-select-sm example" >
              <option></option>
              <option>Apollo</option>
              <option>Care</option>
              <option>Yashoda</option>
            </select></td>
          </tr>

          <tr>
            <td>slot :</td>
            <td>  <select id='slot' class="form-select form-select-sm" value={slottime} onChange={(e) => setSlottime(e.target.value)} aria-label=".form-select-sm example" >
              <option></option>
              <option>10:00am </option>
              <option>11:00am</option>
              <option>12:00pm</option>
            </select></td>
          </tr>

          <tr>
            <td>procedures :</td>
            <td><select id='procedures' class="form-select form-select-sm" value={procedures} onChange={(e) => setProcedures(e.target.value)} aria-label=".form-select-sm example" >
              <option ></option>
              <option>side 1</option>
              <option>side 2</option>
              <option>side 3</option>
              <option>side 4</option>
            </select></td>
          </tr>
          <tr>
            <td>Payment mode:</td>
            <td><select id="Paymentmode" onChange={showForm} className="form-select form-select-sm">
              <option></option>
              <option>Cash</option>
              <option>Online</option>
              <option value="insurance">Insurance</option>
            </select></td>
            <div className="Paymentoptions" id="Paymentoptions">
              <p>please select the insurance you are willing to provide</p>
              <select>
                <option>Government insurance</option>
                <option>LIC</option>
                <option>Private Insurances</option>
              </select>
            </div>
          </tr>
          <div className="Paymentoptions" id="Paymentoptions">
            <p>please select the insurance you are willing to provide</p>
            <select>
              <option>Government insurance</option>
              <option>LIC</option>
              <option>Private Insurances</option>
            </select>
          </div>
          <tr>
            <td>Amount :</td>
            <td><input type='text' className="form-control" id='inputMedicalInformation' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter medical information' />
            </td>
          </tr>

          <tr>
            <td>Email :</td>
            <td><input type='email' name='email' className="form-control" id='inputEmail' value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder='enter your email' />
            </td>
          </tr>

          <tr>
            <td>Mobile :</td>
            <td><input type='tel' className="form-control" id='inputMobile' value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='enter mobile number' required />
            </td>
          </tr>
        </table>
        {error && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="button" className="therapy-btn" onClick={onclick}>Book slot</button>
      </div>


      <FooterPage></FooterPage>

    </>
  )
}
export default OnlineService;