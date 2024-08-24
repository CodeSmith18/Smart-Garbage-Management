import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Givenwork() {
	const [work, setWork] = useState([]);
	const navigate = useNavigate();

	// Fetch data from the backend when the component mounts
	useEffect(() => {
		axios
			.get("http://localhost:8000/assignedwork")
			.then((response) => {
				setWork(response.data); // Set the fetched data to the state
			})
			.catch((error) => {
				console.error(
					"There was an error fetching the work assignments!",
					error
				);
			});
	}, []); // Empty dependency array means this effect runs once when the component mounts

	// Function to delete and archive a work assignment
	const completeTask = async (task) => {
		try {
			const userId = task.userId; // Assuming the userId is part of the task data

			// First, archive the task with the userId
			await axios.post("http://localhost:8000/archivework", {
				...task,
				userId, // Include the userId when archiving
			});

			// Then, delete the task from the current database
			await axios.delete(`http://localhost:8000/assignwork/${task._id}`);

			// Remove the deleted task from the state
			setWork(work.filter((t) => t._id !== task._id));
		} catch (error) {
			console.error("There was an error processing the task!", error);
		}
	};

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
							<h2 className="text-xl font-bold">{task.name}</h2>
							<p className="text-gray-700">User ID: {task.userId}</p>{" "}
							<p className="text-gray-700">Phone: {task.phone}</p>
							<p className="text-gray-700">Address: {task.address}</p>
							<p className="text-gray-700">Service: {task.service}</p>
							<p className="text-gray-700">Message: {task.message}</p>
							<button
								onClick={() => completeTask(task)}
								className="bg-green-500 text-white py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline mt-4"
							>
								Completed
							</button>
						</div>
					))
				) : (
					<p className="text-gray-700">No work assigned yet.</p>
				)}
			</div>
			<div className="flex items-center justify-center mt-16"></div>
		</div>
	);
}

export default Givenwork;
