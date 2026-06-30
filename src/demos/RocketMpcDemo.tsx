import { useMemo, useState } from "react";

type Fault = "nominal" | "nozzle" | "mass";
type Controller = "pid" | "mpc";

const faultLabels: Record<Fault, string> = {
  nominal: "Nominal",
  nozzle: "Nozzle jam",
  mass: "Mass mismatch",
};

export function RocketMpcDemo() {
  const [controller, setController] = useState<Controller>("mpc");
  const [fault, setFault] = useState<Fault>("nozzle");

  const result = useMemo(() => {
    const landed = controller === "mpc" || fault === "nominal";
    const nozzleLimit = fault === "nozzle" ? 5 : 15;
    const equilibrium = fault === "mass" && controller === "mpc" ? 0.56 : 0.4;
    const recovery = controller === "mpc" ? 92 : fault === "nominal" ? 84 : 24;
    return { landed, nozzleLimit, equilibrium, recovery };
  }, [controller, fault]);

  const path = result.landed
    ? "M34 40 C78 84, 98 120, 136 146 S213 171, 236 168"
    : fault === "nozzle"
      ? "M34 40 C82 72, 117 91, 149 115 S214 106, 242 72"
      : "M34 40 C68 101, 86 145, 121 177 S179 205, 230 210";

  return (
    <div className="demo-panel rocket-demo">
      <div className="demo-toolbar">
        <div className="segmented">
          <button className={controller === "mpc" ? "active" : ""} onClick={() => setController("mpc")}>
            MPC
          </button>
          <button className={controller === "pid" ? "active" : ""} onClick={() => setController("pid")}>
            PID
          </button>
        </div>
        <label className="slider-control">
          Failure mode
          <select value={fault} onChange={(event) => setFault(event.target.value as Fault)}>
            {Object.entries(faultLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <svg className="lander-view" viewBox="0 0 280 230" role="img" aria-label="Rocket landing trajectory">
        <rect x="20" y="190" width="240" height="10" rx="3" className="landing-ground" />
        <rect x="206" y="176" width="58" height="9" rx="3" className="landing-pad" />
        <path d={path} className={result.landed ? "trajectory landed" : "trajectory crashed"} />
        <g transform={result.landed ? "translate(235 165) rotate(-4)" : "translate(230 83) rotate(44)"}>
          <path d="M0 -22 L11 12 H-11 Z" className="rocket-body" />
          <path d="M-7 12 L0 26 L7 12" className="rocket-flame" />
        </g>
      </svg>

      <div className="metrics-grid">
        <strong>{result.landed ? "LANDED" : "CRASHED"}</strong>
        <span>outcome</span>
        <strong>+/-{result.nozzleLimit} deg</strong>
        <span>nozzle limit</span>
        <strong>{result.equilibrium.toFixed(2)}</strong>
        <span>hover thrust</span>
      </div>
      <div className="recovery-bar" aria-label="Recovery margin">
        <i style={{ width: `${result.recovery}%` }} />
      </div>
    </div>
  );
}
