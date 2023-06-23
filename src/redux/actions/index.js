export const UpdatePaymentMethod = (paymentMethod)=>{
    return {
        type: "UpdatePaymentMethod",
        payload: paymentMethod
    }
}
export const UpdateUpiId = (upi)=>{
    return {
        type: "UpdateUpiId",
        payload: upi
    }
}
export const UpdateCardDetails = (cardNumber)=>{
    return {
        type: "UpdateCardDetails",
        payload: cardNumber
    }
}