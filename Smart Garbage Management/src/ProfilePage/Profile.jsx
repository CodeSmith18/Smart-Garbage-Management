import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import landingImage from "./landing.png";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("");
	const [location, setLocation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		const userId = localStorage.getItem("userId");
		const userType = localStorage.getItem("userType");

		console.log("UserID:", userId, "UserType:", userType);

		const url =
			userType === "worker"
				? `http://localhost:8000/profile_worker/${userId}`
				: `http://localhost:8000/profile_user/${userId}`;

		axios
			.get(url)
			.then((response) => {
				console.log("Response data:", response.data);
				if (response.data) {
					const userData = response.data;
					setFirstName(userData.firstName || "");
					setLastName(userData.lastName || "");
					setDob(userData.dob || "");
					setGender(userData.gender || "");
					setLocation(userData.location || "");
					setPhoneNumber(userData.phoneNumber || "");
					setEmail(userData.email || "");
				} else {
					console.log("No user data found");
				}
			})
			.catch((error) => {
				console.error("Error fetching user data:", error);
			});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userId = localStorage.getItem("userId");
		const userType = localStorage.getItem("userType");

		const url =
			userType === "worker"
				? "http://localhost:8000/profile_worker"
				: "http://localhost:8000/profile_user";

		const userData = {
			userId,
			firstName,
			lastName,
			dob,
			gender,
			location,
			phoneNumber,
			email,
		};

		try {
			const response = await axios.post(url, userData);
			console.log("Profile updated successfully:", response.data);
		} catch (error) {
			console.error("There was an error saving the data:", error);
		}
		navigate("/userpage", {
			state: { firstName, phoneNumber, location },
		});
	};

	return (
		<section className="w-full overflow-hidden dark:bg-gray-900">
			<div className="flex flex-col">
				<img
					src={landingImage}
					alt="User Cover"
					className="w-full object-cover xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
				/>

				<div className="flex flex-col items-center sm:w-[80%] xs:w-[90%] mx-auto relative -top-[5rem] sm:-top-[4rem] xs:-top-[3rem]">
					<img
						src={landingImage}
						alt="User Profile"
						className="rounded-full lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] border-4 border-blue-500"
					/>
					<h1 className="text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif mt-4">
						{firstName}
					</h1>
				</div>

				<form
					className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4"
					onSubmit={handleSubmit}
				>
					<div className="w-full py-6 flex flex-col gap-4 sm:flex-row xs:flex-col justify-center">
						<div className="w-full flex-1 px-2">
							<dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										First Name
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="text"
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Last Name
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="text"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Date Of Birth
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="date"
											value={dob}
											onChange={(e) => setDob(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Gender
									</dt>
									<dd className="text-lg font-semibold">
										<select
											value={gender}
											onChange={(e) => setGender(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
											<option value="Other">Other</option>
										</select>
									</dd>
								</div>
							</dl>
						</div>
						<div className="w-full flex-1 px-2">
							<dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Location
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="text"
											value={location}
											onChange={(e) => setLocation(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Phone Number
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="tel"
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
								<div className="flex flex-col py-2">
									<dt className="text-gray-500 md:text-lg dark:text-gray-400">
										Email
									</dt>
									<dd className="text-lg font-semibold">
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md py-2 px-4"
										/>
									</dd>
								</div>
							</dl>
						</div>
					</div>

					<button
						type="submit"
						className="bg-blue-600 text-white py-2 px-4 rounded-md mt-6 hover:bg-blue-500 transition duration-300"
					>
						Save Changes
					</button>
				</form>

				<div className="my-10 lg:w-[70%] md:w-full xs:w-full h-[300px]">
					<h1 className="font-serif mb-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
						My Location
					</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
						className="rounded-lg w-full h-full"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
}

export default Profile;
