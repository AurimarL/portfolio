"use client";

import React from "react";
import {
	User,
	FileText,
	Code,
	Briefcase,
	MessageSquare,
	Mail,
	Search,
	MoreHorizontal,
} from "lucide-react";

interface TaskbarProps {
	activeApp: string | null;
	openApp: (appName: string) => void;
	toggleStartMenu: () => void;
}

export default function Taskbar({
	activeApp,
	openApp,
	toggleStartMenu,
}: TaskbarProps) {
	const apps = [
		{
			name: "About Me",
			icon: User,
		},
		{
			name: "Resume",
			icon: FileText,
		},
		{
			name: "Skills",
			icon: Code,
		},
		{
			name: "Experiences",
			icon: Briefcase,
		},
		{
			name: "Chatbot",
			icon: MessageSquare,
		},
		{
			name: "Contact",
			icon: Mail,
		},
	];

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md p-2 flex justify-center items-center space-x-2">
			<button
				type="button"
				className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
				onClick={toggleStartMenu}
				aria-label="Open Start menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6"
				>
					<title>window</title>
					<path d="M3 5.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25zm4.125 7.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zm7.5 0a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zm-7.5-7.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zm7.5 0a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5z" />
				</svg>
			</button>
			<button
				type="button"
				className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
				aria-label="Search"
			>
				<Search size={24} />
			</button>
			{apps.map((app) => (
				<button
					type="button"
					key={app.name}
					className={`p-2 rounded-lg transition-colors text-white ${
						activeApp === app.name
							? "bg-gray-800"
							: "hover:bg-gray-800"
					}`}
					onClick={() => openApp(app.name)}
					aria-label={`Open ${app.name}`}
				>
					<app.icon size={24} />
				</button>
			))}
			<button
				type="button"
				className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
				aria-label="More options"
			>
				<MoreHorizontal size={24} />
			</button>
		</div>
	);
}
