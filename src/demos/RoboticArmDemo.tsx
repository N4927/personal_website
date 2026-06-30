import { useMemo, useState } from "react";

export function RoboticArmDemo() {
  const [distance, setDistance] = useState(28);
  const [height, setHeight] = useState(9);

  const arm = useMemo(() => {
    const l1 = 90;
    const l2 = 80;
    const targetX = distance * 4;
    const targetY = 150 - height * 4;
    const dx = targetX - 80;
    const dy = targetY - 150;
    const d = Math.min(160, Math.max(35, Math.hypot(dx, dy)));
    const a = Math.acos((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d));
    const base = Math.atan2(dy, dx);
    const theta1 = base - a;
    const elbow = {
      x: 80 + Math.cos(theta1) * l1,
      y: 150 + Math.sin(theta1) * l1,
    };
    return { elbow, target: { x: targetX, y: targetY } };
  }, [distance, height]);

  return (
    <div className="demo-panel arm-demo">
      <svg viewBox="0 0 260 190" role="img" aria-label="Robotic arm inverse kinematics demo">
        <line x1="80" y1="150" x2={arm.elbow.x} y2={arm.elbow.y} className="arm-link" />
        <line x1={arm.elbow.x} y1={arm.elbow.y} x2={arm.target.x} y2={arm.target.y} className="arm-link forearm" />
        <circle cx="80" cy="150" r="11" className="joint" />
        <circle cx={arm.elbow.x} cy={arm.elbow.y} r="9" className="joint secondary" />
        <rect x={arm.target.x - 10} y={arm.target.y - 10} width="20" height="20" rx="4" className="target-block" />
        <path d="M50 162 H110 L118 180 H42 Z" className="base-block" />
      </svg>
      <div className="demo-toolbar stacked">
        <label className="slider-control">
          Object distance
          <input min="18" max="45" value={distance} type="range" onChange={(e) => setDistance(Number(e.target.value))} />
        </label>
        <label className="slider-control">
          Pickup height
          <input min="3" max="20" value={height} type="range" onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
    </div>
  );
}
