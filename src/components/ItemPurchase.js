import React from 'react'
import rupee from './../images/rupee-icon.svg'
import {useSelector } from "react-redux";

const ItemPurchase = () => {
    const reduxstate = useSelector((state)=> state.updateDetails);
    return (
        <div className='flex p-3 border-b-2 border-gray-300 mt-2 justify-between'>
            <div className="">
                <div className='text-sm lg:text-lg font-normal text-gray-500'>Purchased Order</div>
                <div className="text-xl font-bold lg:text-2xl lg:hidden">{`${(reduxstate.itemInfo.name.length <= 25) ? reduxstate.itemInfo.name : (reduxstate.itemInfo.name.substring(0, 22) + "...")}`}</div>
                <div className="hidden lg:block lg:text-2xl text-xl font-bold">{reduxstate.itemInfo.name}</div>
            </div>
            <div className="flex flex-col">
                <div className="text-sm lg:text-lg font-normal text-gray-500 pl-2">Amount</div>
                <div className="flex">
                <img src={rupee} alt="" className="" />
                <div className='text-2xl font-bold'>{reduxstate.itemInfo.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemPurchase
