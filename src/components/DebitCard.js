import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import success from './../images/success-icon.gif'
import { useNavigate } from 'react-router-dom';
import { UpdateCardDetails } from '../redux/actions/index';

const DebitCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxstate = useSelector((state)=> state.updateDetails);
  const [carddetails,setCarddetails]=useState({cardnumber:"",cardholder:"",cvv:"",expirydate:"",verify:false})
  const onchange = (e)=>{
      setCarddetails({...carddetails,[e.target.name]:e.target.value})
  }
  const handleverifybtn = ()=>{
    if((carddetails.cardnumber.length === 16)&(carddetails.cardholder!=="")&(carddetails.cvv.length===3)&(carddetails.expirydate.includes("/") & carddetails.expirydate.length===5)){
      setCarddetails({...carddetails,verify:true})
    }
    else{
      alert("Please enter card number of 16 length, card holder name more than 1 character,cvv of 3 length and expiry date in mm/yy formate")
    }
  }
  const handelpaybtn = ()=>{
    if(carddetails.verify){
      dispatch(UpdateCardDetails(carddetails.cardnumber))
      localStorage.setItem("paymentdetails",JSON.stringify(reduxstate))
      navigate("/paymentsuccess")
    }
  }
  return (
    <div className='flex flex-col border-2 m-auto w-11/12 md:w-96 mt-10 shadow-lg h-96 rounded-lg'>
      <p className='ml-auto mr-auto mt-2 mb-2 text-2xl font-bold text-gray-600'>Card Details</p>
      <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="cardNnumber">Card Number</label>
      <input id='cardNnumber' className={`border m-2 rounded h-10 placeholder:p-2 ${(carddetails.verify)? "border-green-600":""}`} placeholder='Card number' required type="number" name='cardnumber' value={carddetails.cardnumber} onChange={onchange}/>
      <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="cardHolderName">Card Holder Name</label>
      <input id='cardHolderName' className={`border m-2 rounded h-10 placeholder:p-2 ${(carddetails.verify)? "border-green-600":""}`} placeholder='Card holder name' required type="text" onChange={onchange} value={carddetails.cardholder} name='cardholder' />
      <div className="flex">
        <div className="flex flex-col">
        <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="cardcvv">CVV Number</label>
        <input id='cardcvv' className={`border m-2 rounded h-10 placeholder:p-2 w-40 ${(carddetails.verify)? "border-green-600":""}`} placeholder='CVV number' required type="number" onChange={onchange} value={carddetails.cvv} name='cvv'/>
        </div>
        <div className="flex flex-col">
        <label className='ml-3 mt-2 text-md text-gray-500' htmlFor="expirydate">Expiry date</label>
        <input id='expirydate' className={`border m-2 rounded h-10 placeholder:p-2 w-40 md:w-auto ${(carddetails.verify)? "border-green-600":""}`} placeholder='Expiry date' required type="text" onChange={onchange} value={carddetails.expirydate} name='expirydate'/>
        </div>
      </div>
      <div className="flex justify-center mt-4">
      <img className={`h-8 ${(carddetails.verify)? "absolute":"hidden"}`} src={success} alt="ok" />
        <button className='h-8 w-24 bg-gray-600 rounded text-white mr-4' onClick={handleverifybtn}>Verify</button>
        <button className='h-8 w-24 bg-green-600 rounded text-white ml-4' onClick={handelpaybtn} type="submit">Pay</button>
      </div>
    </div>
  )
}

export default DebitCard
