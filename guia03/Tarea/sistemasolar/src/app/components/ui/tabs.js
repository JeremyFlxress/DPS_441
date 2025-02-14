"use client";

import { useState } from "react";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {children.map((child, index) => (
          <button
            key={index}
            className={`p-2 ${
              activeTab === index ? "border-b-2 border-blue-500 font-bold" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="p-4">{children[activeTab]}</div>
    </div>
  );
}

export function Tab({ children }) {
  return <div>{children}</div>;
}
