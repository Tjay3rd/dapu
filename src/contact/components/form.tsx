import { useState } from "react";

function Form() {
	const [result, setResult] = useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target as HTMLFormElement);

		formData.append("access_key", "87ac9d31-caee-4879-8686-0a5fc0da8d75");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			alert("Message Submitted Successfully");
			(event.target as HTMLFormElement).reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<div>
			<h1 className="uppercase ml-4 mt-10 text-3xl font-bold">send us a message</h1>
			<form onSubmit={onSubmit} className="m-5 w-screen flex flex-col items-start gap-2.5">
				<label className="text-xl flex flex-col w-screen">
					Your Name
					<input
						className="text-xl rounded-md my-2.5 bg-gray-600/70 w-3/4 h-13 font-xl pl-4"
						type="text"
						name="name"
						placeholder="Enter your name"
						required
					/>
				</label>
				<label className="text-xl flex flex-col w-screen">
					Your Email
					<input
						className="text-xl rounded-md my-2.5 bg-gray-600/70 w-3/4 h-13 font-xl pl-4"
						type="email"
						name="email"
						placeholder="Enter your email"
						required
					/>
				</label>
				<label className="text-xl  flex flex-col w-screen">
					Write your message below
					<textarea
						className="text-xl rounded-md my-2.5 bg-gray-600/70 w-3/4 h-30 font-xl pl-4"
						name="message"
						placeholder="Enter your message"
						required
					></textarea>
				</label>
				<button className="bg-black text-white text-lg uppercase mr-15 my-4 p-4 rounded-lg" type="submit">
					Submit now
				</button>
				<p>{result}</p>
			</form>
		</div>
	);
}

export default Form;
