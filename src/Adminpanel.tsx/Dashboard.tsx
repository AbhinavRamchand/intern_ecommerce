
import {
  BadgeDollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";
import {useOutletContext} from "react-router-dom"

interface DashoardProps {
  darkMode: boolean;
}

function Dashboard() {
  const {darkMode}=useOutletContext<DashoardProps>();
  return (
    <div
      className={`min-h-screen h-240 ${
        darkMode ? "bg-black" : "bg-[#F6F5F1]"
      } px-6 py-8 md:px-10`}
    >
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2
            className={`text-3xl font-semibold tracking-tight ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Dashboard
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

  
        <div
          className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
              <BadgeDollarSign size={23} />
            </div>
          </div>

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Total Sales
          </p>

          <h3
            className={`mt-1 text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            ₹85,000
          </h3>
        </div>

      
        <div
          className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
              <ShoppingCart size={23} />
            </div>
          </div>

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Total Orders
          </p>

          <h3
            className={`mt-1 text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            245
          </h3>
        </div>

   
        <div
          className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
              <Users size={23} />
            </div>
          </div>

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Total Customers
          </p>

          <h3
            className={`mt-1 text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            1,250
          </h3>
        </div>

    
        <div
          className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
              <Package size={23} />
            </div>
          </div>

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Total Products
          </p>

          <h3
            className={`mt-1 text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            386
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

