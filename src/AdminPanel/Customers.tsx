import { useOutletContext } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect } from "react";
import AddCustomer from "./AdminPanelComponents/AddCustomer";
import EditCustomer from "./AdminPanelComponents/EditCustomer";



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

    const { darkMode } = useOutletContext<DashoardProps>();

    const [customers, setCustomers] = useState<Customer[]>([
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
            status: "Blocked"
        }, {
            id: 6,
            name: "Luka Modric",
            email: "luka@gmail.com",
            orders: 10,
            status: "Active"
        }
    ]);

    const [addModelOpen, setAddModelOpen] = useState(false);
    const [editModelOpen, setEditModelOpen] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [customersPerPage,setCustomersPerPage] = useState<number>(4);


    const handleCustomer = (newCustomer: Omit<Customer, "id">) => {
        const newId = customers.length > 0 ? Math.max(...customers.map((customer) => customer.id)) + 1 : 1;

        const customer: Customer = {
            id: newId,
            ...newCustomer
        };

        setCustomers((previousCustomers) => [
            ...previousCustomers,
            customer
        ]);
        setAddModelOpen(false);
    }

    const handleDeleteCustomer = (id: number) => {
        setCustomers((previousCustomers) =>
            previousCustomers.filter((customer) => customer.id !== id));
    };

    const handleOpenEdit = (customer: Customer) => {
        setSelectedCustomer(customer);
        setEditModelOpen(true);
    };

    const handleEditCustomer = (updatedCustomer: Customer) => {
        setCustomers((previousCustomers) =>
            previousCustomers.map((customer) =>
                customer.id === updatedCustomer.id ? updatedCustomer : customer)
        );

        setEditModelOpen(false);
        setSelectedCustomer(null);
    }

    useEffect(() => {

    const updateUsersPerPage = () => {
        const height = window.innerHeight;

        if (height < 600) {
            setCustomersPerPage(4);
        } else if (height < 700) {
            setCustomersPerPage(7);
        } else if (height < 800) {
            setCustomersPerPage(8);
        } else {
            setCustomersPerPage(10);
        }
    };

    updateUsersPerPage();

    window.addEventListener("resize", updateUsersPerPage);

    return () => {
        window.removeEventListener("resize", updateUsersPerPage);
    };

}, []);

    const startIndex = (currentPage - 1) * customersPerPage;
    const endIndex = startIndex + customersPerPage;

    const currentCustomers = customers.slice(startIndex, endIndex);

    const totalPages = Math.ceil(customers.length / customersPerPage);



    return (
        <div className={`min-h-full px-5 py-6 md:px-8 ${darkMode ? "bg-black" : "bg-[#F7F6F3]"} `}>

            <div className="mb-8 flex justify-between ">
                <div>
                    <h2 className={`font-bold text-xl md:text-2xl ${darkMode ? "text-white" : "text-[#7E6A5A]"}`}>Customers</h2>
                    <p className={`text-[10px] md:text-[12px] mt-1 ${darkMode ? "text-white/80" : "text-[#7E6A5A]"}`}>
                        Manage your CURATE customers</p>
                </div>
                <button
                    type="button" onClick={() => setAddModelOpen(true)}
                    className="flex items-center gap-1 bg-[#7E6A5A] text-white rounded-lg px-2 h-10
                     text-sm hover:bg-[#5a4a3a] cursor-pointer"
                >
                    <AddIcon />
                    <p>Add Customer</p>
                </button>

            </div>



            <div className={`rounded-xl shadow-sm overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm ">
                        <thead>
                            <tr className={` text-left ${darkMode ? "bg-gray-800 text-white" : "bg-[#F7F6F3] text-gray-500"}`}>
                                <th className="px-5 py-3 font-medium">Customer</th>
                                <th className="px-5 py-3 font-medium">Email</th>
                                <th className="px-5 py-3 font-medium">Orders</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentCustomers.map((customer) => (
                                <tr key={customer.id} className={`border-t transition
                                ${darkMode ? "border-none hover:bg-gray-700" : "border-gray-100 hover:bg-[#FAF9F7]/50"}`}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">

                                            <div className={`w-9 h-9 rounded-full flex items-center justify-center 
                                             text-[#7E6A5A] font-semibold ${darkMode ? "text-white bg-gray-800" : " text-[#7E6A5A] bg-[#7E6A5A]/10"}`}>{customer.name.charAt(0)}
                                            </div>

                                            <span className={`font-medium text-nowrap ${darkMode ? "text-white" : "text-gray-700"}`}>{customer.name}
                                            </span>

                                        </div>
                                    </td>

                                    <td className={`px-4 py-3  ${darkMode ? "text-white" : "text-gray-700"}`}> {customer.email} </td>
                                    <td className={`px-4 py-3 ${darkMode ? "text-white" : "text-gray-700"} `}>    {customer.orders}</td>

                                    <td className="px-4 py-3">
                                        <span className={`px-4 py-1 rounded-full text-xs font-medium ${customer.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex gap-1 ">
                                            <EditIcon fontSize="small" className="text-blue-400 hover:text-blue-500"
                                                onClick={() => handleOpenEdit(customer)} />
                                            <DeleteIcon fontSize="small" className="text-red-400 hover:text-red-500"
                                                onClick={() => handleDeleteCustomer(customer.id)} />
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
                    className="px-4 py-2 rounded-xl bg-[#7E6A5A] text-white disabled:opacity-40
                   disabled:cursor-not-allowed cursor-pointer"
                >Previous </button>

                <span
                    className={`px-4 py-1 rounded-xl font-semibold ${darkMode ? "text-white" : "text-[#7E6A5A]"
                        }`}>{currentPage} of {totalPages}</span>

                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}
                    className="px-4 py-1 rounded-xl bg-[#7E6A5A] text-white disabled:opacity-40
                   disabled:cursor-not-allowed cursor-pointer">Next
                </button>

            </div>

            {addModelOpen && (
                <AddCustomer darkMode={darkMode} onClose={() => setAddModelOpen(false)}
                    onAddCustomer={handleCustomer} />
            )}

            {editModelOpen && selectedCustomer && (
                <EditCustomer darkMode={darkMode} customer={selectedCustomer}
                    onClose={() => {
                        setEditModelOpen(false);
                        setSelectedCustomer(null);
                    }}
                    onEditCustomer={handleEditCustomer} />
            )}


        </div>
    )
}

export default Customers;
