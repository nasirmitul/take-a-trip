import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search)

    const transactionId = query.get('transactionId')

    console.log(transactionId);

    const [paySuccess, setPaySuccess] = useState({});

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/payment/success/${transactionId}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setPaySuccess(data);
            })
    }, [transactionId])


    const id = paySuccess?.transactionId;

    const handleCopy = () => {
        navigator.clipboard.writeText(id);
        toast.success('id copied');
    }
    
    const handlePrint = () =>{
        window.print();
    }


    return (
        <div>
            <div className='invoice'>
                <div class="card">
                    <div class="card-body">
                        <h5 className="text-center card-title">
                            Payment Successfully!
                        </h5>
                        <p className="payment-icon">
                            <FaCheckCircle></FaCheckCircle>
                        </p>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Payment type</p>
                            <p className='payment-info-value'>Bkash</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Bank</p>
                            <p className='payment-info-value'>NRBC</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Phone</p>
                            <p className='payment-info-value'>{paySuccess?.phone_number}</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Email</p>
                            <p className='payment-info-value'>{paySuccess?.userEmail}</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Location</p>
                            <p className='payment-info-value'>{paySuccess?.address}</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Paid Amount</p>
                            <p className='payment-info-value'><span>৳ {paySuccess?.price}</span></p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Transaction id</p>
                            <p className='payment-info-value transaction' onClick={handleCopy}>{paySuccess?.transactionId}</p>
                        </div>

                        <div className="payment-info-text d-flex justify-content-between">
                            <p className='payment-info-title'>Authorized by</p>
                            <p className='payment-info-value'><span>Take A Trip</span></p>
                        </div>

                        <div className="payment-info-button text-center">
                            <button onClick={handlePrint}>print</button>
                            <Link to={'/'}><button>close</button></Link>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default PaymentSuccess;