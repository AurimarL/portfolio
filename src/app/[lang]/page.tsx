"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  MessageSquare,
  Code,
  Briefcase,
  User,
  Mail,
  Trash2Icon,
} from "lucide-react";
import {  AnimatePresence } from "framer-motion";

// Custom hooks
import { useMatrixEffect } from "@/hooks/use-matrix-effect";

// Components
import DesktopIcon from "@/components/desktop-icon";
import Window from "@/components/window";
import Taskbar from "@/components/taskbar";
import AboutMe from "@/components/about-me";
import Resume from "@/components/resume";
import Chatbot from "@/components/chatbot";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import Contact from "@/components/contact";
import Trash from "@/components/trash";

export default function Page() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const canvasRef = useMatrixEffect();
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openApp = (appName: string) => {
    setActiveApp(appName);
    setIsStartMenuOpen(false);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const apps = [
    { name: "About Me", icon: User, component: AboutMe },
    { name: "Resume", icon: FileText, component: Resume },
    { name: "Skills", icon: Code, component: Skills },
    { name: "Experiences", icon: Briefcase, component: Experiences },
    { name: "Chatbot", icon: MessageSquare, component: Chatbot },
    { name: "Contact", icon: Mail, component: Contact },
    { name: "Trash", icon: Trash2Icon, component: Trash },

  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>
      <div
        ref={desktopRef}
        className="relative z-10 p-4 flex flex-col items-center justify-center min-h-[calc(100vh-48px)]"
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8">
          {apps.map((app) => (
            <DesktopIcon
              key={app.name}
              icon={<app.icon size={32} />}
              label={app.name}
              onClick={() => openApp(app.name)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeApp && (
          <Window
            key={activeApp}
            title={activeApp}
            onClose={closeApp}
            isMobile={isMobile}
          >
            {apps.find((app) => app.name === activeApp)?.component()}
          </Window>
        )}
      </AnimatePresence>
      <Taskbar
        activeApp={activeApp}
        openApp={openApp}
        toggleStartMenu={toggleStartMenu}
      />
    </div>
  );
}
