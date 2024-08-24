import React from "react";

function Rag() {
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
					{/* Card 1 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Overview</h2>
						<p className="text-gray-700">
							View the summary of your recent activity and tasks.
						</p>
					</div>

					{/* Card 2 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Tasks</h2>
						<p className="text-gray-700">
							Manage your tasks and track your progress.
						</p>
					</div>

					{/* Card 3 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Messages</h2>
						<p className="text-gray-700">
							Check your messages and respond to requests.
						</p>
					</div>

					{/* Card 4 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Reports</h2>
						<p className="text-gray-700">
							Generate and download reports based on your activity.
						</p>
					</div>

					{/* Card 5 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Profile</h2>
						<p className="text-gray-700">
							Update your profile and account settings.
						</p>
					</div>

					{/* Card 6 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-bold mb-2">Support</h2>
						<p className="text-gray-700">
							Contact support or access the help center.
						</p>
					</div>
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
