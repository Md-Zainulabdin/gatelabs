export enum LogicValue {
  LOW = 0,
  HIGH = 1,
  FLOATING = -1,
}

export enum GateType {
  AND = "AND",
  OR = "OR",
  NOT = "NOT",
  NAND = "NAND",
  NOR = "NOR",
  XOR = "XOR",
  XNOR = "XNOR",
}

export enum ComponentType {
  GATE = "GATE",
  IC = "IC",
  SWITCH = "SWITCH",
  LED = "LED",
  VCC = "VCC",
  GND = "GND",
}

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
  subType: string; // e.g., "AND", "7408"
  x: number;
  y: number;
  inputs: Pin[];
  outputs: Pin[];
  state?: any; // e.g., switch state
}

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

export interface GateDefinition {
  type: GateType;
  name: string;
  mnemonic: string;
  description: string;
  expression: string;
  truthTable: { inputs: LogicValue[]; output: LogicValue }[];
}
