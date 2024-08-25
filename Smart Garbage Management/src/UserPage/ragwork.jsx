import React, { useEffect, useState } from "react";

function Rag() {
	const [rags, setRags] = useState([]);

	// Fetch data from the backend when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:8000/api/rag");
				if (response.ok) {
					const data = await response.json();
					console.log("Fetched data:", data); // Log the data
					setRags(data);
				} else {
					console.error("Failed to fetch data");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col min-h-screen bg-gray-100 sm:flex-row">
			{/* Sidebar (only visible on large screens) */}
			<div className="bg-slate-700 hidden lg:block text-white w-full sm:w-64 py-6 px-4 shadow-lg sm:fixed sm:top-0 sm:left-0 sm:bottom-0 sm:flex sm:flex-col sm:items-start">
				<div className="font-bold text-gray-800 text-3xl mb-8 ">
					Clean<span className="text-blue-600">Stream</span>
				</div>
				<ul className="ml-4">
					<li className="mb-6">
						<a href="#" className="text-lg hover:text-gray-300">
							Home
						</a>
					</li>
					<li className="mb-6">
						<a href="#" className="text-lg hover:text-gray-300">
							Profile
						</a>
					</li>
					<li className="mb-6">
						<a href="#" className="text-lg hover:text-gray-300">
							Settings
						</a>
					</li>
					<li>
						<a href="#" className="text-lg hover:text-gray-300">
							Logout
						</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-6 sm:ml-64">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-4xl font-bold">Welcome Ragpicker</h1>
					<button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
						New Task
					</button>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{rags.map((rag, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-md">
							<h2 className="text-xl font-bold mb-2">{rag.name}</h2>
							<p className="text-gray-700">Phone: {rag.phone}</p>
							<p className="text-gray-700">Location: {rag.location}</p>
						</div>
					))}
				</div>
			</div>

			{/* Footer Dashboard for small and medium screens */}
			<div className="bg-slate-700 text-white p-4 sm:hidden">
				<div className="font-bold text-gray-800 text-xl ml-4 mb-2">
					Clean<span className="text-blue-600">Stream</span>
				</div>
				<ul className="flex justify-around">
					<li>
						<a href="#" className="text-lg hover:text-gray-300">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="text-lg hover:text-gray-300">
							Profile
						</a>
					</li>
					<li>
						<a href="#" className="text-lg hover:text-gray-300">
							Settings
						</a>
					</li>
					<li>
						<a href="#" className="text-lg hover:text-gray-300">
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Rag;
