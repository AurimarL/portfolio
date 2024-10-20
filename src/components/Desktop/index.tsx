"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { apps } from "@/config/apps";

// Custom hooks
import { useMatrixEffect } from "@/hooks/use-matrix-effect";
import useCheckMobile from "@/hooks/use-check-mobile";

// Components
import DesktopIcon from "@/components/Desktop/desktop-icon";
import Window from "@/components/Desktop/window";
import Taskbar from "@/components/Desktop/taskbar";

export default function Desktop() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const matrixEffectCanvasRef = useMatrixEffect();
  const checkMobileCanvasRef = useCheckMobile({ setIsMobile });
  const desktopRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <canvas ref={checkMobileCanvasRef} className="hidden" />
      <canvas
        ref={matrixEffectCanvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div
        ref={desktopRef}
        className="relative z-10 p-4 flex flex-col items-center justify-center min-h-[calc(100vh-48px)]"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 max-w-2xl"
          >
            <h1 className="text-4xl font-bold mb-4 text-white cursor-default">
              {"Welcome to My Portfolio"}
            </h1>
            <p className="text-lg text-gray-300 cursor-default">
              {`Explore my skills and projects by clicking on the desktop icons below. 
              Feel free to navigate through the various apps to learn more about me and my work.`}
            </p>
          </motion.div>
        </AnimatePresence>
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