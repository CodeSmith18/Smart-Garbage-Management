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
					console.error(
						"There was an error fetching the archived work:",
						error
					);
				});
		} else {
			console.warn("No user ID found in local storage.");
		}
	}, [userId]); // Dependency array includes userId
	// Dependency array includes userId

	return (
		<div>
			<div className="border-1 border-black">
				<h1 className="text-3xl mt-8 ml-4">Completed Tasks/Complains</h1>
			</div>
			<div className="flex flex-col items-center justify-center mt-8">
				{work.length > 0 ? (
					work.map((task, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded p-4 mb-4 w-1/2"
						>
							<p className="text-gray-700">User ID: {task.userId}</p>{" "}
							{/* Display user ID */}
							<h2 className="text-xl font-bold">{task.name}</h2>
							<p className="text-gray-700">Phone: {task.phone}</p>
							<p className="text-gray-700">Address: {task.address}</p>
							<p className="text-gray-700">Service: {task.service}</p>
							<p className="text-gray-700">Message: {task.message}</p>
						</div>
					))
				) : (
					<p className="text-gray-700">No work assigned yet.</p>
				)}
			</div>
		</div>
	);
}

export default Completed;
