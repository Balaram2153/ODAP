import React from "react";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import { useState } from "react";
import axios from "axios";

export default function Tsendreports(){
    
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

            await axios.post('http://localhost:9084/api/send-email', formData, {
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

    
    return(
      <>
        <LandNav></LandNav>
         
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
                        
        <FooterPage></FooterPage>

      </>  
    );
}