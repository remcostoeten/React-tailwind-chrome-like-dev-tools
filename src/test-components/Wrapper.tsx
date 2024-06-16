import React from "react";

interface WrapperProps {
  center?: boolean;
  width?: string;
  children?: React.ReactNode;
  margin?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  center = false,
  width = "full", // Use Tailwind's width classes or custom styles
  margin = "4", // Use Tailwind's spacing scale
  children,
}) => {
  // Correctly construct the class string based on props
  // For custom width like '1270px', you'll need to handle it differently, as shown below
  const wrapperClass = `container ${center ? "mx-auto" : ""} ${margin ? `my-${margin}` : ""}`;
  const customStyle = width !== "full" ? { width } : {};

  return (
    <div className={wrapperClass} style={customStyle}>
      {children}
    </div>
  );
};

export default Wrapper;
