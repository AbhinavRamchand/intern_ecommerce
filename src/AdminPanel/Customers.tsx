interface Customer {
    id: number;
    name: string;
    email: string;
    orders: number;
    status: "Active" | "Blocked";
}

function Customers() {
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
            name: "Priya",
            email: "priya@gmail.com",
            orders: 7,
            status: "Active"
        },
        {
            id: 4,
            name: "Aman Verma",
            email: "aman@gmail.com",
            orders: 2,
            status: "Blocked"
        },
        {
            id: 5,
            name: "Neha Rai",
            email: "neha@gmail.com",
            orders: 4,
            status: "Active"
        },
        {
            id: 6,
            name: "Rohan Mehta",
            email: "rohan@gmail.com",
            orders: 1,
            status: "Active"
        }

    ];

    return (
        <div className="min-h-screen bg-[#F7F6F3] px-5 py-6 md:px-8 ">

            <div className="mb-8">
                <h2 className="font-bold text-[#7E6A5A] text-xl md:text-2xl">Customers</h2>
                <p className="text-[10px] md:text-[12px] text-gray-500  mt-1">Manage your CURATE customers</p>
            </div>


            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full text-sm ">
                        <thead>
                            <tr className="bg-[#F7F6F3] text-gray-500 text-left">
                                <th className="px-5 py-3 font-medium">Customer</th>
                                <th className="px-5 py-3 font-medium">Email</th>
                                <th className="px-5 py-3 font-medium">Orders</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id} className="border-t border-gray-100 hover:bg-[#FAF9F7]/50 transition">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">

                                            <div className="w-9 h-9 rounded-full bg-[#7E6A5A]/10 flex items-center justify-center
                                             text-[#7E6A5A] font-semibold">{customer.name.charAt(0)}
                                            </div>

                                            <span className="font-medium text-gray-700 text-nowrap">{customer.name}
                                            </span>

                                        </div>
                                    </td>

                                    <td className="px-4 py-3 text-gray-500"> {customer.email} </td>
                                    <td className="px-4 py-3 text-gray-700">    {customer.orders}</td>

                                    <td className="px-4 py-3">
                                        <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                                                customer.status === "Active" ? "bg-green-100 text-green-600": "bg-red-100 text-red-500"
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <button className='px-3 py-1.5 rounded-md bg-[#7E6A5A]/10
                                         text-[#7E6A5A] hover:bg-[#7E6A5A] hover:text-white transition cursor-pointer text-[13px]'>
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
