const nodemailer = require("nodemailer");

module.exports.sendEmail = (name, email, message) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.NODEMAIL_USER,
			pass: process.env.NODEMAIL_PASS,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.NODEMAIL_TO,
		subject: `Message from ${name}`,
		text: `SENDER: ${name}\nEMAIL: ${email}\nMESSAGE:\n${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log("message successfully sent");
		}
	});
};
