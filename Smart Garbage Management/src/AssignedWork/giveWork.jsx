import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function WorkForm() {
	const [work, setWork] = useState("");
	const navigate = useNavigate();
	function complain() {
		navigate("/complain");
	}
	return (
		<div>
			<div className="border-1 border-black ">
				<h1 className="text-3xl mt-8 ml-4">Assigned Tasks</h1>
			</div>
			<div className="flex items-center justify-center mt-16">
				<button
					onClick={complain}
					className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Assign New Work
				</button>
			</div>
		</div>
	);
}

export default WorkForm;
