import {
  GateType,
  LogicValue,
  GateDefinition,
  ICDefinition,
  Pin,
  CombinationalCircuitDefinition,
  SequentialCircuitDefinition,
} from "@/src/libs/types";

import { SvgInputNode } from "@/src/components/svg/SvgInputNode";
import { SvgOutputNode } from "@/src/components/svg/SvgOutputNode";

// GateSymbol paths are purely data — one component renders them all
const GATE_PATHS: Record<GateType, React.ReactNode> = {
  [GateType.AND]: (
    <>
      <path
        d="M20,10 L50,10 A20,20 0 0,1 50,50 L20,50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="20"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="70"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.OR]: (
    <>
      <path
        d="M20,10 Q40,10 70,30 Q40,50 20,50 Q30,30 20,10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="25"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="25"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="70"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.NOT]: (
    <>
      <path
        d="M30,15 L60,30 L30,45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="65"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="30"
        x2="30"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="70"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.NAND]: (
    <>
      <path
        d="M20,10 L50,10 A20,20 0 0,1 50,50 L20,50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="75"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="20"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.NOR]: (
    <>
      <path
        d="M20,10 Q40,10 70,30 Q40,50 20,50 Q30,30 20,10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="75"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="25"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="25"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.XOR]: (
    <>
      <path
        d="M15,10 Q25,30 15,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M25,10 Q45,10 75,30 Q45,50 25,50 Q35,30 25,10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="22"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="22"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="75"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  [GateType.XNOR]: (
    <>
      <path
        d="M15,10 Q25,30 15,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M25,10 Q45,10 75,30 Q45,50 25,50 Q35,30 25,10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="20"
        x2="22"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="40"
        x2="22"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="85"
        y1="30"
        x2="100"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
};

export const GateSymbol = ({ type }: { type: GateType }) => (
  <svg viewBox="0 0 100 60" className="w-full h-full">
    {GATE_PATHS[type]}
  </svg>
);

export const GATES: Record<GateType, GateDefinition> = {
  [GateType.AND]: {
    type: GateType.AND,
    name: "AND Gate",
    mnemonic: "All must agree",
    description: "Outputs HIGH only if all inputs are HIGH.",
    expression: "Y = A · B",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.HIGH },
    ],
  },
  [GateType.OR]: {
    type: GateType.OR,
    name: "OR Gate",
    mnemonic: "One is enough",
    description: "Outputs HIGH if at least one input is HIGH.",
    expression: "Y = A + B",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.HIGH },
    ],
  },
  [GateType.NOT]: {
    type: GateType.NOT,
    name: "NOT Gate (Inverter)",
    mnemonic: "The opposite",
    description: "Inverts the input signal.",
    expression: "Y = ¬A",
    truthTable: [
      { inputs: [LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH], output: LogicValue.LOW },
    ],
  },
  [GateType.NAND]: {
    type: GateType.NAND,
    name: "NAND Gate",
    mnemonic: "Not AND",
    description: "Outputs LOW only if all inputs are HIGH.",
    expression: "Y = ¬(A · B)",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.LOW },
    ],
  },
  [GateType.NOR]: {
    type: GateType.NOR,
    name: "NOR Gate",
    mnemonic: "Not OR",
    description: "Outputs HIGH only if all inputs are LOW.",
    expression: "Y = ¬(A + B)",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.LOW },
    ],
  },
  [GateType.XOR]: {
    type: GateType.XOR,
    name: "XOR Gate",
    mnemonic: "One but not both",
    description: "Outputs HIGH if exactly one input is HIGH.",
    expression: "Y = A ⊕ B",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.LOW },
    ],
  },
  [GateType.XNOR]: {
    type: GateType.XNOR,
    name: "XNOR Gate",
    mnemonic: "Both same",
    description: "Outputs HIGH if both inputs are the same.",
    expression: "Y = ¬(A ⊕ B)",
    truthTable: [
      { inputs: [LogicValue.LOW, LogicValue.LOW], output: LogicValue.HIGH },
      { inputs: [LogicValue.LOW, LogicValue.HIGH], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.LOW], output: LogicValue.LOW },
      { inputs: [LogicValue.HIGH, LogicValue.HIGH], output: LogicValue.HIGH },
    ],
  },
};

