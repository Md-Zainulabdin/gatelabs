import {
  GateType,
  GateDefinition,
  ICDefinition,
  Pin,
  LogicState,
  CombinationalCircuitDefinition,
  SequentialCircuitDefinition,
} from "@/src/libs/types";

import { GATE_PATHS } from "@/src/components/diagrams/gateSymbols";
import * as Diagrams from "@/src/components/diagrams/CircuitDiagrams";

/**
 * Renders the primary symbol for a logic gate using pre-defined SVG paths.
 */
export const GateSymbol = ({ type }: { type: GateType }) => (
  <svg viewBox="0 0 100 60" className="w-full h-full">
    {GATE_PATHS[type]}
  </svg>
);

/**
 * GATES Record: Source of truth for all primitive logic gate properties.
 */
export const GATES: Record<GateType, GateDefinition> = {
  [GateType.AND]: {
    type: GateType.AND,
    name: "AND Gate",
    mnemonic: "All must agree",
    description: "Outputs HIGH only if all inputs are HIGH.",
    expression: "Y = A · B",
    truthTable: [
      { inputs: [0, 0], output: 0 },
      { inputs: [0, 1], output: 0 },
      { inputs: [1, 0], output: 0 },
      { inputs: [1, 1], output: 1 },
    ],
  },
  [GateType.OR]: {
    type: GateType.OR,
    name: "OR Gate",
    mnemonic: "One is enough",
    description: "Outputs HIGH if at least one input is HIGH.",
    expression: "Y = A + B",
    truthTable: [
      { inputs: [0, 0], output: 0 },
      { inputs: [0, 1], output: 1 },
      { inputs: [1, 0], output: 1 },
      { inputs: [1, 1], output: 1 },
    ],
  },
  [GateType.NOT]: {
    type: GateType.NOT,
    name: "NOT Gate (Inverter)",
    mnemonic: "The opposite",
    description: "Inverts the input signal.",
    expression: "Y = ¬A",
    truthTable: [
      { inputs: [0], output: 1 },
      { inputs: [1], output: 0 },
    ],
  },
  [GateType.NAND]: {
    type: GateType.NAND,
    name: "NAND Gate",
    mnemonic: "Not AND",
    description: "Outputs LOW only if all inputs are HIGH.",
    expression: "Y = ¬(A · B)",
    truthTable: [
      { inputs: [0, 0], output: 1 },
      { inputs: [0, 1], output: 1 },
      { inputs: [1, 0], output: 1 },
      { inputs: [1, 1], output: 0 },
    ],
  },
  [GateType.NOR]: {
    type: GateType.NOR,
    name: "NOR Gate",
    mnemonic: "Not OR",
    description: "Outputs HIGH only if all inputs are LOW.",
    expression: "Y = ¬(A + B)",
    truthTable: [
      { inputs: [0, 0], output: 1 },
      { inputs: [0, 1], output: 0 },
      { inputs: [1, 0], output: 0 },
      { inputs: [1, 1], output: 0 },
    ],
  },
  [GateType.XOR]: {
    type: GateType.XOR,
    name: "XOR Gate",
    mnemonic: "One but not both",
    description: "Outputs HIGH if exactly one input is HIGH.",
    expression: "Y = A ⊕ B",
    truthTable: [
      { inputs: [0, 0], output: 0 },
      { inputs: [0, 1], output: 1 },
      { inputs: [1, 0], output: 1 },
      { inputs: [1, 1], output: 0 },
    ],
  },
  [GateType.XNOR]: {
    type: GateType.XNOR,
    name: "XNOR Gate",
    mnemonic: "Both same",
    description: "Outputs HIGH if both inputs are the same.",
    expression: "Y = ¬(A ⊕ B)",
    truthTable: [
      { inputs: [0, 0], output: 1 },
      { inputs: [0, 1], output: 0 },
      { inputs: [1, 0], output: 0 },
      { inputs: [1, 1], output: 1 },
    ],
  },
};

