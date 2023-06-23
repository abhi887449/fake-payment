import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import success from './../images/success-icon.gif'
import { useNavigate } from 'react-router-dom';
import { UpdateUpiId } from '../redux/actions/index';

const Upi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxstate = useSelector((state)=> state.updateDetails);
  const [upiid,setUpiid]=useState({upi:"",verify:false,name:""});
  const onchange = (e)=>{
    setUpiid({...upiid,[e.target.name]:e.target.value})
  }
  const checkUpiid = ()=>{
    if(upiid.upi.includes("@") & upiid.name!==""){
      setUpiid({...upiid,verify:true});
    }
    else{
      alert("Please enter valid upi id or name")
    }
  }
  const handelpay = ()=>{
    if(upiid.verify){
      dispatch(UpdateUpiId(upiid.upi))
      localStorage.setItem("paymentdetails",JSON.stringify(reduxstate))
      navigate("/paymentsuccess")
    }
  }
  return (
    <div className='flex flex-col border-2 m-auto w-11/12 md:w-96 mt-10 shadow-lg h-[300px] rounded-lg'>
      <p className='ml-auto mr-auto mt-2 mb-2 text-2xl font-bold text-gray-600'>UPI Details</p>
      <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="cardNnumber">UPI ID</label>
      <input id='cardNnumber' className={`border m-2 rounded h-10 placeholder:p-2 ${(upiid.verify)? "border-green-600":""}`} placeholder='UPI ID' required type="text" name='upi' value={upiid.upi} onChange={onchange} />
      <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="cardHolderName">Your Name</label>
      <input id='cardHolderName' className={`border m-2 rounded h-10 placeholder:p-2 ${(upiid.verify)? "border-green-600":""}`} placeholder='Your name' required type="text" name='name' onChange={onchange}/>
      <div className="flex justify-center mt-4">
        <img className={`h-8 ${(upiid.verify)? "absolute":"hidden"}`} src={success} alt="ok" />
        <button onClick={checkUpiid} className='h-8 w-24 bg-gray-600 rounded text-white mr-4'>Verify</button>
        <button onClick={handelpay} className='h-8 w-24 bg-green-600 rounded text-white ml-4' type="submit">Pay</button>
      </div>
    </div>
  )
}

export default Upi
