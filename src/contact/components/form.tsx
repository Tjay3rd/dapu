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
		<section className="mx-auto max-w-2xl px-5 py-14 sm:px-6">
			<h2 className="mb-8 font-display text-2xl font-bold       uppercase text-ink">Send Us A Message</h2>
			<form onSubmit={onSubmit} className="flex w-full flex-col items-start gap-5">
				<label className="flex w-full flex-col font-body            text-base text-ink">
					Your Name
					<input
						className="mt-2 h-13 w-full rounded-md border border-ink/15 bg-parchment px-4 text-lg text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none"
						type="text"
						name="name"
						placeholder="John Doe"
						required
					/>
				</label>
				<label className="flex w-full flex-col font-body text-base text-ink">
					Your Email
					<input
						className="mt-2 h-13 w-full rounded-md border border-ink/15 bg-parchment px-4 text-lg text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none"
						type="email"
						name="email"
						placeholder="exampleJaneDoe@email.com"
						required
					/>
				</label>
				<label className="flex w-full flex-col font-body text-base text-ink">
					Write Your Message Below
					<textarea
						className="mt-2 h-32 w-full rounded-md border border-ink/15 bg-parchment px-4 py-3 text-lg text-ink placeholder:text-ink/40 focus:border-clay     focus:outline-none"
						name="message"
						placeholder="We as John and Jane Doe are the most mysterious and secretive couple in the world. No one can identify us and yet we are famous. Despite our uncanny fame, we would love to attend one of your shows as we find your work highly entertaining..."
						required
					></textarea>
				</label>
				<button
					className="rounded-lg bg-ink px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform hover:scale-105"
					type="submit"
				>
					Submit Now
				</button>
				{result && <p className="font-body text-sm text-ink/70">{result}</p>}
			</form>
		</section>
	);
}

export default Form;
