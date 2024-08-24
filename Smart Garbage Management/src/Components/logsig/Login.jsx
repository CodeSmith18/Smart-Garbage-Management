import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
		<div className={styles.container}>
			<form
				className={styles.formLogin}
				onSubmit={handleSubmit}
				autoComplete="off"
			>
				<h2>Login</h2>
				<label htmlFor="userType">Select User Type:</label>
				<select id="userType" value={userType} onChange={handleUserTypeChange}>
					<option value="worker">Worker</option>
					<option value="client">Client</option>
					<option value="admin">Admin</option>
				</select>
				<div>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Login</button>
				<div
					style={{
						color: "#a29494",
						textAlign: "center",
						display: "inline-block",
						width: "100%",
					}}
				>
					Don&apos;t have an account? <Link to="/signup">Create account</Link>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Login;
