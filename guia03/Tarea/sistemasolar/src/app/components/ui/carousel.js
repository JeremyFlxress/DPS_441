"use client";

export function Carousel({ children }) {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {children}
    </div>
  );
}
