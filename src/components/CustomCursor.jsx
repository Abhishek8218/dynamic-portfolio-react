import { useState, useEffect } from 'react';

const CustomCursor = () => {
 const [cursorPosition, setCursorPosition] = useState({ posX: 0, posY: 0 });
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
    const cursors = document.querySelectorAll("[data-cursor]");
    const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ posX: clientX, posY: clientY });

      cursors.forEach(cursor => {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      });
    };

    const handleMouseOver = () => {
      setIsHovered(false);
      cursors.forEach(cursor => cursor.classList.add("hovered"));
    };

    const handleMouseOut = () => {
      setIsHovered(false);
      cursors.forEach(cursor => cursor.classList.remove("hovered"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    hoveredElements.forEach(element => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoveredElements.forEach(element => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
 }, []);

 // Assuming you have a CSS class that changes the cursor's color when hovering
 const cursorClass = isHovered ? 'cursor-dot.hovered' : 'cursor-dot';

 return (
    <>
      <div className={cursorClass} data-cursor style={{ left: cursorPosition.posX, top: cursorPosition.posY }} />
      <div className="cursor-outline" data-cursor style={{ left: cursorPosition.posX, top: cursorPosition.posY }} />
    </>
 );
}

export default CustomCursor;