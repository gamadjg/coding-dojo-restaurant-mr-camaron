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
			<form onSubmit={handleSubmission} className="form">
				<label>Name</label>
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<label>Email</label>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<label>Phone</label>
				<input
					type="text"
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
				/>
				<label>Message</label>
				<input
					type="text"
					id="contact_message"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			{errors.map((error, i) => {
				return <p key={i}>{error}</p>;
			})}
		</>
	);
};

export default FormContact;
