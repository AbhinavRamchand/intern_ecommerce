
import { useState } from "react";
import { SiPhonepe } from "react-icons/si";
import gpay from "../assets/google-pay.png";
import upi from "../assets/upi.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useOutletContext } from "react-router-dom";
import { Check } from "lucide-react";

function Payoption() {
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [onlineMethod, setOnlineMethod] = useState<string>("");
    const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

    const { darkMode } = useOutletContext<{ darkMode: boolean }>();

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-5 transition-colors duration-300 ${
                darkMode
                    ? "bg-gray-950 text-white"
                    : "bg-gray-100 text-gray-900"
            }`}
        >
            <div
                className={`w-full max-w-md rounded-xl shadow-md p-6 transition-colors duration-300 ${
                    darkMode
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900"
                }`}
            >

               
                {orderPlaced ? (
                    <div className="flex flex-col items-center justify-center h-96">

                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="text-white w-12 h-12" />
                        </div>

                        <p className="text-green-500 font-semibold text-xl mt-4">
                            Order Placed
                        </p>

                    </div>
                ) : (
                    <div>

                     
                        <div className="flex gap-2 items-center mb-6">

                            <Link
                                to="/shop"
                                className={
                                    darkMode
                                        ? "text-white"
                                        : "text-gray-900"
                                }
                            >
                                <ArrowBackIcon />
                            </Link>

                            <h2 className="text-2xl font-bold">
                                Select Payment
                            </h2>

                        </div>

                        <div
                            className={`flex w-full justify-between border rounded-xl p-4 items-center mb-4 cursor-pointer transition-colors duration-300 ${
                                darkMode
                                    ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                                    : "border-gray-300 bg-white hover:bg-gray-50"
                            }`}
                        >
                            <div className="flex gap-3 items-center">

                                <p className="text-xl font-bold">
                                    ₹
                                </p>

                                <span className="text-gray-400">
                                    |
                                </span>

                                <p className="font-medium">
                                    Cash on Delivery
                                </p>

                            </div>

                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === "cod"}
                                onChange={() =>
                                    setPaymentMethod("cod")
                                }
                                className="w-5 h-5"
                            />

                        </div>

                        <div
                            className={`flex w-full justify-between border rounded-xl p-4 items-center cursor-pointer transition-colors duration-300 ${
                                darkMode
                                    ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                                    : "border-gray-300 bg-white hover:bg-gray-50"
                            }`}
                        >
                            <div className="flex gap-3 items-center">

                                <p className="text-xl font-bold">
                                    ₹
                                </p>

                                <span className="text-gray-400">
                                    |
                                </span>

                                <p className="font-medium">
                                    Pay Online
                                </p>

                            </div>

                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === "online"}
                                onChange={() =>
                                    setPaymentMethod("online")
                                }
                                className="w-5 h-5"
                            />

                        </div>

                      
                        {paymentMethod === "online" && (
                            <div>

                                <p className="font-semibold mb-4 py-2">
                                    Select Online Payment
                                </p>

                               
                                <div
                                    className={`flex justify-between gap-3 items-center rounded-xl p-3 border mb-2 transition-colors duration-300 ${
                                        darkMode
                                            ? "border-gray-700 bg-gray-800"
                                            : "border-gray-300 bg-white"
                                    }`}
                                >

                                    <div className="flex items-center gap-2">

                                        <img
                                            className="w-10"
                                            src={upi}
                                            alt="UPI"
                                        />

                                        <p className="font-semibold">
                                            UPI
                                        </p>

                                    </div>

                                    <input
                                        type="radio"
                                        name="onlinePayment"
                                        checked={onlineMethod === "upi"}
                                        onChange={() =>
                                            setOnlineMethod("upi")
                                        }
                                    />

                                </div>

                              
                                <div
                                    className={`flex justify-between gap-3 items-center rounded-xl p-3 border mb-2 transition-colors duration-300 ${
                                        darkMode
                                            ? "border-gray-700 bg-gray-800"
                                            : "border-gray-300 bg-white"
                                    }`}
                                >

                                    <div className="flex items-center gap-2">

                                        <img
                                            src={gpay}
                                            className="w-9"
                                            alt="Google Pay"
                                        />

                                        <p className="font-semibold">
                                            Gpay
                                        </p>

                                    </div>

                                    <input
                                        type="radio"
                                        name="onlinePayment"
                                        checked={onlineMethod === "Gpay"}
                                        onChange={() =>
                                            setOnlineMethod("Gpay")
                                        }
                                    />

                                </div>

                              
                                <div
                                    className={`flex justify-between gap-3 items-center border rounded-xl p-3 mb-2 transition-colors duration-300 ${
                                        darkMode
                                            ? "border-gray-700 bg-gray-800"
                                            : "border-gray-300 bg-white"
                                    }`}
                                >

                                    <div className="flex gap-2 items-center font-semibold">

                                        <SiPhonepe
                                            className="text-violet-600"
                                            size={30}
                                        />

                                        <p>
                                            Phonepe
                                        </p>

                                    </div>

                                    <input
                                        type="radio"
                                        name="onlinePayment"
                                        checked={
                                            onlineMethod === "Phonepe"
                                        }
                                        onChange={() =>
                                            setOnlineMethod("Phonepe")
                                        }
                                    />

                                </div>

                            </div>
                        )}

                 
                        <div className="mt-6">

                            <div
                                className={`rounded-xl p-5 transition-colors duration-300 ${
                                    darkMode
                                        ? "bg-gray-800"
                                        : "bg-[#EEF3FF]"
                                }`}
                            >

                            
                                <div className="flex justify-between items-center mb-5">

                                    <p className="text-lg">
                                        MRP

                                        <span className="text-sm ml-1 text-gray-500">
                                            (incl. of all taxes)
                                        </span>
                                    </p>

                                    <p className="text-lg">
                                        ₹
                                    </p>

                                </div>

                 
                                <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-400">

                                    <p className="text-lg">
                                        Fees
                                    </p>

                                    <p className="text-lg">
                                        ₹
                                    </p>

                                </div>

                             
                                <div className="flex justify-between items-center pt-5">

                                    <p className="text-xl">
                                        Total Amount
                                    </p>

                                    <p className="text-2xl font-bold">
                                        ₹
                                    </p>

                                </div>

                            </div>

                        </div>

                     
                        <div className="border-t border-gray-400 mt-6 pt-5 flex items-center justify-between">

                            <div className="flex gap-2 items-center">

                                <p className="font-medium">
                                    ₹
                                </p>

                                <button
                                    className={
                                        darkMode
                                            ? "text-sm font-semibold text-blue-400"
                                            : "text-sm font-semibold text-blue-600"
                                    }
                                >
                                    View Price Details
                                </button>

                            </div>

                            <button
                                onClick={() => {
                                    setOrderPlaced(true);

                                    setTimeout(() => {
                                        setOrderPlaced(false);
                                    }, 2000);
                                }}
                                className={`w-30 mt-5 text-white p-2 rounded-sm font-semibold transition-colors duration-300 ${
                                    darkMode
                                        ? "bg-[#6B5A4A] hover:bg-[#7E6A5A]"
                                        : "bg-[#7E6A5A] hover:bg-[#6B5A4A]"
                                }`}
                            >
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
