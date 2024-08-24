import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComplainForm() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		// Retrieve the id from localStorage
		const id = localStorage.getItem("userId");

		const url = "http://localhost:8000/assignwork";
		const userData = {
			id, // Include the id in the data sent to the backend
			name,
			phone,
			address,
			service,
			message,
		};

		try {
			const response = await axios.post(url, userData);
			console.log("Work assigned successfully:", response.data);
		} catch (error) {
			console.error("There was an error saving the data:", error);
		}
		navigate("/workform");
	};

	return (
		<div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
			<div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
				Assign Work
			</div>
			<form className="py-4 px-6" onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="name">
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
						Phone Number
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone"
						type="tel"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Enter your phone number"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="address"
					>
						Address
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="address"
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder="Enter your Address"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="service"
					>
						Service
					</label>
					<select
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="service"
						name="service"
						value={service}
						onChange={(e) => setService(e.target.value)}
					>
						<option value="">Select a service</option>
						<option value="room_cleaning">Room Cleaning</option>
						<option value="pest_control">Pest Control</option>
						<option value="washroom_cleaning">Washroom Cleaning</option>
						<option value="lobby_cleaning">Lobby Cleaning</option>
					</select>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="message"
						rows="2"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Enter any additional information"
					></textarea>
				</div>
				<div className="flex items-center justify-center mb-4">
					<button
						className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Assign
					</button>
				</div>
			</form>
		</div>
	);
}

export default ComplainForm;
