import { useEffect, useRef } from "react";

export default function useCheckMobile({
  setIsMobile,
}: {
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return canvasRef;
}
