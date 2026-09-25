import { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';


interface User {
    email: string;
    password: string;
}

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    async function handleLogin() {
        setError("");

        if(email ==="admin@gmail.com" && password ==="admin@123"){
            navigate("/dashboard");
            return;
        }

        const response = await fetch("https://dummyjson.com/users");

        const data = await response.json();

        const user = data.users.find((user: User) => user.email === email && user.password === password);

        if (user) {
            navigate("/home");
        } else {
            const emailExists = data.users.some((user: User) => user.email === email);
            if (emailExists) {
                setError("Incorrect password. Please try again.");
            }
            else {
                setError("User not found");
            }
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-[#E7ECE7]">

            <div className="flex w-full max-w-[350px] h-[400px] md:max-w-none md:w-[700px] md:h-[400px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">


                <div className="hidden md:block md:w-1/2 h-full">
                    <img src="https://themewagon.github.io/kaira/images/banner-image-2.jpg" alt="login-image" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 h-full flex flex-col px-8 py-9">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome Back!</h1>
                    <p className="text-[13px] mb-6 text-gray-700">Please enter your details to login.</p>


                    <label className="text-gray-700 text-[14px]">Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                        className="border border-gray-400 rounded-md px-2 py-1 mb-4 placeholder:text-[13px] focus:outline-none" />

                    <label className="text-gray-700 text-[14px]">Password</label>

                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password}
                         onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                         }}
                            className="border border-gray-400 w-full rounded-md px-2 py-1 pr-10  placeholder:text-[13px] focus:outline-none" />

                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 
                        transform -translate-y-1/2 text-gray-500/80 cursor-pointer">
                            {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                        </button>
                    </div>

                    {error && <p className="text-red-600 text-[13px] mt-2">{error}</p>}

                    <button onClick={handleLogin} className="bg-[#7E6A5A] mt-4 text-white px-4 py-2 rounded-md hover:bg-[#6B5A4A] 
                transition duration-300 cursor-pointer">Login</button>

                    <p className="text-[13px] my-4 text-gray-700 mx-auto">
                        Don't have an account? <Link to="/signup" className="text-[#7E6A5A] hover:underline">Register</Link>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Login;