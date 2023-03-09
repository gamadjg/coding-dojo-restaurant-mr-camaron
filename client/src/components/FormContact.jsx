import React, { useState } from "react";
import axios from "axios";

const FormContact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmission = (e) => {
		e.preventDefault();
		console.log(name, email, phone, message);
		axios
			.post("http://localhost:8000/api/user/contact/new", {
				name,
				email,
				phone,
				message,
			})
			.then((res) => {
				// subimtted popup
			})
			.catch((err) => {
				// console.log(err);
				const errorResponse = err.response.data.errors;
				const errorArr = [];
				for (const key of Object.keys(errorResponse)) {
					errorArr.push(errorResponse[key].message);
				}
				setErrors(errorArr);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmission} className="form m-auto w-96">
				<div className="my-1">
					<label className="block text-gray-100 text-sm font-bold mb-1">
						Name
					</label>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex justify-between my-1">
					<div>
						<label className="block text-gray-100 text-sm font-bold mb-1">
							Email
						</label>
						<input
							type="text"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							className="w-48 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div>
						<label className="block text-gray-100 text-sm font-bold mb-1">
							Phone
						</label>
						<input
							type="text"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
							className="w-44 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
				</div>
				<div className="my-1">
					<label className="block text-gray-100 text-sm font-bold mb-1">
						Message
					</label>
					<input
						type="text"
						id="contact_message"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="my-1">
					<button
						type="submit"
						className="text-gray-100 text-sm font-bold mb-2 border rounded p-2 mt-2"
					>
						Submit
					</button>
				</div>
			</form>
			{errors.map((error, i) => {
				return <p key={i}>{error}</p>;
			})}
		</>
	);
};

export default FormContact;
