import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import LoginCard from "../Components/LoginCard";

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

interface ProfileProps {
    darkMode: boolean;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function Profile() {

    const { darkMode, user, setUser } = useOutletContext<ProfileProps>();
    const [showLoginCard, setShowLoginCard] = useState(true);

    const navigate = useNavigate();

    const handleCloseLoginCard = () => {
        setShowLoginCard(false);
        navigate("/");
    }



    return (
        <>
            {user ? (
                <div className={`flex items-center justify-center h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>

                    <div className={`px-[100px] py-[45px] rounded-lg shadow-md flex flex-col h-[320px] ${darkMode ? "bg-gray-800" : "bg-white"}`}>

                        <div className="flex justify-between items-center">
                            <h2 className={`text-[20px] md:text-[24px] font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Profile Details</h2>
                            <span className={`text-2xl cursor-pointer hover:opacity-70 ${darkMode ? "text-white" : "text-gray-800"}`} onClick={handleCloseLoginCard}>
                                &times;
                            </span>
                        </div>

                        <hr className={`mt-4 mb-8 border ${darkMode ? "border-gray-600" : "border-gray-300"}`} />

                        <div className="flex  gap-[50px] items-center mb-2">
                            <p className={`text-[16px] md:text-[18px] font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>First Name</p>
                            <p className={`text-[16px] md:text-[18px] ${darkMode ? "text-white" : "text-gray-800"}`}>{user.firstName}</p>
                        </div>
                        <div className="flex  gap-[50px] items-center mb-2">
                            <p className={`text-[16px] md:text-[18px] font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Last Name</p>
                            <p className={`text-[16px] md:text-[18px] ${darkMode ? "text-white" : "text-gray-800"}`}>{user.lastName}</p>
                        </div>
                        <div className="flex  gap-[91px] items-center mb-2">
                            <p className={`text-[16px] md:text-[18px] font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Email</p>
                            <p className={`text-[16px] md:text-[18px] ${darkMode ? "text-white" : "text-gray-800"}`}>{user.email}</p>
                        </div>

                    </div>

                </div>
            ) : showLoginCard ?
                (
                    <div className={`flex items-center justify-center h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>

                        <div className={`p-10 rounded-lg shadow-md flex flex-col h-[320px] ${darkMode ? "bg-gray-800" : "bg-white"}`}>

                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-[16px] md:text-[18px] font-semibold">Log in to enjoy a seamless shopping experience</h2>
                                <button onClick={handleCloseLoginCard} className="text-2xl cursor-pointer hover:opacity-70">
                                    &times;
                                </button>
                            </div>

                            <LoginCard darkMode={darkMode} user={user} setUser={setUser} onClose={handleCloseLoginCard} />
                        </div>


                    </div>
                ) :
                null
            }
        </>
    );
}

export default Profile;