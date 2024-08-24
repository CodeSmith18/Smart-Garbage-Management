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
		<div className="max-w-4xl mx-auto p-6">
			<div className="text-center border-b-2 border-gray-200 pb-4 mb-8">
				<h1 className="text-3xl font-bold text-gray-800">
					Pending Assigned Tasks/Complaints
				</h1>
			</div>
			<div className="flex flex-col items-center space-y-6">
				{work.length > 0 ? (
					work.map((task, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl"
						>
							<h2 className="text-2xl font-semibold text-gray-900 mb-2">
								{task.name}
							</h2>
							<div className="text-gray-700">
								{/* <p className="mb-1">
									<strong>User ID:</strong> {task.userId}
								</p> */}
								<p className="mb-1">
									<strong>Phone:</strong> {task.phone}
								</p>
								<p className="mb-1">
									<strong>Address:</strong> {task.address}
								</p>
								<p className="mb-1">
									<strong>Service:</strong> {task.service}
								</p>
								<p className="mb-1">
									<strong>Message:</strong> {task.message}
								</p>
							</div>
							<button
								onClick={() => completeTask(task)}
								className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"
							>
								Mark as Completed
							</button>
						</div>
					))
				) : (
					<p className="text-gray-700">No work assigned yet.</p>
				)}
			</div>
		</div>
	);
}

export default Givenwork;
