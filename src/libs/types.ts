// Define literal types for strict logic checking
export type BinaryValue = 0 | 1;
export type SpecialState = "NC" | "Toggle" | "Invalid";

// General logic state used throughout the application.
// Supports binary values as well as special cases for sequential circuits.
export type LogicState = BinaryValue | SpecialState | number | string;

/**
 * Explicit binary values used by gate simulation and UI toggles.
 */
export enum LogicValue {
  LOW = 0,
  HIGH = 1,
  FLOATING = -1,
}

/**
 * Named state object for multi-signal circuits.
 */
export type CircuitState = Record<string, LogicState>;

/**
 * Available primitive gate types used across the app.
 */
export enum GateType {
  AND = "AND",
  OR = "OR",
  NOT = "NOT",
  NAND = "NAND",
  NOR = "NOR",
  XOR = "XOR",
  XNOR = "XNOR",
}

/**
 * Visual component types available in the editor and diagram helpers.
 */
export enum ComponentType {
  GATE = "GATE",
  IC = "IC",
  SWITCH = "SWITCH",
  LED = "LED",
  VCC = "VCC",
  GND = "GND",
}

/**
 * Pin metadata used for IC pinouts and diagram connections.
 */
export interface Pin {
  id: string;
  name: string;
  description: string;
  type: "input" | "output" | "power" | "ground";
  x: number;
  y: number;
}

export interface Component {
  id: string;
  type: ComponentType;
  subType: string;
  x: number;
  y: number;
  inputs: Pin[];
  outputs: Pin[];
  state?: CircuitState;
}

/**
 * Represents a discrete wire connecting component pins.
 */
export interface Wire {
  id: string;
  fromPinId: string;
  toPinId: string;
}

export interface ICDefinition {
  id: string;
  name: string;
  description: string;
  pinout: Pin[];
  diagramUrl?: string;
  datasheetUrl?: string;
}

/**
 * Metadata and truth mapping for a primitive logic gate.
 */
export interface GateDefinition {
  type: GateType;
  name: string;
  mnemonic: string;
  description: string;
  expression: string;
  truthTable: { inputs: LogicValue[]; output: LogicValue }[];
}

export interface BlockDiagramProps {
  inputs: Record<string, number>;
  outputs: CircuitState;
  toggleInput: (name: string) => void;
}

export interface CombinationalCircuitDefinition {
  id: string;
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  expression: string[];
  truthTable: Record<string, LogicState>[];
  // Combinational doesn't need prevState
  evaluate: (inputs: Record<string, number>) => CircuitState;
  blockDiagram: (props: BlockDiagramProps) => React.ReactNode;
}

export interface SequentialCircuitDefinition {
  id: string;
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  truthTable: any[];
  // Sequential uses prevState for memory (Counters/FSMs)
  evaluate: (
    inputs: Record<string, number>,
    prevState: CircuitState,
    isRisingEdge: boolean,
  ) => CircuitState;
  blockDiagram: (props: BlockDiagramProps) => React.ReactNode;
}
