export type ProjectId = "scheduling" | "rocket-mpc" | "quadrotor" | "wavvy" | "wibody" | "robotic-arm";

export type Project = {
  id: ProjectId;
  title: string;
  kicker: string;
  period: string;
  image: string;
  summary: string;
  impact: string[];
  stack: string[];
  demo: "SchedulingDemo" | "RocketMpcDemo" | "QuadrotorDemo" | "WavvyDemo" | "WiBodyDemo" | "RoboticArmDemo";
};

export const projects: Project[] = [
  {
    id: "scheduling",
    title: "Deep RL for Flexible Job-Shop Scheduling",
    kicker: "ETH semester project",
    period: "March 2026 - Present",
    image: "project-assets/scheduling-visual.svg",
    summary:
      "A reinforcement learning framework for dynamic manufacturing schedules with new orders, cancellations, and machine failures.",
    impact: [
      "Modeled dynamic FJSP as an MDP with a 51-dimensional shop-floor observation.",
      "Trained PPO agents over 25 joint sequencing/routing actions.",
      "Used a three-phase disruption-intensity curriculum; reported 5/6 statistically significant wins on small instances and 6/6 point-estimate wins on larger instances.",
    ],
    stack: ["Python", "PyTorch", "Stable-Baselines3", "PPO", "Simulation"],
    demo: "SchedulingDemo",
  },
  {
    id: "rocket-mpc",
    title: "Rocket Lander Controller Upgrade",
    kicker: "COCO 2026 - MPC control case",
    period: "June 2026",
    image: "project-assets/rocket-mpc-visual.svg",
    summary:
      "A controller redesign case study comparing a decoupled PID rocket lander controller with a model predictive controller under actuator and mass mismatch faults.",
    impact: [
      "Analyzed why PID succeeds nominally but crashes under nozzle deflection limits and fuel/mass mismatch.",
      "Proposed MPC with hard thrust/nozzle constraints, online equilibrium updates, and a 7-second prediction horizon.",
      "Demonstrated recovery in the same simulated failure scenarios where PID crashed.",
    ],
    stack: ["Model Predictive Control", "PID", "Constrained optimization", "Simulation", "Control systems"],
    demo: "RocketMpcDemo",
  },
  {
    id: "quadrotor",
    title: "Autonomous Quad-Rotor Control",
    kicker: "ETH quad-rotor P&S",
    period: "Spring 2026",
    image: "project-assets/quadrotor-visual.svg",
    summary:
      "A hands-on controls project focused on modeling, simulating, and tuning autonomous quad-rotor hover and position control.",
    impact: [
      "Derived and simulated N-rotor dynamics to test controller and estimator behavior before flight.",
      "Tuned PID and LQR controllers for Crazyflie-style quad-rotor hover and x-y position regulation.",
      "Implemented real-time control logic in C++ with MATLAB/Simulink-based modeling and controller synthesis.",
    ],
    stack: ["MATLAB/Simulink", "C++", "PID", "LQR", "Quad-rotor dynamics", "Real-time control"],
    demo: "QuadrotorDemo",
  },
  {
    id: "wavvy",
    title: "Wavvy",
    kicker: "Full-stack proximity social app",
    period: "August 2025 - Present",
    image: "project-assets/wavvy-visual.svg",
    summary:
      "A privacy-preserving mobile proximity platform using BLE rotating identifiers, native clients, shared KMM logic, and a Django backend.",
    impact: [
      "Designed around short-lived encrypted BLE identifiers with server-side-only resolution.",
      "Built across backend, Kotlin Multiplatform SDK, Android, iOS, and documentation layers.",
      "Reviewed architecture, security risks, data flow, and cross-platform BLE compatibility.",
    ],
    stack: ["Django", "Kotlin Multiplatform", "Android", "iOS", "BLE", "Redis"],
    demo: "WavvyDemo",
  },
  {
    id: "wibody",
    title: "Wi-Body",
    kicker: "ETH bachelor thesis",
    period: "January 2025 - June 2025",
    image: "project-assets/wibody-visual.svg",
    summary:
      "An ESP32-C6 Wi-Fi 6 wireless body-area network testbed for high-throughput, energy-aware wearable sensing.",
    impact: [
      "Developed firmware experiments for throughput, power modes, and timing synchronization.",
      "Reduced idle power using modem-sleep and light-sleep operating modes.",
      "Achieved inter-node synchronization within +/-50 microseconds using a TSF-based timing protocol.",
    ],
    stack: ["C", "ESP32-C6", "Wi-Fi 6", "Firmware", "WBAN", "Measurement"],
    demo: "WiBodyDemo",
  },
  {
    id: "robotic-arm",
    title: "Robotic Arm",
    kicker: "High-school graduation project",
    period: "April 2022",
    image: "project-assets/robotic-arm-visual.svg",
    summary:
      "A physical robotic arm controlled from a computer and local web interface, with sensor-based object pickup and inverse-kinematics reasoning.",
    impact: [
      "Built a servo-driven arm with Raspberry Pi control and custom mechanical iterations.",
      "Implemented keyboard and web-based control experiments.",
      "Used distance sensing and trigonometry to map object position to joint angles.",
    ],
    stack: ["Python", "Raspberry Pi", "Servos", "GPIO", "Web UI", "Sensors"],
    demo: "RoboticArmDemo",
  },
];
