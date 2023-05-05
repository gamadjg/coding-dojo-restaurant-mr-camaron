import React, { useState } from "react";
import axios from "axios";

const FormContact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmission = (e) => {
		e.preventDefault();
		axios
			// .post("http://localhost:8000/api/contact", {
			.post("https://api-dot-mr-camaron.wl.r.appspot.com/api/contact", {
				name,
				email,
				message,
			})
			.then(() => {
				setErrors([]);
				alert("Message sent");
			})
			.catch((err) => {
				setErrors(err.response.data.errors);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmission} className="form m-auto md:w-96">
				<div className="my-2">
					<label className="block text-gray-100 text-sm font-bold mb-1">
						Name
						{errors["name"] ? (
							<p className="inline-block pl-1 text-red-800">
								{errors["name"].message}
							</p>
						) : (
							<></>
						)}
					</label>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="my-2">
					<label className="block text-gray-100 text-sm font-bold mb-1 ">
						Email
						{errors["email"] ? (
							<p className="inline-block pl-1 text-red-800">
								{errors["email"].message}
							</p>
						) : (
							<></>
						)}
					</label>
					<input
						type="text"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="my-2">
					<label className="block text-gray-100 text-sm font-bold mb-1">
						Message
						{errors["message"] ? (
							<p className="inline-block pl-1 text-red-800">
								{errors["message"].message}
							</p>
						) : (
							<></>
						)}
					</label>
					<textarea
						type="text"
						id="contact_message"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						className="w-full h-24 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="my-2">
					<button
						type="submit"
						// className="text-gray-100 text-sm font-bold mb-2 border rounded p-2 mt-2"
						className="bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Submit
					</button>
				</div>
			</form>
			{/* {errors.map((error, i) => {
				return (
					<div className="md:w-96 m-auto">
						<p key={i}>{error}</p>
					</div>
				);
			})} */}
		</>
	);
};

export default FormContact;
