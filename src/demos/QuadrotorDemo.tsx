import { useMemo, useState } from "react";

type Controller = "pid" | "lqr";

export function QuadrotorDemo() {
  const [controller, setController] = useState<Controller>("lqr");
  const [disturbance, setDisturbance] = useState(35);

  const response = useMemo(() => {
    const damping = controller === "lqr" ? 0.78 : 0.48;
    const settle = Math.round((controller === "lqr" ? 1.8 : 3.4) + disturbance / 45);
    const overshoot = Math.round((controller === "lqr" ? 7 : 20) + disturbance / 6);
    const path = Array.from({ length: 36 }, (_, index) => {
      const t = index / 35;
      const oscillation = Math.sin(t * Math.PI * (controller === "lqr" ? 3.2 : 5.4));
      const envelope = Math.exp(-t * 3.4 * damping);
      const y = 120 - 76 * t + oscillation * envelope * disturbance * 0.72;
      const x = 22 + t * 236;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
    return { settle, overshoot, path };
  }, [controller, disturbance]);

  return (
    <div className="demo-panel quadrotor-demo">
      <div className="demo-toolbar">
        <div className="segmented">
          <button className={controller === "lqr" ? "active" : ""} onClick={() => setController("lqr")}>
            LQR
          </button>
          <button className={controller === "pid" ? "active" : ""} onClick={() => setController("pid")}>
            PID
          </button>
        </div>
        <label className="slider-control">
          Disturbance
          <input
            min="10"
            max="70"
            value={disturbance}
            type="range"
            onChange={(event) => setDisturbance(Number(event.target.value))}
          />
        </label>
      </div>

      <svg className="quadrotor-view" viewBox="0 0 280 190" role="img" aria-label="Quad-rotor hover response">
        <rect x="18" y="148" width="244" height="8" rx="4" className="landing-ground" />
        <rect x="116" y="136" width="48" height="12" rx="5" className="landing-pad" />
        <path d={response.path} className="quad-response" />
        <g transform="translate(224 54) rotate(-8)">
          <line x1="-34" y1="0" x2="34" y2="0" className="quad-arm" />
          <line x1="0" y1="-28" x2="0" y2="28" className="quad-arm" />
          <rect x="-15" y="-11" width="30" height="22" rx="6" className="quad-body" />
          <circle cx="-42" cy="0" r="15" className="quad-rotor teal" />
          <circle cx="42" cy="0" r="15" className="quad-rotor teal" />
          <circle cx="0" cy="-36" r="15" className="quad-rotor amber" />
          <circle cx="0" cy="36" r="15" className="quad-rotor amber" />
        </g>
      </svg>

      <div className="metrics-grid">
        <strong>{response.settle}s</strong>
        <span>settling time</span>
        <strong>{response.overshoot}%</strong>
        <span>overshoot</span>
        <strong>200 Hz</strong>
        <span>control loop</span>
      </div>
    </div>
  );
}
