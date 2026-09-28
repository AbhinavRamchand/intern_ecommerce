import { useState, type SubmitEventHandler } from "react";

interface Customer {
    id: number;
    name: string;
    email: string;
    orders: number;
    status: "Active" | "Blocked";
}

interface EditCustomerModelProps {
    darkMode: boolean;
    customer: Customer;
    onClose: () => void;
    onEditCustomer: (Customer: Customer) => void;
}

function EditCustomer({ darkMode, customer, onClose, onEditCustomer }: EditCustomerModelProps) {
    const [name, setName] = useState(customer.name);
    const [email, setEmail] = useState(customer.email);
    const [orders, setOrders] = useState(customer.orders);
    const [status, setStatus] = useState<"Active" | "Blocked">(customer.status);


    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        onEditCustomer({
            id: customer.id,
            name: name.trim(),
            email: email.trim(),
            orders,
            status
        });
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">

            <div className={`w-full max-w-md rounded-xl p-6 shaadow-xl ${darkMode ? "bg-gray-900 text-white" : 
            "bg-white text-gray-800"
                }`}>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold"> Edit Customer </h2>

                    <button type="button" onClick={onClose}
                        className="text-2xl cursor-pointer hover:opacity-70">
                        &times;</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1"> Customer Name</label>

                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                            className={`w-full rounded-lg border px-3 py-2.5 outline-none ${darkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-white border-gray-200 text-gray-800"
                                }`}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>

                        <input type="email" value={email} onChange={(e) =>
                            setEmail(e.target.value)} required
                            className={`w-full rounded-lg border px-3 py-2.5 outline-none ${darkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-white border-gray-200 text-gray-800"
                                }`}
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Orders</label>

                        <input type="number" min="0" value={orders}
                            onChange={(e) => setOrders(Number(e.target.value))}
                            className={`w-full rounded-lg border px-3 py-2.5 outline-none ${darkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-white border-gray-200 text-gray-800"
                                }`}
                        />
                    </div>



                    <div>
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value as
                            | "Active" | "Blocked"
                        )}
                            className={`w-full rounded-lg border px-3 py-2.5 outline-none ${darkMode
                                ? "bg-gray-800 border-gray-700 text-white"
                                : "bg-white border-gray-200 text-gray-800"
                                }`}
                        >
                            <option value="Active">Active</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                    </div>


                    <div className="flex justify-end gap-3 pt-4">

                        <button type="button" onClick={onClose}
                            className={`px-4 py-2 rounded-lg text-sm cursor-pointer ${darkMode
                                    ? "bg-gray-800 text-white hover:bg-gray-700"
                                    : "border border-gray-200 text-gray-600 hover:bg-gray-100"
                                }`}>Cancel</button>

                        <button type="submit"
                            className="px-4 py-2 rounded-lg bg-[#7E6A5A] text-white text-sm cursor-pointer hover:bg-[#5a4a3a]"
                        >Save Changes</button>

                    </div>

                </form>


            </div >

        </div >

    )
}

export default EditCustomer;