"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useDragControls, type PanInfo } from "framer-motion";

interface DesktopIconProps {
	icon: React.ReactNode;
	label: string;
	onClick: () => void;
	isMobile: boolean;
}

export default function DesktopIcon({
	icon,
	label,
	onClick,
	isMobile,
}: DesktopIconProps) {
	const [isDragging, setIsDragging] = useState(false);
	const dragControls = useDragControls();
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleClick = () => {
		if (isDragging) return;
		onClick();
	};

	const handleDragStart = () => {
		setIsDragging(true);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
	};

	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		// If the drag distance is very small, consider it a click
		if (Math.abs(info.offset.x) < 5 && Math.abs(info.offset.y) < 5) {
			handleClick();
		}

		// Use a timeout to prevent immediate click after drag
		timeoutRef.current = setTimeout(() => {
			setIsDragging(false);
		}, 100);
	};

	return (
		<motion.div
			className="flex flex-col items-center justify-center cursor-pointer"
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.9,
			}}
			onClick={handleClick}
			drag={!isMobile}
			dragControls={dragControls}
			dragMomentum={false}
			dragListener={false}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<div
				className="bg-gray-800 bg-opacity-50 p-3 rounded-lg mb-2 text-white"
				onPointerDown={(e) => {
					if (!isMobile) {
						dragControls.start(e);
					}
				}}
			>
				{icon}
			</div>
			<span className="text-sm text-center text-white">{label}</span>
		</motion.div>
	);
}
