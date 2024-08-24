import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog"; // Import the dialog component

function WorkForm() {
    const [work, setWork] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null); // Track which task to delete
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:8000/assignwork?userId=${userId}`)
                .then((response) => {
                    setWork(response.data);
                })
                .catch((error) => {
                    console.error("There was an error fetching the work assignments:", error);
                });
        } else {
            console.warn("No user ID found in local storage.");
        }
    }, [userId]);

    const confirmDeleteTask = (task) => {
        setTaskToDelete(task); // Set the task to be deleted
        setIsDialogOpen(true); // Open the confirmation dialog
    };

    const deleteTask = () => {
        if (taskToDelete) {
            axios
                .delete(`http://localhost:8000/assignwork/${taskToDelete._id}`)
                .then(() => {
                    setWork(work.filter((task) => task._id !== taskToDelete._id));
                    setIsDialogOpen(false); // Close the dialog
                    setTaskToDelete(null); // Reset the taskToDelete state
                })
                .catch((error) => {
                    console.error("There was an error deleting the task!", error);
                });
        }
    };

    function complain() {
        navigate("/complain");
    }

    return (
        <div className="container mx-auto p-4">
            <div className="border-b border-gray-300 pb-4">
				
                <h1 className="text-3xl font-bold text-center">Pending Assigned Tasks/Complains</h1>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
                {work.length > 0 ? (
                    work.map((task, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-lg"
                        >
                            <h2 className="text-2xl font-semibold mt-2">{task.name}</h2>
                            <p className="text-gray-700 mt-2">Phone: {task.phone}</p>
                            <p className="text-gray-700 mt-2">Address: {task.address}</p>
                            <p className="text-gray-700 mt-2">Service: {task.service}</p>
                            <p className="text-gray-700 mt-2">Message: {task.message}</p>
                            <button
                                onClick={() => confirmDeleteTask(task)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline mt-4"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700 mt-8">No work assigned yet.</p>
                )}
            </div>
            <div className="flex items-center justify-center mt-12">
                <button
                    onClick={complain}
                    className="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                >
                    Assign New Work
                </button>
            </div>
            {isDialogOpen && (
                <ConfirmationDialog
                    onDelete={deleteTask}
                    onCancel={() => setIsDialogOpen(false)}
                />
            )}
        </div>
    );
}

export default WorkForm;
