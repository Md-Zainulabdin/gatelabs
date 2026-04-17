import { BlockDiagramProps, LogicState } from "@/src/libs/types";
import { SvgInputNode } from "@/src/components/svg/SvgInputNode";
import { SvgOutputNode } from "@/src/components/svg/SvgOutputNode";

/**
 * Diagram helpers for rendering interactive circuit visuals.
 */
const wireColor = (value: LogicState) => {
  if (value === 1) return "#22c55e";
  if (value === "Invalid") return "#ef4444";
  return "#71717a";
};

export const HalfAdderDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="125" textAnchor="middle" fontWeight="bold" fontSize="12">
      HALF ADDER
    </text>
    <line
      x1="60"
      y1="90"
      x2="120"
      y2="90"
      stroke={wireColor(inputs.A as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="150"
      x2="120"
      y2="150"
      stroke={wireColor(inputs.B as LogicState)}
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
    <SvgOutputNode
      x={340}
      y={90}
      label="Sum"
      value={outputs.Sum as LogicState}
    />
    <SvgOutputNode
      x={340}
      y={150}
      label="Carry"
      value={outputs.Carry as LogicState}
    />
  </svg>
);

export const FullAdderDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="125" textAnchor="middle" fontWeight="bold" fontSize="12">
      FULL ADDER
    </text>
    <line
      x1="60"
      y1="70"
      x2="120"
      y2="70"
      stroke={wireColor(inputs.A as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="120"
      x2="120"
      y2="120"
      stroke={wireColor(inputs.B as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="170"
      x2="120"
      y2="170"
      stroke={wireColor(inputs.Cin as LogicState)}
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
    <SvgOutputNode
      x={340}
      y={80}
      label="Sum"
      value={outputs.Sum as LogicState}
    />
    <SvgOutputNode
      x={340}
      y={160}
      label="Cout"
      value={outputs.Cout as LogicState}
    />
  </svg>
);

export const HalfSubtractorDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="125" textAnchor="middle" fontWeight="bold" fontSize="12">
      HALF SUBTRACTOR
    </text>
    <line
      x1="60"
      y1="90"
      x2="120"
      y2="90"
      stroke={wireColor(inputs.A as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="150"
      x2="120"
      y2="150"
      stroke={wireColor(inputs.B as LogicState)}
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
    <SvgOutputNode
      x={340}
      y={90}
      label="Diff"
      value={outputs.Diff as LogicState}
    />
    <SvgOutputNode
      x={340}
      y={150}
      label="Borrow"
      value={outputs.Borrow as LogicState}
    />
  </svg>
);

export const FullSubtractorDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="125" textAnchor="middle" fontWeight="bold" fontSize="12">
      FULL SUBTRACTOR
    </text>
    <line
      x1="60"
      y1="70"
      x2="120"
      y2="70"
      stroke={wireColor(inputs.A as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="120"
      x2="120"
      y2="120"
      stroke={wireColor(inputs.B as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="60"
      y1="170"
      x2="120"
      y2="170"
      stroke={wireColor(inputs.Bin as LogicState)}
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
    <SvgOutputNode
      x={340}
      y={80}
      label="Diff"
      value={outputs.Diff as LogicState}
    />
    <SvgOutputNode
      x={340}
      y={160}
      label="Bout"
      value={outputs.Bout as LogicState}
    />
  </svg>
);

export const MultiplexerDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <line
      x1="75"
      y1="75"
      x2="155"
      y2="75"
      stroke={wireColor(inputs.I0 as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={75}
      y={75}
      label="I0"
      value={inputs.I0}
      onToggle={() => toggleInput("I0")}
    />
    <line
      x1="75"
      y1="130"
      x2="155"
      y2="130"
      stroke={wireColor(inputs.I1 as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={75}
      y={130}
      label="I1"
      value={inputs.I1}
      onToggle={() => toggleInput("I1")}
    />
    <line
      x1="200"
      y1="164"
      x2="200"
      y2="210"
      stroke={wireColor(inputs.S as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={200}
      y={200}
      label="S"
      value={inputs.S}
      onToggle={() => toggleInput("S")}
    />
    <line
      x1="245"
      y1="100"
      x2="318"
      y2="100"
      stroke={wireColor(outputs.Y)}
      strokeWidth="2"
    />
    <SvgOutputNode x={318} y={100} label="Y" value={outputs.Y as LogicState} />
  </svg>
);

export const DemultiplexerDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <line
      x1="75"
      y1="97"
      x2="155"
      y2="97"
      stroke={wireColor(inputs.I as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={75}
      y={97}
      label="I"
      value={inputs.I}
      onToggle={() => toggleInput("I")}
    />
    <line
      x1="200"
      y1="152"
      x2="200"
      y2="200"
      stroke={wireColor(inputs.S as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={200}
      y={200}
      label="S"
      value={inputs.S}
      onToggle={() => toggleInput("S")}
    />
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
    <SvgOutputNode x={318} y={65} label="Y0" value={outputs.Y0 as LogicState} />
    <SvgOutputNode
      x={318}
      y={130}
      label="Y1"
      value={outputs.Y1 as LogicState}
    />
  </svg>
);

export const DecoderDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
  <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
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
    <line
      x1="75"
      y1="85"
      x2="140"
      y2="85"
      stroke={wireColor(inputs.A as LogicState)}
      strokeWidth="2"
    />
    <line
      x1="75"
      y1="155"
      x2="140"
      y2="155"
      stroke={wireColor(inputs.B as LogicState)}
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
    <line
      x1="260"
      y1="45"
      x2="325"
      y2="45"
      stroke={wireColor(outputs.Y0)}
      strokeWidth="2"
    />
    <SvgOutputNode x={325} y={45} label="Y0" value={outputs.Y0 as LogicState} />
    <line
      x1="260"
      y1="95"
      x2="325"
      y2="95"
      stroke={wireColor(outputs.Y1)}
      strokeWidth="2"
    />
    <SvgOutputNode x={325} y={95} label="Y1" value={outputs.Y1 as LogicState} />
    <line
      x1="260"
      y1="145"
      x2="325"
      y2="145"
      stroke={wireColor(outputs.Y2)}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={325}
      y={145}
      label="Y2"
      value={outputs.Y2 as LogicState}
    />
    <line
      x1="260"
      y1="195"
      x2="325"
      y2="195"
      stroke={wireColor(outputs.Y3)}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={325}
      y={195}
      label="Y3"
      value={outputs.Y3 as LogicState}
    />
  </svg>
);

export const EncoderDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
  <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-900">
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
    <line
      x1="75"
      y1="45"
      x2="140"
      y2="45"
      stroke={wireColor(inputs.I0 as LogicState)}
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
      stroke={wireColor(inputs.I1 as LogicState)}
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
      stroke={wireColor(inputs.I2 as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={75}
      y={145}
      label="I2"
      value={inputs.I2}
      onToggle={() => toggleInput("I2")}
    />
    <line
      x1="75"
      y1="195"
      x2="140"
      y2="195"
      stroke={wireColor(inputs.I3 as LogicState)}
      strokeWidth="2"
    />
    <SvgInputNode
      x={75}
      y={195}
      label="I3"
      value={inputs.I3}
      onToggle={() => toggleInput("I3")}
    />
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
    <SvgOutputNode x={325} y={85} label="A" value={outputs.A as LogicState} />
    <SvgOutputNode x={325} y={165} label="B" value={outputs.B as LogicState} />
  </svg>
);

export const SRLatchDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="105" fontSize="16" textAnchor="middle" fontWeight="bold">
      SR LATCH
    </text>
    <line
      x1="60"
      y1="70"
      x2="120"
      y2="70"
      stroke={wireColor(inputs.S as LogicState)}
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
      stroke={wireColor(inputs.R as LogicState)}
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
    <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q as LogicState} />
    <line
      x1="280"
      y1="130"
      x2="340"
      y2="130"
      stroke={wireColor(outputs["Q'"])}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={340}
      y={130}
      label="Q'"
      value={outputs["Q'"] as LogicState}
    />
  </svg>
);

export const DFlipFlopDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="105" fontSize="16" textAnchor="middle" fontWeight="bold">
      D FLIP-FLOP
    </text>
    <line
      x1="60"
      y1="70"
      x2="120"
      y2="70"
      stroke={wireColor(inputs.D as LogicState)}
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
      stroke={wireColor(inputs.CLK as LogicState)}
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
    <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q as LogicState} />
    <line
      x1="280"
      y1="130"
      x2="340"
      y2="130"
      stroke={wireColor(outputs["Q'"])}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={340}
      y={130}
      label="Q'"
      value={outputs["Q'"] as LogicState}
    />
  </svg>
);

export const JKFlipFlopDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="105" fontSize="16" textAnchor="middle" fontWeight="bold">
      JK FLIP-FLOP
    </text>
    <line
      x1="60"
      y1="45"
      x2="120"
      y2="45"
      stroke={wireColor(inputs.J as LogicState)}
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
      stroke={wireColor(inputs.CLK as LogicState)}
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
      stroke={wireColor(inputs.K as LogicState)}
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
    <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q as LogicState} />
    <line
      x1="280"
      y1="130"
      x2="340"
      y2="130"
      stroke={wireColor(outputs["Q'"])}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={340}
      y={130}
      label="Q'"
      value={outputs["Q'"] as LogicState}
    />
  </svg>
);

export const TFlipFlopDiagram = ({
  inputs,
  outputs,
  toggleInput,
}: BlockDiagramProps) => (
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
    <text x="200" y="105" fontSize="16" textAnchor="middle" fontWeight="bold">
      T FLIP-FLOP
    </text>
    <line
      x1="60"
      y1="70"
      x2="120"
      y2="70"
      stroke={wireColor(inputs.T as LogicState)}
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
      stroke={wireColor(inputs.CLK as LogicState)}
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
    <SvgOutputNode x={340} y={70} label="Q" value={outputs.Q as LogicState} />
    <line
      x1="280"
      y1="130"
      x2="340"
      y2="130"
      stroke={wireColor(outputs["Q'"])}
      strokeWidth="2"
    />
    <SvgOutputNode
      x={340}
      y={130}
      label="Q'"
      value={outputs["Q'"] as LogicState}
    />
  </svg>
);
