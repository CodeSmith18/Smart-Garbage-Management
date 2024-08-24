import React from 'react';
import './UserPage.css';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/");
	};
	const handleLoginClick2 = () => {
		navigate("/profilepage");
	};
  const handleLoginClick3 = () => {
		navigate("/assignedwork");
	};
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
      <div className=" min-h-screen" style={{ backgroundColor: '#357960' }}>
        <div className="fixed text-blue-800 px-4 sm:px-10 py-1 z-10 w-full" style={{ backgroundColor: '#afafaf' }}>
          <div className="flex items-center justify-between py-2 text-2xl sm:text-5xl">
            <div className="font-bold text-blue-900 text-lg sm:text-xl">
              THE<span className="text-orange-600">COD</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="material-icons-outlined p-1 sm:p-2" style={{ fontSize: '20px' }}>
                search
              </span>
              <span className="material-icons-outlined p-1 sm:p-2" style={{ fontSize: '20px' }}>
                notifications
              </span>
              <div
                className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-8 w-8 sm:h-12 sm:w-12 ml-2"
                style={{
                  backgroundImage: "url('https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg')"
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row pt-24 px-4 sm:px-10 pb-4">
          <div className="w-full sm:w-2/12 sm:mr-6 mb-6 sm:mb-0">
            <div className=" rounded-xl shadow-lg px-6 py-4" style={{ backgroundColor: '#afafaf' }}>
              <button onClick={handleLoginClick} className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">dashboard</span>
                Home
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
              <button onClick={handleLoginClick3} className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">tune</span>
                Assigned Work
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
              <button onClick={handleLoginClick3} className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">file_copy</span>
                Completed Work
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
            </div>

            <div className=" rounded-xl shadow-lg mt-6 px-6 py-4" style={{ backgroundColor: '#afafaf' }}>
              <button onClick={handleLoginClick2} className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">face</span>
                Profile
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
              <button href="#" className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">settings</span>
                Settings
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
              <button onClick={handleLoginClick} className="inline-block text-gray-600 hover:text-black my-4 w-full">
                <span className="material-icons-outlined float-left pr-2">power_settings_new</span>
                Log out
                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
              </button>
            </div>
          </div>

          <div className="w-full sm:w-10/12">
            <div className="flex flex-col sm:flex-row">
              <div
                className="bg-no-repeat bg-red-200 border rounded-xl w-full sm:w-7/12 mr-0 sm:mr-2 mb-4 sm:mb-0 p-6"
                style={{ backgroundColor: '#f5625d' }}
              >
                <p className="text-4xl sm:text-5xl text-indigo-900">
                  Welcome <br />
                  <strong>User</strong>
                </p>
                <span className="bg-red-300 text-lg sm:text-xl text-white inline-block rounded-full mt-8 sm:mt-12 px-6 sm:px-8 py-2">
                  <strong></strong>
                </span>
              </div>

              <div
                className="bg-no-repeat border rounded-xl w-full sm:w-5/12 ml-0 sm:ml-2 p-6"
                style={{ backgroundColor: '#f4bd1a' }}
              >
                <p className="text-4xl sm:text-5xl text-indigo-900">
                  Assigned Work <br />
                  <strong>10</strong>
                </p>
                <button
                  onClick={handleLoginClick3}
                  className="bg-orange-300 text-lg sm:text-xl text-white underline hover:no-underline inline-block rounded-full mt-8 sm:mt-12 px-6 sm:px-8 py-2"
                >
                  <strong>View</strong>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row h-64 mt-6">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full sm:w-4/12 mb-4 sm:mb-0">
              "Reduce, reuse, recycle isn’t just a slogan; it’s a way of life.""
              </div>
              <div className="bg-white rounded-xl shadow-lg mx-0 sm:mx-6 px-6 py-4 w-full sm:w-4/12 mb-4 sm:mb-0">
              "We do not inherit the earth from our ancestors, we borrow it from our children.""
              </div>
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full sm:w-4/12">
              "The future of humanity and indeed, all life on earth, depends on us."
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
