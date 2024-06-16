import React, { useState, useEffect } from 'react';

const DebugTool: React.FC = () => {
  const [toolActive, setToolActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === 'X') {
        setToolActive(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (toolActive) {
      const handleMousemove = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        setHoveredElement(target);
      };

      const handleClick = (event: MouseEvent) => {
        event.stopPropagation(); // Prevent click events from propagating to other elements
        const target = event.target as HTMLElement;
        setSelectedElement(target);
      };

      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('mousemove', handleMousemove);
        document.removeEventListener('click', handleClick);
        setHoveredElement(null);
        setSelectedElement(null);
      };
    }
  }, [toolActive]);

  return (
    <>
      {toolActive && (
        <div className="fixed top-0 right-0 z-50 p-2 m-2 bg-red-500 rounded-full animate-pulse">
          {/* Blinking icon content */}
        </div>
      )}
      {toolActive && hoveredElement && (
        <>
          <div
            className="fixed z-40 bg-blue-500 opacity-50 pointer-events-none"
            style={{
              top: `${hoveredElement.getBoundingClientRect().top}px`,
              left: `${hoveredElement.getBoundingClientRect().left}px`,
              width: `${hoveredElement.getBoundingClientRect().width}px`,
              height: `${hoveredElement.getBoundingClientRect().height}px`,
            }}
          ></div>
          <div
            className="fixed z-50 p-1 text-white bg-gray-700 rounded"
            style={{
              top: `${hoveredElement.getBoundingClientRect().top - 30}px`,
              left: `${hoveredElement.getBoundingClientRect().left}px`,
            }}
          >
            {hoveredElement.tagName.toLowerCase()}.{Array.from(hoveredElement.classList).join('.')}
          </div>
        </>
      )}
      {toolActive && selectedElement && (
        <>
          <div
            className="fixed z-40 bg-green-500 opacity-50 pointer-events-none"
            style={{
              top: `${selectedElement.getBoundingClientRect().top}px`,
              left: `${selectedElement.getBoundingClientRect().left}px`,
              width: `${selectedElement.getBoundingClientRect().width}px`,
              height: `${selectedElement.getBoundingClientRect().height}px`,
            }}
          ></div>
          <div
            className="fixed z-50 p-1 text-white bg-gray-700 rounded"
            style={{
              top: `${selectedElement.getBoundingClientRect().top - 30}px`,
              left: `${selectedElement.getBoundingClientRect().left}px`,
            }}
          >
            {selectedElement.tagName.toLowerCase()}.{Array.from(selectedElement.classList).join('.')}
          </div>
        </>
      )}
    </>
  );
};

export default DebugTool;
