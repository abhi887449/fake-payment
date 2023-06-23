import updateDetails from "./paymentDetails";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    updateDetails:updateDetails
})

export default rootReducer;