import { useState } from "react"; 
import { SiPhonepe } from "react-icons/si"; 
import gpay from "../assets/google-pay.png"; 
import upi from "../assets/upi.png"; 

import { Check } from "lucide-react";
function Payoption() { 
    const [paymentMethod,setPaymentMethod]=useState<string>(""); 
    const [onlineMethod,setOnlineMethod]=useState<string>(""); 
    const [orderPlaced,setOrderPlaced]=useState<boolean>(false)
  return ( 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5"> 
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6"> 
 

{orderPlaced? (
    
        <div className="flex flex-col items-center justify-center h-96">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="text-white w-12 h-12" />
            </div>

            <p className="text-green-500 font-semibold text-xl mt-4">
              Order Placed
            </p>
          </div>
      
):(


    <div>
        <h2 className="text-2xl font-bold mb-6"> 
          Select Payment 
        </h2> 
 
      
        <div className="flex w-full justify-between border rounded-xl p-4 items-center mb-4 cursor-pointer hover:bg-gray-50"> 
          <div className="flex gap-3 items-center"> 
            <p className="text-xl font-bold">₹</p> 
            <span className="text-gray-400">|</span> 
            <p className="font-medium">Cash on Delivery</p> 
          </div> 
 
          <input 
            type="radio" 
            name="payment" 
            checked={paymentMethod==="cod"} 
            onChange={()=>setPaymentMethod("cod")} 
            className="w-5 h-5" 
          /> 
        </div> 
 
     
        <div className="flex w-full justify-between border rounded-xl p-4 items-center cursor-pointer hover:bg-gray-50"> 
          <div className="flex gap-3 items-center"> 
            <p className="text-xl font-bold">₹</p> 
            <span className="text-gray-400">|</span> 
            <p className="font-medium">Pay Online</p> 
          </div> 
 
          <input 
            type="radio" 
           name="payment" 
             checked={paymentMethod==="online"} 
            onChange={()=>setPaymentMethod("online")} 
            className="w-5 h-5" 
          /> 
        </div> 




 
        {paymentMethod==="online" && ( 
                <div> 
                <p className="font-semibold mb-4 py-2"> Select Online Payment </p> 
 
               <div  className="flex justify-between gap-3 items-center rounded-xl p-3 border mb-2" > 
                <div className="flex items-center gap-2"> 
                <img className="w-10" src={upi}/> 
                <p className="font-semibold">UPI</p> 
                </div> 
                <input type="radio" 
                name="onlinePayment" 
                checked={onlineMethod==="upi"} 
                onChange={()=>setOnlineMethod("upi")}  
               > 
                </input> 
                </div> 
 
 
               <div className="flex justify-between gap-3 items-center rounded-xl p-3 border mb-2"> 
                <div className="flex items-center gap-2"> 
                <img src={gpay} className="w-9" /> 
                <p className="font-semibold">Gpay</p> 
                </div> 
                 
                <input 
                type="radio" 
                name="onlinePayment" 
                checked={onlineMethod==="Gpay"} 
                onChange={()=>setOnlineMethod("Gpay")}> 
                </input> 
                </div> 
 
<div className="flex justify-between gap-3 items-center border rounded-xl p-3 mb-2"> 
                 <div className="flex gap-2 items-center font-semibold"> 
                <SiPhonepe className="text-violet-600" size={30} /> 
                <p>Phonepe</p> 
                </div> 
                <input 
                type="radio" 
                name="onlinePayment" 
                checked={onlineMethod==="Phonepe"} 
                onChange={()=>setOnlineMethod("Phonepe")}> 
                </input> 
                </div> 
 

 
                </div> 
        )} 

                <div className="mt-6">

          
          <div className="bg-[#EEF3FF] rounded-xl p-5">

          
            <div className="flex justify-between items-center mb-5">

              <p className="text-lg">
                MRP
                <span className="text-sm ml-1">
                  (incl. of all taxes)
                </span>
              </p>

              <p className="text-lg">
                ₹
              </p>

            </div>

        
            <div className="flex justify-between items-center pb-4 border-b border-dashed">

              <p className="text-lg">
                Fees
               
              </p>

              <p className="text-lg">
                ₹
              </p>

            </div>

            
          

            
            <div className="flex justify-between items-center pt-5">

              <p className="text-xl ">
                Total Amount
              </p>

              <p className="text-2xl font-bold ">
                ₹
              </p>

            </div>

          </div>
          </div>


 
        <div className="border-t mt-6 pt-5 flex items-center justify-between"> 
          <div className="flex gap-2 items-center"> 
            <p className="font-medium">₹</p> 
            <button className="text-sm font-semibold text-blue-600"> 
              View Price Details 
            </button> 
          </div> 
 
          
          <button onClick={()=>{setOrderPlaced(true);
              
              setTimeout(()=>{
                setOrderPlaced(false);
              },2000);
          }} className="bg-[#7E6A5A] hover:bg-[#6B5A4A]  w-30 mt-5  text-white  p-2 rounded-sm font-semibold "> 
            Place Order 
          </button> 
        </div> 




</div>
)}
 
      </div> 

      

    </div>
    
    


  ); 
} 




 
export default Payoption; 


