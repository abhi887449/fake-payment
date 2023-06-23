import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DebitCard from "./components/DebitCard";
import Navbar from "./components/Navbar";
import PaymentOptions from "./components/PaymentOptions";
import ItemPurchase from "./components/ItemPurchase";
import Upi from "./components/Upi";
import PaymentSuccess from "./components/PaymentSuccess";
function App() {
  
  return (
    <div>
    <Router>
      <Navbar/>
        <Routes>
                  {["/fake-payment", "/upi","/debitcard"].map(path => (
                    <Route
                      path={path}
                      element={<ItemPurchase />}
                    />
                  ))}
                </Routes>

      <Routes>
        <Route exact path="/upi" element={<Upi/>}></Route>
        <Route exact path="/debitcard" element={<DebitCard/>}></Route>
        <Route exact path="/paymentsuccess" element={<PaymentSuccess/>}></Route>
        <Route exact path="/fake-payment" element={<PaymentOptions />}></Route>
      </Routes>
    </Router>
    <div>
    
  </div>
  </div>
    
  );
}

export default App;
