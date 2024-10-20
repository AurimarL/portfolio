'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useDragControls, AnimatePresence } from 'framer-motion'
import { Minus, Square, Maximize2, X } from 'lucide-react'

interface WindowProps {
  title: string
  onClose: () => void
  children: React.ReactNode
  isMobile: boolean
}

export default function Window({ title, onClose, children, isMobile }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDraggable, setIsDraggable] = useState(true)
  const dragControls = useDragControls()
  const constraintsRef = useRef(null)

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
    setIsDraggable(!isMaximized)
  }

  const handleHeaderPointerDown = (e: React.PointerEvent) => {
    if (!isMaximized && isDraggable) {
      dragControls.start(e)
    }
  }

  // Effect to handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div 
      ref={constraintsRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-50"
    >
      <AnimatePresence>
        <motion.div 
          key={isMaximized ? 'maximized' : 'normal'}
          drag={!isMaximized && isDraggable}
          dragControls={dragControls}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          onHoverStart={() => !isMaximized && setIsDraggable(true)}
          className={`absolute bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg overflow-hidden pointer-events-auto ${
            isMaximized ? 'inset-0' : 'w-3/4 h-3/4 left-1/2 top-1/2'
          }`}
          initial={isMaximized ? { scale: 0.95 } : { scale: 0.8, x: '-50%', y: '-50%' }}
          animate={isMaximized ? { scale: 1 } : { scale: 1, x: '-50%', y: '-50%' }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-gray-800 text-green-500 px-4 py-2 flex justify-between items-center cursor-move"
            onPointerDown={handleHeaderPointerDown}
          >
            <h2 className="text-sm font-semibold">{title}</h2>
            <div className="flex space-x-2">
              <button 
                className="text-green-500 hover:text-green-400 focus:outline-none"
                aria-label="Minimize"
              >
                <Minus size={16} />
              </button>
              <button 
                className="text-green-500 hover:text-green-400 focus:outline-none"
                aria-label={isMaximized ? "Restore" : "Maximize"}
                onClick={toggleMaximize}
              >
                {isMaximized ? <Square size={16} /> : <Maximize2 size={16} />}
              </button>
              <button 
                onClick={onClose}
                className="text-green-500 hover:text-red-500 focus:outline-none"
                aria-label="Close window"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
          <motion.div 
            className="p-4 overflow-auto text-green-500"
            style={{ height: isMaximized ? 'calc(100% - 2.5rem)' : 'calc(100% - 3rem)' }}
            onHoverStart={() => setIsDraggable(false)}
            onHoverEnd={() => !isMaximized && setIsDraggable(true)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}