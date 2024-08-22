import React from "react";
import i1 from "../assets/images/landing.png";
import "./landing.css";

function Landing() {
	return (
		<div className="relative h-screen">
			<img
				src={i1}
				alt=""
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-40"></div>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
				<h1 className="heading w-4/5 text-3xl mb-16 font-bold text-white px-4">
					Hello world! Waste management is intended to reduce the adverse
					effects of waste on human health and the environment.
				</h1>
				<div className="mt-4 glass h-12 w-80 flex justify-center items-center">
					<h2 className="text-white text-xl text-center">
						Don't have an Account?{"  "}
					</h2>
					<div className="text-white text-xl text-center underline">SignUP</div>
				</div>
				<div className="text-white mt-4 h-10 glass w-24 flex justify-center items-center text-xl text-center">
					LOGIN
				</div>
			</div>
		</div>
	);
}

export default Landing;
