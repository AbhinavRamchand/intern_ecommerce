import {useOutletContext} from "react-router-dom"

interface Customer {
    id: number;
    name: string;
    email: string;
    orders: number;
    status: "Active" | "Blocked";
}

interface DashoardProps {
  darkMode: boolean;
}


function Customers() {

      const {darkMode}=useOutletContext<DashoardProps>();

    const customers: Customer[] = [
        {
            id: 1,
            name: "Anish Ra",
            email: "anish@gmail.com",
            orders: 5,
            status: "Active"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            orders: 3,
            status: "Active"
        },
        {
            id: 3,
            name: "Aman Verma",
            email: "aman@gmail.com",
            orders: 2,
            status: "Blocked"
        },
        {
            id: 4,
            name: "Neha Rai",
            email: "neha@gmail.com",
            orders: 4,
            status: "Active"
        },
        {
            id: 5,
            name: "Rohan Mehta",
            email: "rohan@gmail.com",
            orders: 1,
            status: "Active"
        }

    ];

    return (
        <div className={`h-full px-5 py-6 md:px-8 ${darkMode? "bg-black":"bg-[#F7F6F3]"} `}>

            <div className="mb-8">
                <h2 className={`font-bold text-xl md:text-2xl ${darkMode?"text-white":"text-[#7E6A5A]"}`}>Customers</h2>
                <p className={`text-[10px] md:text-[12px] mt-1 ${darkMode?"text-white/80":"text-[#7E6A5A]"}`}>
                Manage your CURATE customers</p>
            </div>


            <div className={`rounded-xl shadow-sm overflow-hidden ${darkMode?"bg-gray-900":"bg-white"}`}>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm ">
                        <thead>
                            <tr className={` text-left ${darkMode? "bg-gray-800 text-white":"bg-[#F7F6F3] text-gray-500"}`}>
                                <th className="px-5 py-3 font-medium">Customer</th>
                                <th className="px-5 py-3 font-medium">Email</th>
                                <th className="px-5 py-3 font-medium">Orders</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id} className={`border-t transition
                                ${darkMode ?"border-none hover:bg-gray-700":"border-gray-100 hover:bg-[#FAF9F7]/50"}`}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">

                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center 
                                             text-[#7E6A5A] font-semibold ${darkMode?"text-white bg-gray-800":" text-[#7E6A5A] bg-[#7E6A5A]/10"}`}>{customer.name.charAt(0)}
                                            </div>

                                            <span className={`font-medium text-nowrap ${darkMode?"text-white":"text-gray-700"}`}>{customer.name}
                                            </span>

                                        </div>
                                    </td>

                                    <td className={`px-4 py-3  ${darkMode?"text-white":"text-gray-700"}`}> {customer.email} </td>
                                    <td className={`px-4 py-3 ${darkMode?"text-white":"text-gray-700"} `}>    {customer.orders}</td>

                                    <td className="px-4 py-3">
                                        <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                                                customer.status === "Active" ? "bg-green-100 text-green-600": "bg-red-100 text-red-500"
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <button className={`px-3 py-1.5 rounded-md 
                                       transition cursor-pointer text-[13px]
                                        ${darkMode? "text-white bg-gray-800": "bg-[#7E6A5A]/10 text-[#7E6A5A] hover:bg-[#7E6A5A] hover:text-white "}`}>
                                         View</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>


            </div>


        </div>
    )
}

export default Customers;
