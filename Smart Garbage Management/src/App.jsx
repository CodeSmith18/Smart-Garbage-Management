import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Components/logsig/Login.jsx";
import Landing from "./landing_Page/landing.jsx";
import Signup from "./Components/logsig/Signup.jsx";
import AdminDashboard from "./Dashboard/Dashboard.jsx";
import UserPageD from "./UserPage/UserPage.jsx";
import Profile from "./ProfilePage/Profile.jsx";
import ComplainForm from "./AssignedWork/ComplainForm.jsx";
import AssignedWork from "./AssignedWork/AssignedWork.jsx";
import WorkerPage from "./UserPage/workerPage.jsx";
import WorkForm from "./AssignedWork/giveWork.jsx";
import Givenwork from "./AssignedWork/givenwork.jsx";
import Completed from "./Components/completed/completed.jsx";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Use the element prop instead of component */}
				<Route path="/" element={<Landing></Landing>} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<AdminDashboard />} />
				<Route path="/userpage" element={<UserPageD />} />
				<Route path="/workform" element={<WorkForm />} />
				<Route path="/worker" element={<WorkerPage />} />
				<Route path="/givenwork" element={<Givenwork />} />
				<Route path="/completed" element={<Completed />} />

				<Route path="/profilepage" element={<Profile />} />
				<Route path="/complain" element={<ComplainForm />} />
				<Route path="/assignedwork" element={<AssignedWork />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
