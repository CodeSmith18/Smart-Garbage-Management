import React from 'react';
import Img from './landing.png';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/");
	};
	const handleLoginClick2 = () => {
		navigate("/profilepage");
	};
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <header className="w-full bg-gray-600 text-white py-4 px-6 shadow-md">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <nav className="space-x-4">
                        <button onClick={handleLoginClick} className="hover:underline" >Home</button>
                        <button onClick={handleLoginClick2} className="hover:underline">Profile</button>
                        <button href="#" className="hover:underline">Settings</button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center mt-6">
                {/* Image Section */}
                <img 
                    src={Img} 
                    alt="Dashboard" 
                    className="w-full max-w-4xl object-cover xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] rounded-lg shadow-lg"
                />
                
                {/* Overview Section */}
                <section className="text-center mt-6 max-w-4xl px-4">
                    <h2 className="text-gray-800 dark:text-white text-3xl font-bold">Dashboard Overview</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Welcome to the dashboard. Here you can view various statistics, insights, and manage your account settings. This area provides a snapshot of your key metrics and updates.
                    </p>
                </section>

                {/* Statistics Cards */}
                <section className="mt-6 w-full max-w-4xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Complains</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">500</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Completed</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">320</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Pending</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">180</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-4 mt-6">
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} COD. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default AdminDashboard;