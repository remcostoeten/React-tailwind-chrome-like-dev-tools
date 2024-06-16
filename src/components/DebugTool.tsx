import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { PowerOnIcon } from './icons';

const DebugTool: React.FC = () => {
    const [toolActive, setToolActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.shiftKey && event.key === 'X') {
                setToolActive((prev) => !prev);
                toast('Debugger turned on', {
                    className: 'my-classname',
                    description: 'Turn off the debugger by pressing Shift + X again.',
                    duration: 5000,
                    icon: <PowerOnIcon />,
                });
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
                setMenuPosition({ top: event.clientY, left: event.clientX });
                setMenuVisible(true);
            };

            document.addEventListener('mousemove', handleMousemove);
            document.addEventListener('click', handleClick);

            return () => {
                document.removeEventListener('mousemove', handleMousemove);
                document.removeEventListener('click', handleClick);
                setHoveredElement(null);
                setSelectedElement(null);
                setMenuVisible(false); // Hide menu on tool deactivate
            };
        }
    }, [toolActive]);

    const addClass = (className: string) => {
        if (selectedElement) {
            selectedElement.classList.add(className);
            setMenuVisible(false); // Hide menu after adding class
        }
    };

    return (
        <>
            {toolActive && (
                <>
                    <div className="fixed top-0 right-0 z-50 p-2 m-2 bg-red-500 rounded-full animate-pulse">
                        {/* Blinking icon content */}
                    </div>
                    {hoveredElement && (
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
                    {selectedElement && (
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
            )}
            {menuVisible && (
                <div
                    className="fixed z-50 p-2 bg-white border rounded shadow-lg"
                    style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
                >
                    <button onClick={() => addClass('text-balance')} className="block p-1 mb-1 text-black">
                        Add text-balance
                    </button>
                    <button onClick={() => addClass('text-pretty')} className="block p-1 text-black">
                        Add text-pretty
                    </button>
                </div>
            )}
        </>
    );
};

export default DebugTool;   