import React from "react";
import "./AssignedWork.css";
import Img from "./landing.png";

function AssignedWork() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <div className="flex font-bold text-gray-300 text-lg sm:text-6xl justify-center pt-6">
          Assigned<span className="text-orange-600">Work!!</span>
        </div>
        <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
          {[
            {
              title: "Room Cleaning",
              Hostel: 3,
              RoomNo: 206,
            },
            {
              title: "Room Cleaning",
              Hostel: 5,
              RoomNo: 106,
            },
            {
              title: "Washroom Cleaning",
              Hostel: 9,
              RoomNo: 111,
            },
            {
              title: "Lobby Cleaning",
              Hostel: 3,
              RoomNo: 216,
            },
            {
              title: "Room Cleaning",
              Hostel: 13,
              RoomNo: 326,
            },
            {
              title: "Room Cleaning",
              Hostel: 10,
              RoomNo: 404,
            },
            {
              title: "Washroom Cleaning",
              Hostel: 13,
              RoomNo: 222,
            },
            {
              title: "Room Cleaning",
              Hostel: 10,
              RoomNo: 212,
            },
            {
              title: "Room Cleaning",
              Hostel: 7,
              RoomNo: 26,
            },
          ].map((branch, index) => (
            <a
              key={index}
              href="#"
              className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
            >
              {branch.title}
              <div className="text-gray-500 font-thin text-sm pt-1">
                <span>Hostel: {branch.Hostel}</span>
                <br />
                <span>Room Number: {branch.RoomNo}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default AssignedWork;