// Refined evaluator to support N-inputs and the LogicState type
export const evaluateGate = (type: GateType, inputs: number[]): LogicState => {
  if (inputs.length === 0) return "Invalid";

  const hasHigh = inputs.includes(1);
  const allHigh = inputs.every((v) => v === 1);

  switch (type) {
    case GateType.AND:
      return allHigh ? 1 : 0;
    case GateType.NAND:
      return allHigh ? 0 : 1;
    case GateType.OR:
      return hasHigh ? 1 : 0;
    case GateType.NOR:
      return hasHigh ? 0 : 1;
    case GateType.NOT:
      return inputs[0] === 1 ? 0 : 1;
    case GateType.XOR:
      return inputs.reduce((acc, val) => acc ^ val, 0) as 0 | 1;
    case GateType.XNOR:
      return inputs.reduce((acc, val) => acc ^ val, 0) === 0 ? 1 : 0;
    default:
      return "Invalid";
  }
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
    evaluate: (i) => ({
      Sum: (i.A ^ i.B) as LogicState,
      Carry: (i.A & i.B) as LogicState,
    }),
    blockDiagram: Diagrams.HalfAdderDiagram,
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
    evaluate: (i) => ({
      Sum: (i.A ^ i.B ^ i.Cin) as LogicState,
      Cout: ((i.A & i.B) | (i.Cin & (i.A ^ i.B))) as LogicState,
    }),
    blockDiagram: Diagrams.FullAdderDiagram,
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
    evaluate: (i) => ({
      Diff: (i.A ^ i.B) as LogicState,
      Borrow: (i.A === 0 && i.B === 1 ? 1 : 0) as LogicState,
    }),
    blockDiagram: Diagrams.HalfSubtractorDiagram,
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
    evaluate: (i) => ({
      Diff: (i.A ^ i.B ^ i.Bin) as LogicState,
      Bout: ((i.A === 0 && i.B === 1) || (i.Bin === 1 && (i.A ^ i.B) === 0)
        ? 1
        : 0) as LogicState,
    }),
    blockDiagram: Diagrams.FullSubtractorDiagram,
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
    evaluate: (i) => ({ Y: (i.S === 0 ? i.I0 : i.I1) as LogicState }),
    blockDiagram: Diagrams.MultiplexerDiagram,
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
    evaluate: (i) => ({
      Y0: (i.S === 0 && i.I === 1 ? 1 : 0) as LogicState,
      Y1: (i.S === 1 && i.I === 1 ? 1 : 0) as LogicState,
    }),
    blockDiagram: Diagrams.DemultiplexerDiagram,
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
    evaluate: (i) => ({
      Y0: (i.A === 0 && i.B === 0 ? 1 : 0) as LogicState,
      Y1: (i.A === 0 && i.B === 1 ? 1 : 0) as LogicState,
      Y2: (i.A === 1 && i.B === 0 ? 1 : 0) as LogicState,
      Y3: (i.A === 1 && i.B === 1 ? 1 : 0) as LogicState,
    }),
    blockDiagram: Diagrams.DecoderDiagram,
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
    evaluate: (i) => ({
      A: (i.I2 === 1 || i.I3 === 1 ? 1 : 0) as LogicState,
      B: (i.I1 === 1 || i.I3 === 1 ? 1 : 0) as LogicState,
    }),
    blockDiagram: Diagrams.EncoderDiagram,
  },
};

