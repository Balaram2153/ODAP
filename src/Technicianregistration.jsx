import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Technicianregistration.css'
import axios from "axios";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";

export default function Technicianregistration() {

    const [technicianname, setTechnicianname] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [technicianstudy, setTechnicianstudy] = useState('');
    const [technicianexperinces, setTechnicianexperinces] = useState('');
    const [diagnosticname, setDiagnosticname] = useState('');
    const [diagnosticaddress, setDiagnosticaddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate('');

    const submit = async () => {
        const data = {
            technicianname,
            email,
            mobilenumber,
            technicianstudy,
            technicianexperinces,
            diagnosticname,
            diagnosticaddress,
            password,
            confirmpassword,
        };
        try {
            setError(false);
            const digits = /[0-9]/;
            const emaildigit = /^[0-9]/;
            const alphabets = /[a-z]/;
            const passwordtest = /[0123456789@#qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFAZXCVBNM]/;
            const specialchars = /[!@#$%^&*()_+|}{:"?><}]/;
            const emailspecialchars = /[!#$%^&*()_+|}{":?><}]/;
            const emailend = /[@gamil.com | @Yahoo.com]/;
            
            if(digits.test(technicianname) || specialchars.test(technicianname))
            throw new Error("Enter valid name.");
            if(emaildigit.test(email) || emailspecialchars.test(email))
            throw new Error("Enter valid email address.");
            if(alphabets.test(mobilenumber) || specialchars.test(mobilenumber) || mobilenumber.length !==10)
            throw new Error("Enter valid mobile number.");
            if(digits.test(technicianstudy) || specialchars.test(technicianstudy))
            throw new Error("Enter the proper qualification details.");
            if(specialchars.test(technicianexperinces) || alphabets.test(technicianexperinces) || technicianexperinces.length >2 || technicianexperinces<0)
            throw new Error("Enter valid experience details.");
            if(digits.test(diagnosticname) || specialchars.test(diagnosticname))
            throw new Error("Enter valid diagnostic name.");
            if(diagnosticaddress.length ===0)
            throw new Error("Please enter the diagnostic address")
            if(password.length<8)
            throw new Error("password must contain at least 8 characters.")
            if(password !== confirmpassword)
            throw new Error("password and confirm password must match.")
            



            const response = await axios.post('http://localhost:9092/Registration' ,data)

            setTechnicianname('');
            setEmail('');
            setMobilenumber('');
            setTechnicianstudy('');
            setTechnicianexperinces('');
            setDiagnosticname('');
            setDiagnosticaddress('');
            setPassword('');
            setConfirmpassword('');
            alert("Technician registration successful");
            console.log(response);
            navigate('doctorlogin')

        }
        catch (e) {
            setError(true);
            setErrorMessage(e.message);

        }

    }

    return (
        <>
            <LandNav></LandNav>
            <h1>Technician Registration</h1>
            <div className="trcontainer">
                {/* <div className="col-xl-6 col-md-6 col-sm-12 trimage1">
                    <img src="https://source.unsplash.com/1600x1000/?diagnostic"></img>
                </div> */}
                <div className=" trtablecontainer">
                    <table>
                        <tr>
                            <td>Technician Name :</td>
                            <td><input type="text" value={technicianname} onChange={(e) => setTechnicianname(e.target.value)} placeholder="technician full name" required></input></td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required></input></td>
                        </tr>
                        <tr>
                            <td>Mobile number :</td>
                            <td><input type="number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} placeholder="ph number" required></input></td>
                        </tr>
                        <tr>
                            <td>Qualification :</td>
                            <td><input type="text" value={technicianstudy} onChange={(e) => setTechnicianstudy(e.target.value)} placeholder="qualification" required></input></td>
                        </tr>
                        <tr>
                            <td>Experience :</td>                            
                            <td><input type="number" value={technicianexperinces} onChange={(e) => setTechnicianexperinces(e.target.value)} placeholder="years of experience as technician" required></input></td>
                        </tr>
                        <tr>
                            <td>Diagnostic Name</td>
                            <td><input type="text" value={diagnosticname} onChange={(e) => setDiagnosticname(e.target.value)} placeholder="diagnostic name" required></input></td>
                        </tr>
                        <tr>
                            <td>Diagnostic Address</td>
                            <td><input type="text" value={diagnosticaddress} onChange={(e) => setDiagnosticaddress(e.target.value)} placeholder="diagnostic address" required></input></td>
                        </tr>
                        <tr>
                            <td>Password :</td>
                            <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="create a password"></input></td>
                        </tr>
                        <tr>
                            <td>Confirm Password :</td>
                            <td><input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="should match the above password" required></input></td>
                        </tr>
                    </table>

                    <button type='button' className="trbtn" onClick={submit}>submit</button>
                    {error && <p style={{ color: "royalblue", textAlign:"center" }}>{errorMessage}</p>}
                </div>
            </div>
            <FooterPage></FooterPage>
        </>
    );
}