const createQuadGatePinout = (gateName: string): Pin[] => [
  {
    id: "1",
    name: "1A",
    description: `Input A of gate 1`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "2",
    name: "1B",
    description: `Input B of gate 1`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "3",
    name: "1Y",
    description: `Output of gate 1`,
    type: "output",
    x: 0,
    y: 0,
  },
  {
    id: "4",
    name: "2A",
    description: `Input A of gate 2`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "5",
    name: "2B",
    description: `Input B of gate 2`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "6",
    name: "2Y",
    description: `Output of gate 2`,
    type: "output",
    x: 0,
    y: 0,
  },
  {
    id: "7",
    name: "GND",
    description: "Ground (0V)",
    type: "ground",
    x: 0,
    y: 0,
  },
  {
    id: "8",
    name: "3Y",
    description: `Output of gate 3`,
    type: "output",
    x: 0,
    y: 0,
  },
  {
    id: "9",
    name: "3A",
    description: `Input A of gate 3`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "10",
    name: "3B",
    description: `Input B of gate 3`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "11",
    name: "4Y",
    description: `Output of gate 4`,
    type: "output",
    x: 0,
    y: 0,
  },
  {
    id: "12",
    name: "4A",
    description: `Input A of gate 4`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "13",
    name: "4B",
    description: `Input B of gate 4`,
    type: "input",
    x: 0,
    y: 0,
  },
  {
    id: "14",
    name: "VCC",
    description: "Positive Supply (+5V)",
    type: "power",
    x: 0,
    y: 0,
  },
];

export const ICS: Record<string, ICDefinition> = {
  "7400": {
    id: "7400",
    name: "7400 Quad 2-input NAND",
    description: "Contains four independent 2-input NAND gates.",
    pinout: createQuadGatePinout("NAND"),
    datasheetUrl: "https://www.ti.com/lit/ds/symlink/sn7400.pdf",
    diagramUrl: "/images/nand-gate.jpg",
  },
  "7402": {
    id: "7402",
    name: "7402 Quad 2-input NOR",
    description: "Contains four independent 2-input NOR gates.",
    pinout: [
      {
        id: "1",
        name: "1Y",
        description: "Output of gate 1",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "2",
        name: "1A",
        description: "Input A of gate 1",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "3",
        name: "1B",
        description: "Input B of gate 1",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "4",
        name: "2Y",
        description: "Output of gate 2",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "5",
        name: "2A",
        description: "Input A of gate 2",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "6",
        name: "2B",
        description: "Input B of gate 2",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "7",
        name: "GND",
        description: "Ground (0V)",
        type: "ground",
        x: 0,
        y: 0,
      },
      {
        id: "8",
        name: "3A",
        description: "Input A of gate 3",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "9",
        name: "3B",
        description: "Input B of gate 3",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "10",
        name: "3Y",
        description: "Output of gate 3",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "11",
        name: "4A",
        description: "Input A of gate 4",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "12",
        name: "4B",
        description: "Input B of gate 4",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "13",
        name: "4Y",
        description: "Output of gate 4",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "14",
        name: "VCC",
        description: "Positive Supply (+5V)",
        type: "power",
        x: 0,
        y: 0,
      },
    ],
    datasheetUrl: "https://www.ti.com/lit/ds/symlink/sn7402.pdf",
    diagramUrl: "/images/nor-gate.jpg",
  },
  "7404": {
    id: "7404",
    name: "7404 Hex Inverter",
    description: "Contains six independent NOT gates.",
    pinout: [
      {
        id: "1",
        name: "1A",
        description: "Input of inverter 1",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "2",
        name: "1Y",
        description: "Output of inverter 1",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "3",
        name: "2A",
        description: "Input of inverter 2",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "4",
        name: "2Y",
        description: "Output of inverter 2",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "5",
        name: "3A",
        description: "Input of inverter 3",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "6",
        name: "3Y",
        description: "Output of inverter 3",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "7",
        name: "GND",
        description: "Ground (0V)",
        type: "ground",
        x: 0,
        y: 0,
      },
      {
        id: "8",
        name: "4Y",
        description: "Output of inverter 4",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "9",
        name: "4A",
        description: "Input of inverter 4",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "10",
        name: "5Y",
        description: "Output of inverter 5",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "11",
        name: "5A",
        description: "Input of inverter 5",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "12",
        name: "6Y",
        description: "Output of inverter 6",
        type: "output",
        x: 0,
        y: 0,
      },
      {
        id: "13",
        name: "6A",
        description: "Input of inverter 6",
        type: "input",
        x: 0,
        y: 0,
      },
      {
        id: "14",
        name: "VCC",
        description: "Positive Supply (+5V)",
        type: "power",
        x: 0,
        y: 0,
      },
    ],
    datasheetUrl: "https://www.ti.com/lit/ds/symlink/sn7404.pdf",
    diagramUrl: "/images/not-gate.jpg",
  },
  "7408": {
    id: "7408",
    name: "7408 Quad 2-input AND",
    description: "Contains four independent 2-input AND gates.",
    pinout: createQuadGatePinout("AND"),
    datasheetUrl: "https://www.futurlec.com/74/IC7408.shtml",
    diagramUrl: "/images/and-gate.jpg",
  },
  "7432": {
    id: "7432",
    name: "7432 Quad 2-input OR",
    description: "Contains four independent 2-input OR gates.",
    pinout: createQuadGatePinout("OR"),
    datasheetUrl: "https://www.ti.com/lit/ds/symlink/sn7432.pdf",
    diagramUrl: "/images/or-gate.jpg",
  },
  "7486": {
    id: "7486",
    name: "7486 Quad 2-input XOR",
    description: "Contains four independent 2-input XOR gates.",
    pinout: createQuadGatePinout("XOR"),
    datasheetUrl: "https://www.ti.com/lit/ds/symlink/sn74hc86.pdf",
    diagramUrl: "/images/xor-gate.jpg",
  },
  "74266": {
    id: "74266",
    name: "74266 Quad 2-input XNOR",
    description: "Contains four independent 2-input XNOR gates.",
    pinout: createQuadGatePinout("XNOR"),
    datasheetUrl: "https://www.futurlec.com/Datasheet/74ls/74LS266.pdf",
    diagramUrl: "/images/xnor-gate.jpg",
  },
};

