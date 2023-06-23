const initialState = {
    itemInfo:{name:"Lenvo Legion Laptop", price:"75000"},
    paymentMethod:null,
    carddetails:null,
    upiid:null
}

const updateDetails = (state=initialState,action)=>{
    switch (action.type) {
        case "UpdatePaymentMethod":
            state.paymentMethod=action.payload
            return state;  
        case "UpdateUpiId":
            state.upiid=action.payload
            return state;  
        case "UpdateCardDetails":
            state.carddetails=action.payload
            return state;  
        default:
            return state
    }
}

export default updateDetails;