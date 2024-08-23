import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../landing_Page/landing.css";
const NavBar = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};
	const handleSignupClick = () => {
		navigate("/signup");
	};
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
				navbar ? "bg-black" : "bg-transparent"
			} text-white`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold">My Website</h1>
					</div>
					<div className="">
						<div className=" p-1 pr-2 ml-10 flex items-baseline space-x-4">
							<button
								onClick={handleSignupClick}
								className="px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all transform hover:bg-gray-700 hover:-translate-y-0.5"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
