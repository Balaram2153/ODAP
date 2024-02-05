import React from "react";
import FooterPage from "./Landpage/FooterPage";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Technicianafterlogin(){
    
    const [data, setData] = useState({});
    const [id, setId] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://api//${id}`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);
    
    return(
        <>
        <div>
                     <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link>Home</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">History</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Send Reports</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><Link to={"/Technicianlandpage"}>Logout</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div>
                    <table>
                        <tr>
                            <td>Technician name:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Diagnostic name:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>mobilenumber:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Diagnostic address:</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                </div>
                <FooterPage></FooterPage>
        </>
    );
}