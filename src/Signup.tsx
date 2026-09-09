import {useNavigate} from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import signupimg from "./assets/signupimg.jpg"
interface User{
    id: number;
  email: string;
  password: string;
  username: string;
  firstName: string;
lastName: string;
}
function Signup() {
       const [firstname, setFirstname] = useState<string>("");
       const [lastname, setLastname] = useState<string>("");
       const [email, setEmail] = useState<string>("");
       const [password, setPassword] = useState<string>("");
       const [message, setMessage] = useState<string>("");

       const navigate=useNavigate();

       const handleFirstnameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
           setFirstname(e.target.value);
       };

       const handleLastnameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            setLastname(e.target.value);
       }

       const handleEmailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
              setEmail(e.target.value);
       }

       const handlePasswordChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
             setPassword(e.target.value);
       }

       const handleSignup=async(e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         if(firstname==""||lastname==""||email==""||password==""){
         alert("Please fill all the fields ");
         }
       
       try{
        const response=await axios.get<{users:User[]}>("https://dummyjson.com/users");
            
            const users=response.data.users;
             
            const user=users.find((user)=>{
              return (
                user.firstName===firstname&&
                user.lastName===lastname&&
                user.email===email&&
                user.password===password
              )
            });

            if(user){
              setMessage("signup successfull");
              navigate("/login");
            }
            else{
              setMessage("Signup failed. Please try again.");
            }
             }
             catch(error){
              setMessage("An error occurred. Please try again later.");                         
             }
            }
          


  return (
    <div className="flex gap-5 items-center justify-center min-h-screen bg-[#E7ECE7] px-4">

      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-5 shadow-lg rounded-lg md:mx-20 p-4 md:p-6">

        <div className="hidden lg:block">
          <img
            className="w-90 h-100 max-w-full rounded-lg object-cover"
            src={signupimg}
            alt="Signup"
          />
        </div>

        <div className="w-full md:w-auto justify-items-center space-y-2 px-5">

          <h1 className="text-[#6B5A4A] text-3xl font-bold">Curate</h1>

          <p className="text-2xl text-[#7E6A5A]">Create an Account</p>

          <form onSubmit={handleSignup} className="flex flex-col space-y-6 mt-5 w-full">

            <div className="flex flex-col md:flex-row gap-3">
              <input
              value={firstname}
              onChange={handleFirstnameChange}
                className="rounded-lg p-2 focus:ring-1 border w-full"
                type="text"
                placeholder="FirstName"
              
              />

              <input
              value={lastname}
              onChange={handleLastnameChange}
                className="rounded-lg p-2 focus:ring-1 border w-full"
                type="text"
                placeholder="LastName"
                  
              />
            </div>

            <input
            value={email}
            onChange={handleEmailChange}
              className="rounded-lg p-2 border w-full"
              type="email"
              placeholder="Email"
            
            />

            <input
            value={password}
            onChange={handlePasswordChange}
              className="rounded-lg p-2 border w-full"
              type="password"
              placeholder="Password"
              
            />

            <button
              className="bg-[#7E6A5A] hover:bg-[#6B5A4A] text-white py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Sign Up
            </button>

            {message && (<p className={`text-center ${message==="signup successfull" ? "text-green-500" : "text-red-500"}`}>{message}</p>)}

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <button onClick={()=>navigate("/login")} type="button" className="text-red-500">
                Login
              </button>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Signup;