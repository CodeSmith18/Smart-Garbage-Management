import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Completed() {
	const [work, setWork] = useState([]);
	const navigate = useNavigate();
	const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage

	useEffect(() => {
		// Ensure userId is available
		if (userId) {
			axios
				.get(`http://localhost:8000/archive/${userId}`) // Pass userId as a URL parameter
				.then((response) => {
					setWork(response.data); // Set the fetched data to the state
				})
				.catch((error) => {
					console.error("There was an error fetching the archived work:", error);
				});
		} else {
			console.warn("No user ID found in local storage.");
		}
	}, [userId]); // Dependency array includes userId

	return (
		<div className="container mx-auto px-4">
			<div className="py-8">
				<h1 className="text-4xl font-bold text-center text-gray-800">
					Completed Tasks/Complains
				</h1>
			</div>
			<div className="flex flex-col items-center">
				{work.length > 0 ? (
					work.map((task, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-3xl"
						>
							<div className="border-b pb-4 mb-4">
								<h2 className="text-2xl font-semibold text-gray-900">{task.name}</h2>
								{/* <p className="text-sm text-gray-600">User ID: {task.userId}</p> */}
							</div>
							<div className="text-gray-700">
								<p><strong>Phone:</strong> {task.phone}</p>
								<p><strong>Address:</strong> {task.address}</p>
								<p><strong>Service:</strong> {task.service}</p>
								<p><strong>Message:</strong> {task.message}</p>
							</div>
						</div>
					))
				) : (
					<p className="text-lg text-gray-600">No completed tasks or complains yet.</p>
				)}
			</div>
		</div>
	);
}

export default Completed;
