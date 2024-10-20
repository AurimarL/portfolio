"use client";

import {
  FileCode,
  Folder,
  File,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Trash() {
  
  const trashContents = [
    { name: "PHP", icon: FileCode, color: "text-purple-400" },
    { name: "Go", icon: FileCode, color: "text-blue-400" },
    { name: "node_modules", icon: Folder, color: "text-yellow-400" },
    { name: "abandoned_project", icon: Folder, color: "text-red-400" },
    { name: "18BCP127_assignment.zip", icon: File, color: "text-green-400" },
    { name: "project_final", icon: Folder, color: "text-orange-400" },
    { name: "project_ultra_final", icon: Folder, color: "text-pink-400" },
  ];

  return (
    <div className="relative">
       <div className="grid grid-cols-3 gap-2">
            {trashContents.map((item, index) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-800 bg-opacity-50"
              >
                <item.icon size={24} className={item.color} />
                <span className="text-xs mt-1 text-green-500 truncate w-full text-center">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
    </div>
  );
}
