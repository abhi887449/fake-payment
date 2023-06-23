import React from 'react'
import success from './../images/success-icon.gif'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';
import { useDispatch } from 'react-redux';
import { UpdateCardDetails , UpdateUpiId} from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlebackbtn = ()=>{
      dispatch(UpdateUpiId(null))
      dispatch(UpdateCardDetails(null))
      localStorage.clear();
        navigate("/")
    }
    return (
        <div className="">
            <div className='flex flex-col m-auto rounded-lg shadow-xl mt-10 border h-80 w-11/12 md:w-96'>
                <img className='m-auto mt-10 mb-5 h-20' src={success} alt="" />
                <p className="m-auto mt-5 text-center">
                    <div className="text-4xl font-bold">Success</div>
                    <div className="text-lg m-3">Payment Successfull on 11/02/2004 11:52 PM. Kindly download your invoice below.</div>
                </p>
            </div>
            <div className="flex justify-center mt-16">
                <button className='h-8 w-36 bg-gray-600 rounded text-white mr-4' onClick={handlebackbtn}>Back to Home</button>
                <button className='h-8 w-36 bg-green-600 rounded text-white ml-4' type="submit">
                <PDFDownloadLink document={<Invoice />} fileName="Invoice.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Invoice')}
    </PDFDownloadLink>
                </button>
            </div>
        </div>
    )
}

export default PaymentSuccess