const wireColor = (value: number) => (value === 1 ? "#22c55e" : "currentColor");

export const COMBINATIONAL_CIRCUITS: Record<
  string,
  CombinationalCircuitDefinition
> = {
  "half-adder": {
    id: "half-adder",
    name: "Half Adder",
    description:
      "A combinational circuit that performs the addition of two bits. It has two inputs (A, B) and two outputs (Sum, Carry).",
    inputs: ["A", "B"],
    outputs: ["Sum", "Carry"],
    expression: ["Sum (S): A ⨁ B", "Carry (Cout): A . B"],
    truthTable: [
      { A: 0, B: 0, Sum: 0, Carry: 0 },
      { A: 0, B: 1, Sum: 1, Carry: 0 },
      { A: 1, B: 0, Sum: 1, Carry: 0 },
      { A: 1, B: 1, Sum: 0, Carry: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        <rect
          x="120"
          y="40"
          width="160"
          height="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="200"
          y="125"
          fontSize="16"
          textAnchor="middle"
          fontWeight="bold"
        >
          HALF ADDER
        </text>

        <line
          x1="60"
          y1="90"
          x2="120"
          y2="90"
          stroke={wireColor(inputs.A)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="150"
          x2="120"
          y2="150"
          stroke={wireColor(inputs.B)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="90"
          x2="340"
          y2="90"
          stroke={wireColor(outputs.Sum)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="150"
          x2="340"
          y2="150"
          stroke={wireColor(outputs.Carry)}
          strokeWidth="2"
        />

        <SvgInputNode
          x={60}
          y={90}
          label="A"
          value={inputs.A}
          onToggle={() => toggleInput("A")}
        />
        <SvgInputNode
          x={60}
          y={150}
          label="B"
          value={inputs.B}
          onToggle={() => toggleInput("B")}
        />
        <SvgOutputNode x={340} y={90} label="Sum" value={outputs.Sum} />
        <SvgOutputNode x={340} y={150} label="Cout" value={outputs.Carry} />
      </svg>
    ),
  },

  "full-adder": {
    id: "full-adder",
    name: "Full Adder",
    description:
      "A combinational circuit that adds three bits: two significant bits and a carry bit from a previous stage.",
    inputs: ["A", "B", "Cin"],
    outputs: ["Sum", "Cout"],
    expression: [
      "Sum (S): A ⨁ B ⨁ Cin",
      "Carry (Cout): (A . B) + (Cin . (A ⨁ B))",
    ],
    truthTable: [
      { A: 0, B: 0, Cin: 0, Sum: 0, Cout: 0 },
      { A: 0, B: 0, Cin: 1, Sum: 1, Cout: 0 },
      { A: 0, B: 1, Cin: 0, Sum: 1, Cout: 0 },
      { A: 0, B: 1, Cin: 1, Sum: 0, Cout: 1 },
      { A: 1, B: 0, Cin: 0, Sum: 1, Cout: 0 },
      { A: 1, B: 0, Cin: 1, Sum: 0, Cout: 1 },
      { A: 1, B: 1, Cin: 0, Sum: 0, Cout: 1 },
      { A: 1, B: 1, Cin: 1, Sum: 1, Cout: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        <rect
          x="120"
          y="40"
          width="160"
          height="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="200" y="125" textAnchor="middle" fontWeight="bold">
          FULL ADDER
        </text>

        <line
          x1="60"
          y1="70"
          x2="120"
          y2="70"
          stroke={wireColor(inputs.A)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="120"
          x2="120"
          y2="120"
          stroke={wireColor(inputs.B)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="170"
          x2="120"
          y2="170"
          stroke={wireColor(inputs.Cin)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="80"
          x2="340"
          y2="80"
          stroke={wireColor(outputs.Sum)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="160"
          x2="340"
          y2="160"
          stroke={wireColor(outputs.Cout)}
          strokeWidth="2"
        />

        <SvgInputNode
          x={60}
          y={70}
          label="A"
          value={inputs.A}
          onToggle={() => toggleInput("A")}
        />
        <SvgInputNode
          x={60}
          y={120}
          label="B"
          value={inputs.B}
          onToggle={() => toggleInput("B")}
        />
        <SvgInputNode
          x={60}
          y={170}
          label="Cin"
          value={inputs.Cin}
          onToggle={() => toggleInput("Cin")}
        />
        <SvgOutputNode x={340} y={80} label="Sum" value={outputs.Sum} />
        <SvgOutputNode x={340} y={160} label="Cout" value={outputs.Cout} />
      </svg>
    ),
  },

  "half-subtractor": {
    id: "half-subtractor",
    name: "Half Subtractor",
    description:
      "A combinational circuit that subtracts one bit from another. It has two inputs (A, B) and two outputs (Difference, Borrow).",
    inputs: ["A", "B"],
    outputs: ["Diff", "Borrow"],
    expression: ["Diff (D): A ⨁ B", "Borrow (Bout): ¬A . B"],
    truthTable: [
      { A: 0, B: 0, Diff: 0, Borrow: 0 },
      { A: 0, B: 1, Diff: 1, Borrow: 1 },
      { A: 1, B: 0, Diff: 1, Borrow: 0 },
      { A: 1, B: 1, Diff: 0, Borrow: 0 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        <rect
          x="120"
          y="40"
          width="160"
          height="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="200"
          y="125"
          textAnchor="middle"
          fontWeight="bold"
          fontSize="12"
        >
          HALF SUBTRACTOR
        </text>

        <line
          x1="60"
          y1="90"
          x2="120"
          y2="90"
          stroke={wireColor(inputs.A)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="150"
          x2="120"
          y2="150"
          stroke={wireColor(inputs.B)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="90"
          x2="340"
          y2="90"
          stroke={wireColor(outputs.Diff)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="150"
          x2="340"
          y2="150"
          stroke={wireColor(outputs.Borrow)}
          strokeWidth="2"
        />

        <SvgInputNode
          x={60}
          y={90}
          label="A"
          value={inputs.A}
          onToggle={() => toggleInput("A")}
        />
        <SvgInputNode
          x={60}
          y={150}
          label="B"
          value={inputs.B}
          onToggle={() => toggleInput("B")}
        />
        <SvgOutputNode x={340} y={90} label="Diff" value={outputs.Diff} />
        <SvgOutputNode x={340} y={150} label="Borrow" value={outputs.Borrow} />
      </svg>
    ),
  },

  "full-subtractor": {
    id: "full-subtractor",
    name: "Full Subtractor",
    description:
      "A combinational circuit that subtracts two bits and also takes into account a borrow from a previous stage.",
    inputs: ["A", "B", "Bin"],
    outputs: ["Diff", "Bout"],
    expression: [
      "Difference (D): A ⨁ B ⨁ Bin",
      "Borrow (Bout): (¬A . B) + (Bin . ¬(A ⨁ B))",
    ],
    truthTable: [
      { A: 0, B: 0, Bin: 0, Diff: 0, Bout: 0 },
      { A: 0, B: 0, Bin: 1, Diff: 1, Bout: 1 },
      { A: 0, B: 1, Bin: 0, Diff: 1, Bout: 1 },
      { A: 0, B: 1, Bin: 1, Diff: 0, Bout: 1 },
      { A: 1, B: 0, Bin: 0, Diff: 1, Bout: 0 },
      { A: 1, B: 0, Bin: 1, Diff: 0, Bout: 0 },
      { A: 1, B: 1, Bin: 0, Diff: 0, Bout: 0 },
      { A: 1, B: 1, Bin: 1, Diff: 1, Bout: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        <rect
          x="120"
          y="40"
          width="160"
          height="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="200"
          y="125"
          textAnchor="middle"
          fontWeight="bold"
          fontSize="12"
        >
          FULL SUBTRACTOR
        </text>

        <line
          x1="60"
          y1="70"
          x2="120"
          y2="70"
          stroke={wireColor(inputs.A)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="120"
          x2="120"
          y2="120"
          stroke={wireColor(inputs.B)}
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="170"
          x2="120"
          y2="170"
          stroke={wireColor(inputs.Bin)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="80"
          x2="340"
          y2="80"
          stroke={wireColor(outputs.Diff)}
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="160"
          x2="340"
          y2="160"
          stroke={wireColor(outputs.Bout)}
          strokeWidth="2"
        />

        <SvgInputNode
          x={60}
          y={70}
          label="A"
          value={inputs.A}
          onToggle={() => toggleInput("A")}
        />
        <SvgInputNode
          x={60}
          y={120}
          label="B"
          value={inputs.B}
          onToggle={() => toggleInput("B")}
        />
        <SvgInputNode
          x={60}
          y={170}
          label="Bin"
          value={inputs.Bin}
          onToggle={() => toggleInput("Bin")}
        />
        <SvgOutputNode x={340} y={80} label="Diff" value={outputs.Diff} />
        <SvgOutputNode x={340} y={160} label="Bout" value={outputs.Bout} />
      </svg>
    ),
  },

  "mux-2-1": {
    id: "mux-2-1",
    name: "2-to-1 Multiplexer",
    description:
      "A circuit that selects one of several input signals and forwards the selected input into a single line based on a selection signal.",
    inputs: ["S", "I0", "I1"],
    outputs: ["Y"],
    expression: ["Output (Y): (¬S . I0) + (S . I1)"],
    truthTable: [
      { S: 0, I0: 0, I1: 0, Y: 0 },
      { S: 0, I0: 1, I1: 0, Y: 1 },
      { S: 1, I0: 0, I1: 0, Y: 0 },
      { S: 1, I0: 0, I1: 1, Y: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-zinc-900">
        <path
          d="M155,25 L245,50 L245,155 L155,175 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="200" y="105" textAnchor="middle" fontWeight="bold">
          MUX
        </text>

        {/* I0 input */}
        <line
          x1="75"
          y1="75"
          x2="155"
          y2="75"
          stroke={wireColor(inputs.I0)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={75}
          label="I0"
          value={inputs.I0}
          onToggle={() => toggleInput("I0")}
        />

        {/* I1 input */}
        <line
          x1="75"
          y1="130"
          x2="155"
          y2="130"
          stroke={wireColor(inputs.I1)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={130}
          label="I1"
          value={inputs.I1}
          onToggle={() => toggleInput("I1")}
        />

        {/* Select line */}
        <line
          x1="200"
          y1="164"
          x2="200"
          y2="210"
          stroke={wireColor(inputs.S)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={200}
          y={200}
          label="S"
          value={inputs.S}
          onToggle={() => toggleInput("S")}
        />

        {/* Output */}
        <line
          x1="245"
          y1="100"
          x2="318"
          y2="100"
          stroke={wireColor(outputs.Y)}
          strokeWidth="2"
        />
        <SvgOutputNode x={318} y={100} label="Y" value={outputs.Y} />
      </svg>
    ),
  },

  "demux-1-2": {
    id: "demux-1-2",
    name: "1-to-2 Demultiplexer",
    description:
      "A circuit that takes a single input signal and selects one of many data-output lines, which is connected to the single input.",
    inputs: ["S", "I"],
    outputs: ["Y0", "Y1"],
    expression: ["Output (Y0): ¬S . I", "Output (Y1): S . I"],
    truthTable: [
      { S: 0, I: 0, Y0: 0, Y1: 0 },
      { S: 0, I: 1, Y0: 1, Y1: 0 },
      { S: 1, I: 0, Y0: 0, Y1: 0 },
      { S: 1, I: 1, Y0: 0, Y1: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-zinc-900">
        <path
          d="M155,55 L245,30 L245,165 L155,140 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="200" y="102" textAnchor="middle" fontWeight="bold">
          DEMUX
        </text>

        {/* Input */}
        <line
          x1="75"
          y1="97"
          x2="155"
          y2="97"
          stroke={wireColor(inputs.I)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={97}
          label="I"
          value={inputs.I}
          onToggle={() => toggleInput("I")}
        />

        {/* Select line */}
        <line
          x1="200"
          y1="152"
          x2="200"
          y2="200"
          stroke={wireColor(inputs.S)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={200}
          y={200}
          label="S"
          value={inputs.S}
          onToggle={() => toggleInput("S")}
        />

        {/* Outputs */}
        <line
          x1="245"
          y1="65"
          x2="318"
          y2="65"
          stroke={wireColor(outputs.Y0)}
          strokeWidth="2"
        />
        <line
          x1="245"
          y1="130"
          x2="318"
          y2="130"
          stroke={wireColor(outputs.Y1)}
          strokeWidth="2"
        />
        <SvgOutputNode x={318} y={65} label="Y0" value={outputs.Y0} />
        <SvgOutputNode x={318} y={130} label="Y1" value={outputs.Y1} />
      </svg>
    ),
  },

  "decoder-2-4": {
    id: "decoder-2-4",
    name: "2-to-4 Decoder",
    description:
      "A circuit that converts binary information from n input lines to a maximum of 2^n unique output lines.",
    inputs: ["A", "B"],
    outputs: ["Y0", "Y1", "Y2", "Y3"],
    expression: [
      "Output (Y0): ¬A . ¬B",
      "Output (Y1): ¬A . B",
      "Output (Y2): A . ¬B",
      "Output (Y3): A . B",
    ],
    truthTable: [
      { A: 0, B: 0, Y0: 1, Y1: 0, Y2: 0, Y3: 0 },
      { A: 0, B: 1, Y0: 0, Y1: 1, Y2: 0, Y3: 0 },
      { A: 1, B: 0, Y0: 0, Y1: 0, Y2: 1, Y3: 0 },
      { A: 1, B: 1, Y0: 0, Y1: 0, Y2: 0, Y3: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        {/* Centered: box from x=140 to x=260, y=30 to y=210 */}
        <rect
          x="140"
          y="30"
          width="120"
          height="180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="200" y="125" textAnchor="middle" fontWeight="bold">
          DECODER
        </text>

        {/* Inputs */}
        <line
          x1="75"
          y1="85"
          x2="140"
          y2="85"
          stroke={wireColor(inputs.A)}
          strokeWidth="2"
        />
        <line
          x1="75"
          y1="155"
          x2="140"
          y2="155"
          stroke={wireColor(inputs.B)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={85}
          label="A"
          value={inputs.A}
          onToggle={() => toggleInput("A")}
        />
        <SvgInputNode
          x={75}
          y={155}
          label="B"
          value={inputs.B}
          onToggle={() => toggleInput("B")}
        />

        {/* Outputs */}
        <line
          x1="260"
          y1="45"
          x2="325"
          y2="45"
          stroke={wireColor(outputs.Y0)}
          strokeWidth="2"
        />
        <SvgOutputNode x={325} y={45} label="Y0" value={outputs.Y0} />
        <line
          x1="260"
          y1="95"
          x2="325"
          y2="95"
          stroke={wireColor(outputs.Y1)}
          strokeWidth="2"
        />
        <SvgOutputNode x={325} y={95} label="Y1" value={outputs.Y1} />
        <line
          x1="260"
          y1="145"
          x2="325"
          y2="145"
          stroke={wireColor(outputs.Y2)}
          strokeWidth="2"
        />
        <SvgOutputNode x={325} y={145} label="Y2" value={outputs.Y2} />
        <line
          x1="260"
          y1="195"
          x2="325"
          y2="195"
          stroke={wireColor(outputs.Y3)}
          strokeWidth="2"
        />
        <SvgOutputNode x={325} y={195} label="Y3" value={outputs.Y3} />
      </svg>
    ),
  },

  "encoder-4-2": {
    id: "encoder-4-2",
    name: "4-to-2 Encoder",
    description:
      "A circuit that performs the inverse operation of a decoder. It has 2^n input lines and n output lines.",
    inputs: ["I0", "I1", "I2", "I3"],
    outputs: ["A", "B"],
    expression: ["Output (A): I2 + I3", "Output (B): I1 + I3"],
    truthTable: [
      { I0: 1, I1: 0, I2: 0, I3: 0, A: 0, B: 0 },
      { I0: 0, I1: 1, I2: 0, I3: 0, A: 0, B: 1 },
      { I0: 0, I1: 0, I2: 1, I3: 0, A: 1, B: 0 },
      { I0: 0, I1: 0, I2: 0, I3: 1, A: 1, B: 1 },
    ],
    blockDiagram: ({ inputs, outputs, toggleInput }) => (
      <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
        {/* Centered: box from x=140 to x=260, y=30 to y=210 */}
        <rect
          x="140"
          y="30"
          width="120"
          height="180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text x="200" y="125" textAnchor="middle" fontWeight="bold">
          ENCODER
        </text>

        {/* Inputs */}
        <line
          x1="75"
          y1="45"
          x2="140"
          y2="45"
          stroke={wireColor(inputs.I0)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={45}
          label="I0"
          value={inputs.I0}
          onToggle={() => toggleInput("I0")}
        />
        <line
          x1="75"
          y1="95"
          x2="140"
          y2="95"
          stroke={wireColor(inputs.I1)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={95}
          label="I1"
          value={inputs.I1}
          onToggle={() => toggleInput("I1")}
        />
        <line
          x1="75"
          y1="145"
          x2="140"
          y2="145"
          stroke={wireColor(inputs.I2)}
          strokeWidth="2"
        />
        <SvgInputNode
          x={75}
          y={95}
          label="I1"
          value={inputs.I1}
          onToggle={() => toggleInput("I1")}
        />
        <line
          x1="75"
          y1="195"
          x2="140"
          y2="195"
          stroke={wireColor(inputs.I3)}
          strokeWidth="2"
        />

        <SvgInputNode
          x={75}
          y={145}
          label="I2"
          value={inputs.I2}
          onToggle={() => toggleInput("I2")}
        />
        <SvgInputNode
          x={75}
          y={195}
          label="I3"
          value={inputs.I3}
          onToggle={() => toggleInput("I3")}
        />

        {/* Outputs */}
        <line
          x1="260"
          y1="85"
          x2="325"
          y2="85"
          stroke={wireColor(outputs.A)}
          strokeWidth="2"
        />
        <line
          x1="260"
          y1="165"
          x2="325"
          y2="165"
          stroke={wireColor(outputs.B)}
          strokeWidth="2"
        />
        <SvgOutputNode x={325} y={85} label="A" value={outputs.A} />
        <SvgOutputNode x={325} y={165} label="B" value={outputs.B} />
      </svg>
    ),
  },
};

export const SEQUENTIAL_CIRCUITS: Record<string, SequentialCircuitDefinition> =
  {
    "sr-latch": {
      id: "sr-latch",
      name: "SR Latch",
      description:
        "The Set-Reset (SR) latch is the simplest sequential circuit. It can store one bit of data.",
      inputs: ["S", "R"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { S: 0, R: 0, Q: "NC", "Q'": "NC" },
        { S: 0, R: 1, Q: 0, "Q'": 1 },
        { S: 1, R: 0, Q: 1, "Q'": 0 },
        { S: 1, R: 1, Q: "Invalid", "Q'": "Invalid" },
      ],
      blockDiagram: ({ inputs, outputs, toggleInput }) => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-zinc-900">
          <rect
            x="120"
            y="40"
            width="160"
            height="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="200"
            y="105"
            fontSize="16"
            textAnchor="middle"
            fontWeight="bold"
          >
            SR LATCH
          </text>
          <line
            x1="60"
            y1="70"
            x2="120"
            y2="70"
            stroke={wireColor(inputs.S)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={70}
            label="S"
            value={inputs.S}
            onToggle={() => toggleInput("S")}
          />
          <line
            x1="60"
            y1="130"
            x2="120"
            y2="130"
            stroke={wireColor(inputs.R)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={130}
            label="R"
            value={inputs.R}
            onToggle={() => toggleInput("R")}
          />
          <line
            x1="280"
            y1="70"
            x2="340"
            y2="70"
            stroke={wireColor(outputs.Q)}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q} />
          <line
            x1="280"
            y1="130"
            x2="340"
            y2="130"
            stroke={wireColor(outputs["Q'"])}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={130} label="Q'" value={outputs["Q'"]} />
        </svg>
      ),
    },
    "d-flip-flop": {
      id: "d-flip-flop",
      name: "D Flip-Flop",
      description:
        "The Data (D) flip-flop captures the value of the D-input at a specific portion of the clock cycle (such as the rising edge).",
      inputs: ["D", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { D: 0, CLK: "↑", Q: 0, "Q'": 1 },
        { D: 1, CLK: "↑", Q: 1, "Q'": 0 },
      ],
      blockDiagram: ({ inputs, outputs, toggleInput }) => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-zinc-900">
          <rect
            x="120"
            y="40"
            width="160"
            height="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="200"
            y="105"
            fontSize="16"
            textAnchor="middle"
            fontWeight="bold"
          >
            D FLIP-FLOP
          </text>
          <line
            x1="60"
            y1="70"
            x2="120"
            y2="70"
            stroke={wireColor(inputs.D)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={70}
            label="D"
            value={inputs.D}
            onToggle={() => toggleInput("D")}
          />
          <polyline
            points="120,120 130,130 120,140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="60"
            y1="130"
            x2="120"
            y2="130"
            stroke={wireColor(inputs.CLK)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={130}
            label="CLK"
            value={inputs.CLK}
            onToggle={() => toggleInput("CLK")}
          />
          <line
            x1="280"
            y1="70"
            x2="340"
            y2="70"
            stroke={wireColor(outputs.Q)}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q} />
          <line
            x1="280"
            y1="130"
            x2="340"
            y2="130"
            stroke={wireColor(outputs["Q'"])}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={130} label="Q'" value={outputs["Q'"]} />
        </svg>
      ),
    },
    "jk-flip-flop": {
      id: "jk-flip-flop",
      name: "JK Flip-Flop",
      description:
        "The JK flip-flop is a universal flip-flop because it can be configured to work as an SR, D, or T flip-flop.",
      inputs: ["J", "K", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { J: 0, K: 0, CLK: "↑", Q: "NC", "Q'": "NC" },
        { J: 0, K: 1, CLK: "↑", Q: 0, "Q'": 1 },
        { J: 1, K: 0, CLK: "↑", Q: 1, "Q'": 0 },
        { J: 1, K: 1, CLK: "↑", Q: "Toggle", "Q'": "Toggle" },
      ],
      blockDiagram: ({ inputs, outputs, toggleInput }) => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-zinc-900">
          <rect
            x="120"
            y="20"
            width="160"
            height="155"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="200"
            y="105"
            fontSize="16"
            textAnchor="middle"
            fontWeight="bold"
          >
            JK FLIP-FLOP
          </text>
          <line
            x1="60"
            y1="45"
            x2="120"
            y2="45"
            stroke={wireColor(inputs.J)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={45}
            label="J"
            value={inputs.J}
            onToggle={() => toggleInput("J")}
          />
          <polyline
            points="120,90 130,100 120,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="60"
            y1="100"
            x2="120"
            y2="100"
            stroke={wireColor(inputs.CLK)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={100}
            label="CLK"
            value={inputs.CLK}
            onToggle={() => toggleInput("CLK")}
          />
          <line
            x1="60"
            y1="150"
            x2="120"
            y2="150"
            stroke={wireColor(inputs.K)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={150}
            label="K"
            value={inputs.K}
            onToggle={() => toggleInput("K")}
          />
          <line
            x1="280"
            y1="70"
            x2="340"
            y2="70"
            stroke={wireColor(outputs.Q)}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q} />
          <line
            x1="280"
            y1="130"
            x2="340"
            y2="130"
            stroke={wireColor(outputs["Q'"])}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={130} label="Q'" value={outputs["Q'"]} />
        </svg>
      ),
    },
    "t-flip-flop": {
      id: "t-flip-flop",
      name: "T Flip-Flop",
      description:
        "The Toggle (T) flip-flop changes its output state on every clock pulse if the T input is high.",
      inputs: ["T", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { T: 0, CLK: "↑", Q: "NC", "Q'": "NC" },
        { T: 1, CLK: "↑", Q: "Toggle", "Q'": "Toggle" },
      ],
      blockDiagram: ({ inputs, outputs, toggleInput }) => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-zinc-900">
          <rect
            x="120"
            y="40"
            width="160"
            height="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="200"
            y="105"
            fontSize="16"
            textAnchor="middle"
            fontWeight="bold"
          >
            T FLIP-FLOP
          </text>
          <line
            x1="60"
            y1="70"
            x2="120"
            y2="70"
            stroke={wireColor(inputs.T)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={70}
            label="T"
            value={inputs.T}
            onToggle={() => toggleInput("T")}
          />
          <polyline
            points="120,120 130,130 120,140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="60"
            y1="130"
            x2="120"
            y2="130"
            stroke={wireColor(inputs.CLK)}
            strokeWidth="2"
          />
          <SvgInputNode
            x={60}
            y={130}
            label="CLK"
            value={inputs.CLK}
            onToggle={() => toggleInput("CLK")}
          />
          <line
            x1="280"
            y1="70"
            x2="340"
            y2="70"
            stroke={wireColor(outputs.Q)}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q} />
          <line
            x1="280"
            y1="130"
            x2="340"
            y2="130"
            stroke={wireColor(outputs["Q'"])}
            strokeWidth="2"
          />
          <SvgOutputNode x={340} y={130} label="Q'" value={outputs["Q'"]} />
        </svg>
      ),
    },
    // counter: {
    //   id: "counter",
    //   name: "4-bit Binary Counter",
    //   description:
    //     "A sequential circuit that counts from 0 to 15 in binary. It increments on each clock pulse.",
    //   inputs: ["CLK", "CLR"],
    //   outputs: ["Q3", "Q2", "Q1", "Q0"],
    //   truthTable: [
    //     {
    //       CLK: "↑",
    //       CLR: 0,
    //       Q3: "-",
    //       Q2: "-",
    //       Q1: "-",
    //       Q0: "-",
    //       Action: "Count++",
    //     },
    //     { CLK: "X", CLR: 1, Q3: 0, Q2: 0, Q1: 0, Q0: 0, Action: "Reset" },
    //   ],
    //   blockDiagram: ({ inputs, outputs, toggleInput }) => (
    //     <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
    //       {/* Box */}
    //       <rect
    //         x="120"
    //         y="20"
    //         width="160"
    //         height="200"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //       />
    //       <text
    //         x="200"
    //         y="125"
    //         fontSize="13"
    //         textAnchor="middle"
    //         fontWeight="bold"
    //       >
    //         4-BIT COUNTER
    //       </text>
    //       {/* CLK clock */}
    //       <polyline
    //         points="120,85 132,95 120,105"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //       />
    //       {/* Input wires */}
    //       <line
    //         x1="55"
    //         y1="95"
    //         x2="120"
    //         y2="95"
    //         stroke={wireColor(inputs.CLK)}
    //         strokeWidth="2"
    //       />
    //       <SvgInputNode
    //         x={55}
    //         y={95}
    //         label="CLK"
    //         value={inputs.CLK}
    //         onToggle={() => toggleInput("CLK")}
    //       />
    //       <line
    //         x1="55"
    //         y1="155"
    //         x2="120"
    //         y2="155"
    //         stroke={wireColor(inputs.CLR)}
    //         strokeWidth="2"
    //       />
    //       <SvgInputNode
    //         x={55}
    //         y={155}
    //         label="CLR"
    //         value={inputs.CLR}
    //         onToggle={() => toggleInput("CLR")}
    //       />
    //       {/* Output wires */}
    //       <line
    //         x1="280"
    //         y1="45"
    //         x2="345"
    //         y2="45"
    //         stroke={wireColor(outputs.Q3)}
    //         strokeWidth="2"
    //       />
    //       <SvgOutputNode x={345} y={45} label="Q3" value={outputs.Q3} />
    //       <line
    //         x1="280"
    //         y1="95"
    //         x2="345"
    //         y2="95"
    //         stroke={wireColor(outputs.Q2)}
    //         strokeWidth="2"
    //       />
    //       <SvgOutputNode x={345} y={95} label="Q2" value={outputs.Q2} />
    //       <line
    //         x1="280"
    //         y1="145"
    //         x2="345"
    //         y2="145"
    //         stroke={wireColor(outputs.Q1)}
    //         strokeWidth="2"
    //       />
    //       <SvgOutputNode x={345} y={145} label="Q1" value={outputs.Q1} />
    //       <line
    //         x1="280"
    //         y1="195"
    //         x2="345"
    //         y2="195"
    //         stroke={wireColor(outputs.Q0)}
    //         strokeWidth="2"
    //       />
    //       <SvgOutputNode x={345} y={195} label="Q0" value={outputs.Q0} />
    //     </svg>
    //   ),
    // },
  };
