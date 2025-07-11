import React from "react";

const Index: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = "currentColor" }) => (
  <svg 
  width={size} 
  height={size} 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke={color}
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
  style={{marginRight:'5px'}}
  >
    <line x1="1" y1="1" x2="23" y2="23" />
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </svg>
);

export default Index; 