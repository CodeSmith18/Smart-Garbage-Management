import React from "react";

function ComplainForm() {
	return (
		<div className="max-w-sm mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
			<div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
				Assign Work
			</div>
			<form className="py-4 px-6" action="" method="POST">
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="name">
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
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
						placeholder="Enter your phone number"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
						Address
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone"
						type="tel"
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
