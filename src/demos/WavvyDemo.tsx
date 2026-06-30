import { useState } from "react";

const people = [
  { name: "Alice", x: 31, y: 40, hue: "violet" },
  { name: "Bob", x: 62, y: 50, hue: "teal" },
  { name: "Mia", x: 47, y: 70, hue: "amber" },
];

export function WavvyDemo() {
  const [resolve, setResolve] = useState(false);

  return (
    <div className="demo-panel wavvy-demo">
      <div className="phone-shell">
        <div className="phone-top" />
        <div className="proximity-map">
          {people.map((person) => (
            <button
              key={person.name}
              className={`person-dot ${person.hue}`}
              style={{ left: `${person.x}%`, top: `${person.y}%` }}
              onClick={() => setResolve(true)}
              aria-label={`Resolve ${person.name}`}
            >
              <span>{resolve ? person.name[0] : "B"}</span>
            </button>
          ))}
          <div className="scan-ring one" />
          <div className="scan-ring two" />
          <div className="scan-ring three" />
        </div>
        <div className="phone-card">
          <strong>{resolve ? "Server resolved nearby users" : "Broadcasting rotating B_ids"}</strong>
          <span>
            {resolve
              ? "PII stays off Bluetooth; authenticated resolution happens through the backend."
              : "Tap a nearby signal to simulate server-side identity resolution."}
          </span>
        </div>
      </div>
      <div className="flow-steps">
        <span>BLE scan</span>
        <span>Encrypted ID</span>
        <span>Django resolve</span>
        <span>Visible encounter</span>
      </div>
    </div>
  );
}