export const SEQUENTIAL_CIRCUITS: Record<string, SequentialCircuitDefinition> =
  {
    "sr-latch": {
      id: "sr-latch",
      name: "SR Latch",
      description:
        "An SR (Set-Reset) latch is a fundamental digital circuit used as a 1-bit memory element, holding a state (Q) until updated. It uses cross-coupled NOR or NAND gates to create feedback. When S=1, Q is set to 1; when R=1, Q is reset to 0. Both inputs at 1 is forbidden/invalid.",
      inputs: ["S", "R"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { S: 0, R: 0, Q: "NC", "Q'": "NC" },
        { S: 0, R: 1, Q: 0, "Q'": 1 },
        { S: 1, R: 0, Q: 1, "Q'": 0 },
        { S: 1, R: 1, Q: "Invalid", "Q'": "Invalid" },
      ],
      evaluate: (inputs, prevState) => {
        if (inputs.S === 1 && inputs.R === 1)
          return { Q: "Invalid", "Q'": "Invalid" };
        if (inputs.S === 1 && inputs.R === 0) return { Q: 1, "Q'": 0 };
        if (inputs.S === 0 && inputs.R === 1) return { Q: 0, "Q'": 1 };
        return prevState;
      },
      blockDiagram: Diagrams.SRLatchDiagram,
    },
    "d-flip-flop": {
      id: "d-flip-flop",
      name: "D Flip-Flop",
      description:
        "A D (Data or Delay) flip-flop is a fundamental digital circuit that stores a single bit of data (0 or 1). It operates as a synchronous device that captures the input (D) at the rising edge of the clock signal, transferring it to the output (Q), and holding that value until the next clock cycle.",
      inputs: ["D", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { D: 0, CLK: "↑", Q: 0, "Q'": 1 },
        { D: 1, CLK: "↑", Q: 1, "Q'": 0 },
      ],
      evaluate: (inputs, prevState, isRisingEdge) => {
        if (isRisingEdge) {
          const val = inputs.D === 1 ? 1 : 0;
          return {
            Q: val as LogicState,
            "Q'": (val === 1 ? 0 : 1) as LogicState,
          };
        }
        return prevState;
      },
      blockDiagram: Diagrams.DFlipFlopDiagram,
    },
    "jk-flip-flop": {
      id: "jk-flip-flop",
      name: "JK Flip-Flop",
      description:
        "The JK flip-flop is a universal synchronous memory element that eliminates the invalid state of the SR latch. It operates on the rising edge of the clock: J=1 and K=0 sets Q to 1; J=0 and K=1 resets Q to 0; and J=1 and K=1 toggles the output Q to its complement.",
      inputs: ["J", "K", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { J: 0, K: 0, CLK: "↑", Q: "NC", "Q'": "NC" },
        { J: 0, K: 1, CLK: "↑", Q: 0, "Q'": 1 },
        { J: 1, K: 0, CLK: "↑", Q: 1, "Q'": 0 },
        { J: 1, K: 1, CLK: "↑", Q: "Toggle", "Q'": "Toggle" },
      ],
      evaluate: (inputs, prevState, isRisingEdge) => {
        // 1. If no rising edge, the state MUST persist exactly as is
        if (!isRisingEdge) return prevState;

        const { J, K } = inputs;
        const currentQ = prevState.Q === 1 ? 1 : 0;

        // 2. Explicit JK Logic
        if (J === 1 && K === 1) {
          // TOGGLE: Flip based on the LAST known state in the Ref
          const nextQ = currentQ ^ 1;
          return { Q: nextQ, "Q'": nextQ ^ 1 };
        }

        if (J === 1 && K === 0) return { Q: 1, "Q'": 0 }; // SET
        if (J === 0 && K === 1) return { Q: 0, "Q'": 1 }; // RESET

        return prevState as any; // HOLD (J=0, K=0)
      },
      blockDiagram: Diagrams.JKFlipFlopDiagram,
    },
    "t-flip-flop": {
      id: "t-flip-flop",
      name: "T Flip-Flop",
      description:
        "A T (Toggle) flip-flop is a synchronous device that changes its state on every clock pulse when the T input is HIGH. If T is LOW, it holds the current state. It is essentially a JK flip-flop with both inputs tied together, commonly used in frequency dividers and binary counters.",
      inputs: ["T", "CLK"],
      outputs: ["Q", "Q'"],
      truthTable: [
        { T: 0, CLK: "↑", Q: "NC", "Q'": "NC" },
        { T: 1, CLK: "↑", Q: "Toggle", "Q'": "Toggle" },
      ],
      evaluate: (inputs, prevState, isRisingEdge) => {
        if (isRisingEdge && inputs.T === 1) {
          const nextQ = prevState.Q === 1 ? 0 : 1;
          return {
            Q: nextQ,
            "Q'": nextQ === 0 ? 1 : 0,
          };
        }
        return prevState;
      },
      blockDiagram: Diagrams.TFlipFlopDiagram,
    },
  };
