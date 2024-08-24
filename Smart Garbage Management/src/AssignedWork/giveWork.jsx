import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WorkForm() {
	const [work, setWork] = useState([]);
	const navigate = useNavigate();
	const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage

	useEffect(() => {
		// Ensure userId is available
		if (userId) {
			axios
				.get(`http://localhost:8000/assignwork?userId=${userId}`) // Pass userId as a query parameter
				.then((response) => {
					setWork(response.data); // Set the fetched data to the state
				})
				.catch((error) => {
					console.error(
						"There was an error fetching the work assignments:",
						error
					);
				});
		} else {
			console.warn("No user ID found in local storage.");
		}
	}, [userId]); // Dependency array includes userId

	const deleteTask = (id) => {
		axios
			.delete(`http://localhost:8000/assignwork/${id}`)
			.then(() => {
				setWork(work.filter((task) => task._id !== id)); // Remove the deleted task from the state
			})
			.catch((error) => {
				console.error("There was an error deleting the task!", error);
			});
	};

	function complain() {
		navigate("/complain");
	}

	return (
		<div>
			<div className="border-1 border-black">
				<h1 className="text-3xl mt-8 ml-4">Pending Assigned Tasks/Complains</h1>
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
							<button
								onClick={() => deleteTask(task._id)}
								className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline mt-4"
							>
								Delete
							</button>
						</div>
					))
				) : (
					<p className="text-gray-700">No work assigned yet.</p>
				)}
			</div>
			<div className="flex items-center justify-center mt-16">
				<button
					onClick={complain}
					className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
				>
					Assign New Work
				</button>
			</div>
		</div>
	);
}

export default WorkForm;
