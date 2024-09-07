import React from "react";

export default function Range({ range,onChange }) {
  return (
    <div className="range">
      <input
        type="range"
        value={range}
        onChange={(e) => onChange(e.target.value)}
        min={0}
        max={250}
      />
      <output>{range}</output>
    </div>
  );
}
