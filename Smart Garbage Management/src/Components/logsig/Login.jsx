import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "./landing.png";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("worker");
	const navigate = useNavigate();

	const handleUserTypeChange = (event) => {
		setUserType(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const url =
			userType === "worker"
				? "http://localhost:8000/login_worker"
				: "http://localhost:8000/login_user";

		const data = { username, password };

		axios
			.post(url, data)
			.then((res) => {
				if (res.data.message) {
					toast.success(res.data.message);
					if (res.data.token) {
						localStorage.setItem("token", res.data.token);
						localStorage.setItem("userId", res.data.userId);
						localStorage.setItem("userType", userType);

						// Delay navigation to allow toast notification to display
						setTimeout(() => {
							navigate("/userpage");
						}, 500); // Adjust delay as needed (in milliseconds)
					}
				}
			})
			.catch((error) => {
				console.error("There was an error during login:", error);
				toast.error("Login failed. Please check your credentials.");
			});
	};

	return (
		<>
			<div className="py-20">
				<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
					<div
						className="hidden lg:block lg:w-1/2 bg-cover"
						style={{
							backgroundImage: `url(${Img})`,
						}}
					></div>
					<div className="w-full p-8 lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-700 text-center">
							Login
						</h2>
						<form onSubmit={handleSubmit} autoComplete="off">
							{/* <div className="mt-4">
              <label htmlFor="userType" className="block text-gray-700 text-sm font-bold mb-2">
                Select User Type:
              </label>
              <select
                id="userType"
                value={userType}
                onChange={handleUserTypeChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              >
                <option value="worker">Worker</option>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div> */}
							<div className="mt-4">
								<input
									type="text"
									name="username"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									required
								/>
							</div>
							<div className="mt-4">
								<input
									type="password"
									name="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									required
								/>
							</div>
							<div className="mt-8">
								<button
									type="submit"
									className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
								>
									Login
								</button>
							</div>
							<div className="mt-4 flex items-center justify-between">
								<span className="border-b w-1/5 md:w-1/4"></span>
								<Link
									to="/signup"
									className=" flex justify-center items-center text-xs text-gray-500 uppercase"
								>
									Create account
								</Link>
								<span className="border-b w-1/5 md:w-1/4"></span>
							</div>
						</form>
					</div>
				</div>
				<ToastContainer />
			</div>
		</>
	);
};

export default Login;
