import { useState } from "react";

interface User {
    email: string;
    firstName: string;
    lastName: string;
}

interface LoginCardProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    onClose: () => void;
    darkMode: boolean;
}

function LoginCard({ user, setUser, onClose, darkMode }: LoginCardProps) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleLogin = async () => {
        const response = await fetch("https://dummyjson.com/users");

        const data = await response.json();

        const foundUser = data.users.find((user: User) => user.email === email);
        if (foundUser) {
            localStorage.setItem("user", JSON.stringify(foundUser));
            setUser(foundUser);
            onClose();

        } else {
            setMessage("User not found");
        }
    }

    return (
        <>
            {!user && (
              
                    <div>
                        <input type="email" placeholder="Enter your email"
                            value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-400
                             rounded-md py-2 px-2 focus:outline-none w-full mt-5"/>

                        {message && <p className="text-red-500 text-sm mt-2 ml-1">{message}</p>}

                        <p className={`my-5 ${darkMode ? "text-gray-200" : "text-gray-400"} text-sm ml-1`}>
                            By continuing, you agree to our <span className="text-blue-400">Terms of Service</span>
                            &nbsp; and <span className="text-blue-500">Privacy Policy</span>.
                        </p>

                        <button className="px-4 py-2 bg-[#7E6A5A] text-white hover:bg-[#5a4a3a] 
                transition duration-300 rounded-sm mb-5" onClick={handleLogin}>Continue
                        </button>
                </div>

            )}

        </>
    )
}

export default LoginCard;