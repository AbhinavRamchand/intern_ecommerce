import { useState } from "react";
function Payoption() {
    const [paymentMethod,setPaymentMethod]=useState<string>("");
    const [onlineMethod,setOnlineMethod]=useState<string>("");
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">

   
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
                <p className="font-semibold mb-4"> Select Online Payment </p>

               <div className="flex justify-between gap-3 items-center rounded-xl p-3 border mb-2" >
                <p>UPI</p>
                <input type="radio"
                name="onlinePayment"
                checked={onlineMethod==="upi"}
                onChange={()=>setOnlineMethod("upi")}>
                </input>
                </div>


               <div className="flex justify-between gap-3 items-center rounded-xl p-3 border mb-2">
                <p>Google Pay</p>
                <input
                type="radio"
                name="onlinePayment"
                checked={onlineMethod==="Gpay"}
                onChange={()=>setOnlineMethod("Gpay")}>
                </input>
                </div>

<div className="flex justify-between gap-3 items-center border rounded-xl p-3 mb-2">
                 <p>Phonepe</p>
                <input
                type="radio"
                name="onlinePayment"
                checked={onlineMethod==="Phonepe"}
                onChange={()=>setOnlineMethod("Phonepe")}>
                </input>
                </div>


                </div>


        )}

        <div className="border-t mt-6 pt-5 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <p className="font-medium">₹</p>
            <button className="text-sm font-semibold text-blue-600">
              View Price Details
            </button>
          </div>

         
          <button className="bg-[#7E6A5A] hover:bg-[#6B5A4A]  w-30 mt-5  text-white  p-2 rounded-sm font-semibold ">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Payoption;

