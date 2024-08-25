import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UserPage.css";
import Img from "./landing.png";

function UserPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const userName = location.state?.userName || "User";
	const {
		firstName,
		phoneNumber,
		location: userLocation,
	} = location.state || {};
	const [showModal, setShowModal] = useState(false);
	const [actionType, setActionType] = useState("DELETE"); // Default to DELETE
	const [rags, setRags] = useState([]);

	useEffect(() => {
		// Load data from local storage on component mount
		const storedRags = JSON.parse(localStorage.getItem("rags")) || [];
		setRags(storedRags);
	}, []);

	const handleLoginClick = () => {
		navigate("/");
	};

	const handleProfileClick = () => {
		navigate("/profilepage");
	};

	const handleAssignedWorkClick = () => {
		navigate("/workform");
	};

	const handleCompletedClick = () => {
		navigate("/completed");
	};

	const handleRemoveRagClick = () => {
		setActionType("DELETE");
		setShowModal(true);
	};

	const handleAddRagClick = () => {
		setActionType("POST");
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleConfirmAction = async () => {
		if (actionType === "POST") {
			// Store data in backend
			const newRag = {
				name: firstName,
				phone: phoneNumber,
				location: userLocation,
			};
			try {
				const response = await fetch("http://localhost:8000/api/rag", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newRag),
				});
				const data = await response.json();
				if (response.ok) {
					// Update local storage if successful
					const updatedRags = [...rags, newRag];
					localStorage.setItem("rags", JSON.stringify(updatedRags));
					setRags(updatedRags);
					console.log("Rag entry stored successfully");
				} else {
					console.error(data.error);
				}
			} catch (error) {
				console.error("Error storing rag entry:", error);
			}
		} else if (actionType === "DELETE") {
			// Remove data from backend
			const ragToDelete = {
				name: firstName,
				phone: phoneNumber,
				location: userLocation,
			};
			try {
				const response = await fetch("http://localhost:8000/api/rag", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(ragToDelete),
				});
				const data = await response.json();
				if (response.ok) {
					// Update local storage if successful
					const updatedRags = rags.filter(
						(rag) =>
							rag.name !== firstName ||
							rag.phone !== phoneNumber ||
							rag.location !== userLocation
					);
					localStorage.setItem("rags", JSON.stringify(updatedRags));
					setRags(updatedRags);
					console.log("Rag entry removed successfully");
				} else {
					console.error(data.error);
				}
			} catch (error) {
				console.error("Error removing rag entry:", error);
			}
		}
		setShowModal(false);
	};

	return (
		<>
			<link
				href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
				rel="stylesheet"
			/>
			<div className="min-h-screen flex flex-col bg-gray-50">
				{/* Header */}
				<div className="fixed text-blue-800 px-4 sm:px-10 py-1 z-10 w-full bg-white shadow-md">
					<div className="flex items-center justify-between py-2 text-2xl sm:text-5xl">
						<div className="font-bold text-gray-800 text-lg sm:text-xl">
							Clean<span className="text-blue-600">Stream</span>
						</div>
						<div className="flex items-center text-gray-500">
							<span
								className="material-icons-outlined p-1 sm:p-2"
								style={{ fontSize: "20px" }}
							>
								search
							</span>
							<span
								className="material-icons-outlined p-1 sm:p-2"
								style={{ fontSize: "20px" }}
							>
								notifications
							</span>
							<div
								className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-8 w-8 sm:h-12 sm:w-12 ml-2"
								style={{
									backgroundImage: `url(${Img})`,
								}}
							></div>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex flex-col sm:flex-row flex-grow pt-24 px-4 sm:px-10 pb-4">
					{/* Sidebar */}
					<div className="hidden sm:block sm:w-2/12 sm:mr-6 mb-6 sm:mb-0">
						<div className="rounded-xl shadow-lg px-6 py-4 bg-white">
							<button
								onClick={handleLoginClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									dashboard
								</span>
								Home
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							<button
								onClick={handleAssignedWorkClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									tune
								</span>
								Assign Work
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							<button
								onClick={handleCompletedClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									file_copy
								</span>
								Completed Work
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							{/* Add Rag Entry Button */}
							<button
								onClick={handleAddRagClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									add
								</span>
								Add Rag Entry
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							{/* Remove Rag Entry Button */}
							<button
								onClick={handleRemoveRagClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									remove
								</span>
								Remove Rag Entry
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
						</div>

						<div className="rounded-xl shadow-lg mt-6 px-6 py-4 bg-white">
							<button
								onClick={handleProfileClick}
								className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									face
								</span>
								Profile
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							<button className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full">
								<span className="material-icons-outlined float-left pr-2">
									settings
								</span>
								Donate
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
							<button
								onClick={handleLoginClick}
								className="inline-block text-gray-600 hover:text-red-600 my-4 w-full"
							>
								<span className="material-icons-outlined float-left pr-2">
									power_settings_new
								</span>
								Log out
								<span className="material-icons-outlined float-right">
									keyboard_arrow_right
								</span>
							</button>
						</div>
					</div>

					{/* Content Area */}
					<div className="w-full sm:w-10/12">
						<div className="flex flex-col sm:flex-row">
							<div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 border rounded-xl w-full sm:w-7/12 mr-0 sm:mr-2 mb-4 sm:mb-0 p-6 shadow-lg">
								<p className="text-4xl sm:text-5xl text-white">
									Welcome <br />
									<strong>{userName}</strong>
								</p>
							</div>

							<div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 border rounded-xl w-full sm:w-5/12 ml-0 sm:ml-2 p-6 shadow-lg">
								<p className="text-4xl sm:text-5xl text-white">
									Assign Work <br />
									<strong>10</strong>
								</p>
								<button
									onClick={handleAssignedWorkClick}
									className="bg-yellow-600 text-lg sm:text-xl text-white hover:bg-yellow-500 inline-block rounded-full mt-8 sm:mt-12 px-6 sm:px-8 py-2"
								>
									<strong>View</strong>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Modal */}
				{showModal && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
						<div className="bg-white p-6 rounded-lg shadow-lg w-80">
							<h2 className="text-xl font-bold mb-4">
								{actionType === "POST" ? "Add Rag Entry" : "Remove Rag Entry"}
							</h2>
							<p className="mb-4">
								Are you sure you want to {actionType.toLowerCase()} the rag
								entry for {firstName}?
							</p>
							<div className="flex justify-between">
								<button
									onClick={handleConfirmAction}
									className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
								>
									Confirm
								</button>
								<button
									onClick={handleCloseModal}
									className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default UserPage;
