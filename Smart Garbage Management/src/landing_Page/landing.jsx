import React from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../assets/images/landing.png";
import i2 from "../assets/images/ing2.jpeg";
import i3 from "../assets/images/admin.gif";
// Import your MP4 file
import Lottie from "lottie-react";

import animationData from "../assets/animation/Admin.json";
import animationuser from "../assets/animation/user.json";
import animationworker from "../assets/animation/worker.json";

import "./landing.css";
import NavBar from "../Components/navbar";

function Landing() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<div className="relative min-h-screen">
			<NavBar />
			<div className="relative">
				<img src={i1} alt="" className="w-full h-screen object-cover" />
				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
					<h1 className="heading w-4/5 text-4xl  mt-40 mb-28 font-bold px-4">
						Waste management is intended to reduce the adverse effects of waste
						on human health and the environment.
					</h1>

					{/* <div
						onClick={handleLoginClick}
						className="cursor-pointer mt-4 h-10 glass w-24 flex justify-center items-center text-lg"
					>
						Log In
					</div> */}
					<div className="hidden   lg:flex  gap-12 lg:gap-32  flex-wrap justify-center items-center">
						<div className="flex items-center justify-center ">
							<div className="w-52 p-4  bg-slate-200 rounded-lg shadow-md border-2 border-black  transition-transform transform hover:-translate-y-4 hover:shadow-xl">
								<h2 className="text-2xl font-semibold text-gray-800">Worker</h2>
								<Lottie
									className="h-36"
									animationData={animationworker}
									loop={true}
								/>

								<div className="flex items-center justify-center ">
									<button
										onClick={handleLoginClick}
										className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center ">
							<div className="w-52 p-4 bg-slate-200  rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-3 hover:shadow-xl ">
								{/* <p className="mt-2 text-sm text-gray-600">
									iaculis non accumsan et, commodo vel justo.
								</p> */}
								<h2 className="text-2xl font-semibold text-gray-800">User</h2>

								<Lottie
									className="h-36"
									animationData={animationuser}
									loop={true}
								/>
								<div className="flex items-center justify-center ">
									<button
										onClick={handleLoginClick}
										className=" px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center ">
							<div className="w-52 p-4 bg-slate-200  rounded-lg shadow-md border-2 border-black  transition-transform transform hover:-translate-y-4 hover:shadow-xl">
								<h2 className="text-2xl font-semibold text-gray-800">RagMan</h2>
								<Lottie
									className="h-36"
									animationData={animationData}
									loop={true}
								/>
								<div className="flex items-center justify-center ">
									<button
										onClick={handleLoginClick}
										className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
									>
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
				<img src={i2} alt="" className="w-full h-screen object-cover" />

				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white">
					<div className="flex space items-center justify-center ">
						<div className="w-52 p-4 mb-8  bg-slate-200 rounded-lg shadow-md border-2 border-black  transition-transform transform hover:-translate-y-4 hover:shadow-xl">
							<h2 className="text-2xl font-semibold text-gray-800">Worker</h2>
							<Lottie
								className="h-36"
								animationData={animationworker}
								loop={true}
							/>

							<div className="flex items-center justify-center ">
								<button
									onClick={handleLoginClick}
									className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center ">
						<div className="w-52 p-4 bg-slate-200 mb-8  rounded-lg shadow-md border-2 border-black transition-transform transform hover:-translate-y-3 hover:shadow-xl ">
							{/* <p className="mt-2 text-sm text-gray-600">
									iaculis non accumsan et, commodo vel justo.
								</p> */}
							<h2 className="text-2xl font-semibold text-gray-800">User</h2>

							<Lottie
								className="h-36"
								animationData={animationuser}
								loop={true}
							/>
							<div className="flex items-center justify-center ">
								<button
									onClick={handleLoginClick}
									className=" px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center ">
						<div className="w-52 p-4 bg-slate-200  rounded-lg shadow-md border-2 border-black  transition-transform transform hover:-translate-y-4 hover:shadow-xl">
							<h2 className="text-2xl font-semibold text-gray-800">RagMan</h2>
							<Lottie
								className="h-36"
								animationData={animationData}
								loop={true}
							/>
							<div className="flex items-center justify-center ">
								<button
									onClick={handleLoginClick}
									className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
