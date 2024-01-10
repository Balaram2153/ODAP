import React from "react";
import './Payment.css';


function  Payment(){
    return(
<div class="container payment-container p-0">
        <div class="payment-card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="payment-form-control mb-3" type="text" placeholder="" value=""/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="payment-form-control mb-3" type="text" placeholder="" />
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="payment-form-control mb-3" type="text" placeholder="" />
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="payment-form-control mb-3 pt-2 " type="password" placeholder="" />
                    </div>
                </div>
                    <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Email</p>
                        <input class="payment-form-control mb-3" type="text" placeholder="" />
                    </div>
                    <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Mobile Number</p>
                        <input class="payment-form-control mb-3" type="text" placeholder="" />
                    </div>
                    <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Pay Rs.</span>
                        <span class="fas fa-arrow-right"></span>
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