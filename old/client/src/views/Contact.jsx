import React from "react";
import FormContact from "../components/FormContact";

const Contact = () => {
	return (
		<div className="text-gray-100 text-sm font-bold flex flex-col bg-[#FC7E2D] p-5 w-full">
			<p className="text-center my-2 text-lg">
				Reserving for a large party or have a question?
			</p>
			<FormContact />
		</div>
	);
};

export default Contact;
