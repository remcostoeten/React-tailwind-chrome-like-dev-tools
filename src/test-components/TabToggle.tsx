import React from "react";


interface TabToggleProps {
  activeTab: string;
  toggleTab: (tabName: string) => void;
}

const TabToggle: React.FC<TabToggleProps> = ({ activeTab, toggleTab }) => {
  return (
    <div className="flex my-4 space-x-1">
      <button
        onClick={() => toggleTab("DemoPage1")}
        className={`px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 border rounded-lg focus:outline-none ${
          activeTab === "DemoPage1"
            ? "bg-indigo-600 text-white shadow-lg"
            : "text-gray-800 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
        }`}
      >
        Demo Page 1
      </button>
      <button
        onClick={() => toggleTab("DemoPage2")}
        className={`px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 border rounded-lg focus:outline-none ${
          activeTab === "DemoPage2"
            ? "bg-indigo-600 text-white shadow-lg"
            : "text-gray-800 bg-gray-100 hover:bg-gray-200 hover:text-gray-900"
        }`}
      >
        Demo Page 2
      </button>
    </div>
  );
};

export default TabToggle;