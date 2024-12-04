import React, { useState, useEffect } from "react";

const GradientBlobCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed z-50 pointer-events-none transform transition-all duration-100 ease-out rounded-full  blur-[100px] backdrop:blur[250px]"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          width: "100px", 
          height: "100px",
          background: "linear-gradient(45deg, #ff6ec7, #ff99cc, #66ccff, #00b3b3)",
          backgroundSize: "400% 400%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default GradientBlobCursor;
