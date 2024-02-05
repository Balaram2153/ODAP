import React from "react";
import './Payment.css';
import { useState, useEffect } from "react";
import { getPatientslot } from "./Authstate.js";



function Payment() {

    
    
    const pslot = getPatientslot();

    // useEffect(() => {
    //   console.log(pslot);
    //   setPersonname(pslot ? pslot.patientname : "");

    // }, []);
    
    const[patientname, setPatientName] = useState(pslot.patientname);
    



    return (
        <div className="container payment-container p-0">
            <div className="payment-card px-4">
                <p className="h8 py-3">Payment Details</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Person Name</p>
                            <input className="payment-form-control mb-3" type="text" id="personname" value={pslot.patientname} onChange={(e) => setPatientName()} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Card Number</p>
                            <input className="payment-form-control mb-3" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Expiry</p>
                            <input className="payment-form-control mb-3" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="payment-form-control mb-3 pt-2 " type="password" placeholder="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Email</p>
                            <input className="payment-form-control mb-3" type="text" placeholder="" />
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Mobile Number</p>
                                <input className="payment-form-control mb-3" type="text" placeholder="" />
                            </div>
                            <div className="col-12">
                                <div className="btn btn-primary mb-3">
                                    <span className="ps-3">Pay Rs.</span>
                                    <span className="fas fa-arrow-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment;