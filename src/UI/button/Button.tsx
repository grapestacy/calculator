import React from "react";

interface ButtonProps {
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    fontSize?: string;
    cursor?: string;
    userSelect?: string;
    onClick?: () => void;
    background?: string;
    backgroundColor?: string;
    children?: React.ReactNode;

  
}

const Button: React.FC<ButtonProps> = ({onClick, borderRadius, children}) => { 
  return (
    <button 
      style={{
        width: "12.3vh",
        height: "10vh",
        border: "none",
        borderRadius: borderRadius,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "5vh",
        cursor: "pointer",
        userSelect: "none"
      }}
      onClick={onClick}
    >{children}
    </button>
  );
}

export default Button;