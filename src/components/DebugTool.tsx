import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { PowerOnIcon } from './icons';
const DebugTool: React.FC = () => {
  const [toolActive, setToolActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [tailwindClasses, setTailwindClasses] = useState('');

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === 'X') {
        setToolActive(prev => !prev);
        toast('Debugger turned on', {
            className: 'my-classname',
            description: 'Turn off the debugger by pressing Shift + X again.',
            duration: 5000,
            icon: <PowerOnIcon />,
          });      }
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
        setTailwindClasses(target.className); // Set initial classes to current element's classes
      };

      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('mousemove', handleMousemove);
        document.removeEventListener('click', handleClick);
        setHoveredElement(null);
        setSelectedElement(null);
        setTailwindClasses(''); // Reset classes on tool deactivate
      };
    }
  }, [toolActive]);

  const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTailwindClasses(event.target.value);
  };

  const applyClasses = () => {
    if (selectedElement) {
      selectedElement.className = tailwindClasses;
    }
  };

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
          <div
            className="fixed z-50 p-2 text-black bg-white rounded"
            style={{
              top: `${selectedElement.getBoundingClientRect().bottom + 5}px`,
              left: `${selectedElement.getBoundingClientRect().left}px`,
            }}
          >
            <input
              type="text"
              value={tailwindClasses}
              onChange={handleClassChange}
              placeholder="Enter Tailwind classes"
              className="p-1 border"
            />
            <button onClick={applyClasses} className="p-1 ml-2 text-white bg-blue-500 rounded">
              Apply
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DebugTool;
