import { useMemo, useState } from "react";

const machines = ["M1", "M2", "M3", "M4"];
const rules = ["SPT", "MWKR", "FIFO", "MOR"];

export function SchedulingDemo() {
  const [intensity, setIntensity] = useState(2);
  const [policy, setPolicy] = useState<"static" | "ppo">("ppo");

  const jobs = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => {
      const machine = policy === "ppo" ? (index + intensity) % machines.length : index % machines.length;
      const start = 5 + index * (policy === "ppo" ? 7 : 8) + (machine % 2) * 4;
      const width = Math.max(12, 22 - intensity * 2 + ((index * 3) % 8));
      const disrupted = intensity > 1 && index % (5 - intensity) === 0;
      return { index, machine, start, width, disrupted };
    });
  }, [intensity, policy]);

  const makespan = policy === "ppo" ? 149 + intensity * 3 : 154 + intensity * 6;
  const delay = policy === "ppo" ? 8 + intensity * 3 : 13 + intensity * 6;

  return (
    <div className="demo-panel scheduling-demo">
      <div className="demo-toolbar" aria-label="Scheduling demo controls">
        <div className="segmented">
          <button className={policy === "ppo" ? "active" : ""} onClick={() => setPolicy("ppo")}>
            PPO policy
          </button>
          <button className={policy === "static" ? "active" : ""} onClick={() => setPolicy("static")}>
            Static rule
          </button>
        </div>
        <label className="slider-control">
          Disruption intensity
          <input
            type="range"
            min="0"
            max="3"
            value={intensity}
            onChange={(event) => setIntensity(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="metrics-grid">
        <strong>{makespan}</strong>
        <span>simulated Cmax</span>
        <strong>{delay}</strong>
        <span>delay pressure</span>
        <strong>{rules[(intensity + (policy === "ppo" ? 1 : 0)) % rules.length]}</strong>
        <span>dominant dispatch</span>
      </div>

      <div className="gantt" aria-label="Animated shop-floor schedule">
        {machines.map((machine, row) => (
          <div className="machine-row" key={machine}>
            <span>{machine}</span>
            <div className="machine-lane">
              {jobs
                .filter((job) => job.machine === row)
                .map((job) => (
                  <i
                    key={job.index}
                    className={job.disrupted ? "job disrupted" : "job"}
                    style={{ left: `${job.start}%`, width: `${job.width}%` }}
                    title={job.disrupted ? "Dynamic event" : "Scheduled operation"}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
