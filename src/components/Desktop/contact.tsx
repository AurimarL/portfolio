import React from "react";
import { Send } from "lucide-react";

export default function Contact() {
	return (
		<div className="p-6 bg-gray-900 rounded-lg shadow-md text-green-500">
			<h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
			<form className="space-y-4">
				<div>
					<label htmlFor="name" className="block mb-1">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="w-full p-2 bg-gray-800 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block mb-1">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full p-2 bg-gray-800 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<div>
					<label htmlFor="message" className="block mb-1">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						className="w-full p-2 bg-gray-800 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<button
					type="submit"
					className="flex items-center justify-center w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
				>
					<Send size={18} className="mr-2" />
					Send Message
				</button>
			</form>
		</div>
	);
}
