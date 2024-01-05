
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { setPatientDetails } from "./Authstate";
import LandNav from "./LandNav";
import FooterPage from "./FooterPage";

const Login=()=>
{

    const navigate = useNavigate();
    const [patientName,setPatientName]=useState("");
    const [password,setPassword]=useState("");
    

    useEffect(()=>
    {
        if(patientName!== "" && password!== "")
        {
            fetch('http://localhost:8089/api/getall')
            .then((response)=>response.json())
            .then((pdata)=>
            {
                const isLoginSuccess=checkLogin(pdata,patientName,password);
             
                        if (isLoginSuccess) {
                          alert("Loggedin Successfully");
                          navigate("/patientdashboard");
                          const loggedIn = pdata.find(
                            (user) =>
                              user.patientName === patientName && user.password === password
                          );
                          console.log(loggedIn);
                          setPatientDetails(loggedIn);
                          
                        } else {
                          // Handle unsuccessful login
                          alert("Invalid username or password");
                          
                         
                        }
                      })
                      .catch((error) => {
                        console.error("Error fetching data:", error);
                        // Handle error fetching data
                      });
                  }
                }, [patientName, password]);
                function checkLogin( data, enteredName, enteredPassword) {
                  // Your logic to check if the entered email and password match the data from the API
                  // Example: (Replace with your actual logic)
                  return data.some(
                    (user) => user.patientName === enteredName && user.password === enteredPassword
                  );
                }
      
        function Submit(){
      
                 
      
              const name = document.getElementById("inputpatientName").value;
              const password = document.getElementById("inputpassword").value;
              
              if(name=='' && password==''){
                  alert("Invalid Credentials");
              }
              else if(name==''){
                  alert("patientname is a Required Field");
              }
              else if(password==''){
                  alert("Password is a Required Field")
              }
             
              setPatientName(name);
              setPassword(password);
                    
      }
      
      
      
          return (
              <>
               
                    <LandNav></LandNav>
                      <div className="container h-100 d-flex justify-content-center align-items-center pt-5 ps-5">
                          <div className="row">
                              <div className="col-12">
                                  <form className="bg-white p-5 rounded">
                              
                                      <div className="mb-3">
                                          <label for="patientName" className="form-label text-primary fw-bold">Patient Name :</label>
                                          <input type="text" className="form-control" id="inputpatientName"  style={{width:"300px",height:"40px"}}  required/>
                                      </div>
                                      
                                      <div className="mb-3">
                                          <label for="password" className="form-label text-primary fw-bold">Password :</label>
                                          <input type="password" className="form-control" id="inputpassword" style={{width:"300px",height:"40px"}}  required />
                                      </div>
                                      
                                      
                                      <div className="p-3">
                                          <p>Dont have an Account? <Link to='/register'>Register here</Link></p>
                                      </div>
                                      <button type="button" className="btn btn-primary" onClick={Submit}>Submit</button>
                                </form>
                              </div>
                          </div>
                        </div>
                        <FooterPage></FooterPage>
    </>
    )
}

export default Login;