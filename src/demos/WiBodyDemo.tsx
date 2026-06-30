import { useMemo, useState } from "react";

export function WiBodyDemo() {
  const [duty, setDuty] = useState(35);
  const [beacon, setBeacon] = useState(100);

  const values = useMemo(() => {
    const throughput = Math.round(1.8 + duty * 0.08);
    const power = Math.round(14 + duty * 1.9 + beacon * 0.08);
    const sync = Math.max(12, Math.round(58 - beacon * 0.12));
    return { throughput, power, sync };
  }, [duty, beacon]);

  return (
    <div className="demo-panel wibody-demo">
      <div className="node-field" aria-label="Wireless body-area network visualization">
        <span className="body-node hub">AP</span>
        <span className="body-node sensor a">ECG</span>
        <span className="body-node sensor b">IMU</span>
        <span className="body-node sensor c">PPG</span>
        <svg viewBox="0 0 420 240" role="img" aria-label="Synchronized sensor links">
          <path d="M210 120 L116 72" />
          <path d="M210 120 L312 76" />
          <path d="M210 120 L215 198" />
        </svg>
      </div>
      <div className="demo-toolbar stacked">
        <label className="slider-control">
          Active duty cycle
          <input min="10" max="80" value={duty} type="range" onChange={(e) => setDuty(Number(e.target.value))} />
        </label>
        <label className="slider-control">
          Beacon interval
          <input min="50" max="300" value={beacon} type="range" onChange={(e) => setBeacon(Number(e.target.value))} />
        </label>
      </div>
      <div className="metrics-grid">
        <strong>{values.throughput} Mbps</strong>
        <span>throughput</span>
        <strong>{values.power} mW</strong>
        <span>power estimate</span>
        <strong>{values.sync} us</strong>
        <span>sync error</span>
      </div>
    </div>
  );
}
