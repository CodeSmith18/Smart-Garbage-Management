import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UserPage.css";
import Img from "./landing.png";

function UserPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "User"; // Default to "User" if name is not available

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profilepage");
  };

	const handleAssignedWorkClick = () => {
		navigate("/workform");
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
							<button className="inline-block text-gray-600 hover:text-blue-600 my-4 w-full">
								<span className="material-icons-outlined float-left pr-2">
									file_copy
								</span>
								Completed Work
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
                Settings
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

            <div className="flex flex-col sm:flex-row h-64 mt-6">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full sm:w-4/12 mb-4 sm:mb-0">
                "Reduce, reuse, recycle isn’t just a slogan; it’s a way of
                life."
              </div>
              <div className="bg-white rounded-xl shadow-lg mx-0 sm:mx-6 px-6 py-4 w-full sm:w-4/12 mb-4 sm:mb-0">
                "We do not inherit the earth from our ancestors, we borrow it
                from our children."
              </div>
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full sm:w-4/12">
                "The future of humanity and indeed, all life on earth, depends
                on us."
              </div>
            </div>
          </div>
        </div>

				{/* Footer (for small screens) */}
				<div className="block sm:hidden w-full mt-auto py-4 px-6 bg-gray-200 shadow-md">
					<div className="flex justify-around">
						<button
							onClick={handleLoginClick}
							className="flex flex-col items-center text-gray-600 hover:text-blue-600"
						>
							<span className="material-icons-outlined">dashboard</span>
							Home
						</button>
						<button
							onClick={handleAssignedWorkClick}
							className="flex flex-col items-center text-gray-600 hover:text-blue-600"
						>
							<span className="material-icons-outlined">tune</span>
							Work
						</button>
						<button
							onClick={handleProfileClick}
							className="flex flex-col items-center text-gray-600 hover:text-blue-600"
						>
							<span className="material-icons-outlined">face</span>
							Profile
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserPage;
