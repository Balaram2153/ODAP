import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LandNav from "./Landpage/LandNav";
import FooterPage from "./Landpage/FooterPage";
import './Technician.css'

export default function Technician(){
    
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        loadUsers();
    }, []);
    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:9082/api/Msdata");
        setUsers(result.data);
    }
    
    return(
      <>
      <LandNav></LandNav>
        <div>
            <table className="technician-table">
                <thead>
                <tr>
                    <th scope="column">#</th>
                    <th scope="column">patientname</th>
                    <th scope="column">typeofservices</th>
                    <th scope="column">bookingdate</th>
                    <th scope="column">slottime</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>   
                                <td>{user.patientname}</td>
                                <td>{user.typeofservices}</td>
                                <td>{user.bookingdate}</td>
                                <td>{user.slottime}</td>                             
                            </tr>                   
                     
                        })
                    }
                <tr>
                                     
                </tr>
                </tbody>
            </table>
        </div>
        <FooterPage></FooterPage>
      </>  
    );
}
