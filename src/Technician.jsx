import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Technician.css";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import { Link } from "react-router-dom";

export default function Technician() {

    const [email, setEmail] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert('Please select a PDF file.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('file', selectedFile);

            await axios.post('http://localhost:9082/api/send-email', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("pdf sent successfully");
            console.log('PDF email sent successfully');
        } catch (error) {
            console.error('Error sending PDF email:', error);
        }
    };

    const [patient, setpatient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9083/api/dsdata");
                setpatient(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className="sidebar">
                        <div className="scrollbox">
                            <div className="html-home">
                                <img className="techimage" src="technician.jpg"></img>
                                <p>
                                    <a className="link" href="#html-home">
                                        Patient Details{" "}
                                    </a>
                                </p>
                                <p>
                                    <a className="link" href="#html-intro">
                                        Send Reports{" "}
                                    </a>
                                </p>
                                <p>
                                    <a className="link" href="#html-intro">
                                    <Link to='/Landpage' style={{textDecoration:'none',color:"white"}}>Logout</Link>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
              
                <main className="content-scroll">
                    <LandNav></LandNav>
                    <div id="html-home">
                        <section>
                            <div className="container">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Pateint name</th>
                                                <th scope="col">Referal Doctor name</th>
                                                <th scope="col">Hospital name</th>
                                                <th scope="col">Booking date</th>
                                                <th scope="col">Slot time</th>
                                                <th scope="col">Typeof service</th>
                                                

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.map((data, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td key={`${index}-patientname`}>{data.patientname}</td>
                                                    <td key={`${index}-referaldoctorName`}>{data.referaldoctorname}</td>
                                                    <td key={`${index}-hospitalname`}>{data.hospitalname}</td>
                                                    <td key={`${index}-bookingdate`}>{data.bookingdate}</td>
                                                    <td key={`${index}-slottime`}>{data.slotime}</td>
                                                    <td key={`${index}-typeofservices`}>{data.typeofServices}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                   

                    <div id="html-intro">
                        <div className="technicianreports">
                            <h1>Send Email with PDF</h1>
                            <form onSubmit={handleFormSubmit}>
                                <label>
                                    Email:
                                    <input className="technicianinput" type="email" value={email} onChange={handleEmailChange} />
                                </label>
                                <br />
                                <label>
                                    Select PDF File:
                                    <input
                                        className="technicianinput"
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                <br />
                                <button className="technicianbtn" type="submit">Send Email</button>
                            </form>
                        </div>
               
                    </div>

                    <div id="html-basic">
                        <section></section>
                    </div>
                    <FooterPage></FooterPage>
                </main>
            </div>
            
        </>
    );
}