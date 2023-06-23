import React, { useEffect, useState } from 'react'
import upi from "./../images/upi-icon.jpg"
import debitcard from "./../images/debitcard-icon.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch} from "react-redux";
import { UpdatePaymentMethod } from '../redux/actions/index';

const PaymentOptions = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [payMethod,setPayMethod]=useState(null);
    useEffect(()=>{
        if (payMethod === "debitcard") {
            dispatch(UpdatePaymentMethod(payMethod))
            navigate("/debitcard")
        }
        else if(payMethod==="upi"){
            dispatch(UpdatePaymentMethod(payMethod))
            navigate("/upi")
        }
    },[payMethod])
    return (
        <div className='p-3 flex flex-col lg:flex-row'>
            <div>
                <p className='text-lg lg:text-xl font-bold mt-5'>UPI</p>
                <div onClick={()=>setPayMethod("upi")} className="flex border w-11/12 md:w-96 h-24 rounded-lg shadow-lg mt-5">
                    <div className="flex m-4 h-14 w-14 rounded-full border pt-5 p-3">
                        <img className='h-4' src={upi} alt="upi logo" />
                    </div>
                    <div className="mt-8 text-md text-gray-600 lg:text-lg">Use UPI ID to Pay</div>
                    <div className='text-gray-400 mt-7 mr-5 text-2xl ml-auto'>{">"}</div>
                </div>
            </div>
            <div className='lg:ml-10'>
                <p className='text-lg lg:text-xl font-bold mt-5'>Cards</p>
                <div onClick={()=>setPayMethod("debitcard")} className="flex border w-11/12 md:w-96 h-24 rounded-lg shadow-lg mt-5">
                    <div className="flex m-4 h-14 w-14 rounded-full border pt-5 p-3">
                        <img className='h-4' src={debitcard} alt="upi logo" />
                    </div>
                    <div className="mt-8 text-md text-gray-600 lg:text-lg">Use Debit/Credit Card to pay</div>
                    <div className='text-gray-400 mt-7 mr-5 text-2xl ml-auto'>{">"}</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptions
