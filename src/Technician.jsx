import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Technician.css";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";

// export default function Technician() {
//     const [patient, setpatient] = useState([]);

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9080/all");
//         setpatient(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   return (
//     <>
//     <LandNav></LandNav>
//     <div className="container">
//       <div className="table-responsive">
//         <table className="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Doctor Name</th>
//               <th scope="col">Hospital Name</th>
//               <th scope="col">Booking Date</th>
//               <th scope="col">Booking Time</th>
//               <th scope="col">Type of Service</th>
//               <th scope="col">ReSchadule Slot</th>
//               <th scope="col">Priscription</th>

//             </tr>
//           </thead>
//           <tbody>
//           {patient.map((data, index) => (
//   <tr key={index}>
//     <th scope="row">{index + 1}</th>
//     <td key={`${index}-patientId`}>{data.patient.patientId}</td>
//     <td key={`${index}-mobileEmail`}>{`${data.patient.mobileNumber} ${data.patient.email}`}</td>
//     <td key={`${index}-doctorName`}>{data.doctorName}</td>
//     <td key={`${index}-hospitalName`}>{data.hospitalName}</td>
//     <td key={`${index}-bookingDate`}>{data.bookingDate}</td>
//     <td key={`${index}-bookingTime`}>{data.bookingTime}</td>
//     <td key={`${index}-typeofService`}>{data.typeofService}</td>
//     <td key={`${index}-Reschadule`}>{data.Reschadule}</td>
//     <td key={`${index}-prescription`}>{data.prescription}</td>
//   </tr>
// ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     <FooterPage></FooterPage>
//     </>
//   );
// }


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

            console.log('PDF email sent successfully');
        } catch (error) {
            console.error('Error sending PDF email:', error);
        }
    };

    const [patient, setpatient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9080/all");
                setpatient(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <>
            <div>
                <div>
                    <nav className="sidebar">
                        <div className="scrollbox">
                            <div className="html-home">
                                <img className="techimage" src="technician.jpg"></img>
                                <p>
                                    <a className="link" href="#html-home">
                                        HTML Home{" "}
                                    </a>
                                </p>
                                <p>
                                    <a className="link" href="#html-intro">
                                        HTML Introduction{" "}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>

                <main className="content-scroll">
                    <div id="html-home">
                        <section>
                            <div className="container">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Doctor Name</th>
                                                <th scope="col">Hospital Name</th>
                                                <th scope="col">Booking Date</th>
                                                <th scope="col">Booking Time</th>
                                                <th scope="col">Type of Service</th>
                                                <th scope="col">ReSchadule Slot</th>
                                                <th scope="col">Priscription</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.map((data, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td key={`${index}-patientId`}>
                                                        {data.patient.patientId}
                                                    </td>
                                                    <td
                                                        key={`${index}-mobileEmail`}
                                                    >{`${data.patient.mobileNumber} ${data.patient.email}`}</td>
                                                    <td key={`${index}-doctorName`}>{data.doctorName}</td>
                                                    <td key={`${index}-hospitalName`}>
                                                        {data.hospitalName}
                                                    </td>
                                                    <td key={`${index}-bookingDate`}>
                                                        {data.bookingDate}
                                                    </td>
                                                    <td key={`${index}-bookingTime`}>
                                                        {data.bookingTime}
                                                    </td>
                                                    <td key={`${index}-typeofService`}>
                                                        {data.typeofService}
                                                    </td>
                                                    <td key={`${index}-Reschadule`}>{data.Reschadule}</td>
                                                    <td key={`${index}-prescription`}>
                                                        {data.prescription}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

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
                        {/* <div className="reportupload">
                        <section>
                            <h2>Upload the Reports</h2>
                            <p>Patient email:</p>
                            <input type="email" required placeholder="Enter the Patient Email"></input>
                            <br/>
                            <input type="file" required placeholder="Upload your file here"></input>
                            <br></br>
                            <br></br>
                            <button>Send  Reports</button>
                        </section>
                        </div> */}
                    </div>

                    <div id="html-basic">
                        <section></section>
                    </div>
                </main>
            </div>
        </>
    );
}
