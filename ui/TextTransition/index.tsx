"use client";
import { useEffect, useState } from "react";
import ReactTextTransition from "react-text-transition";

interface ITextTransition {
  Texts: String[];
}
export default function TextTransition({ Texts }: ITextTransition) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <ReactTextTransition>{Texts[index % Texts.length]}</ReactTextTransition>
    </>
  );
}
