import { SvgInputNode } from "@/src/components/svg/SvgInputNode";
import { SvgOutputNode } from "@/src/components/svg/SvgOutputNode";
import { LogicState } from "@/src/libs/types";

const wireColor = (value: LogicState | number | undefined) => {
  if (value === 1) return "#22c55e";
  if (value === "Invalid") return "#ef4444";
  return "#71717a";
};

interface Props {
  name: string;
  inputs: {
    A: number | undefined;
    B?: number | undefined;
  };
  outputs: {
    Y: LogicState | number | undefined;
  };
  onToggle: (name: string) => void;
}

export const GateBlockDiagram = ({
  name,
  inputs,
  outputs,
  onToggle,
}: Props) => {
  const hasTwoInputs = inputs.B !== undefined;

  // Input positions
  const inputAY = hasTwoInputs ? 70 : 100; // center if single input
  const inputBY = 130;

  // Output always centered
  const outputY = 100;

  return (
    <svg viewBox="0 0 400 200" className="w-full h-full text-zinc-900">
      {/* Gate Box */}
      <rect
        x="120"
        y="40"
        width="160"
        height="120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Gate Name */}
      <text x="200" y="105" fontSize="16" textAnchor="middle" fontWeight="bold">
        {name.toUpperCase()}
      </text>

      {/* Input A */}
      <line
        x1="60"
        y1={inputAY}
        x2="120"
        y2={inputAY}
        stroke={wireColor(inputs.A)}
        strokeWidth="2"
      />

      <SvgInputNode
        x={60}
        y={inputAY}
        label="A"
        value={inputs.A ?? 0}
        onToggle={() => onToggle("A")}
      />

      {/* Input B (only if exists) */}
      {hasTwoInputs && (
        <>
          <line
            x1="60"
            y1={inputBY}
            x2="120"
            y2={inputBY}
            stroke={wireColor(inputs.B)}
            strokeWidth="2"
          />

          <SvgInputNode
            x={60}
            y={inputBY}
            label="B"
            value={inputs.B ?? 0}
            onToggle={() => onToggle("B")}
          />
        </>
      )}

      {/* Output Y */}
      <line
        x1="280"
        y1={outputY}
        x2="340"
        y2={outputY}
        stroke={wireColor(outputs.Y)}
        strokeWidth="2"
      />

      <SvgOutputNode
        x={340}
        y={outputY}
        label="Y"
        value={(outputs.Y ?? 0) as LogicState}
      />
    </svg>
  );
};

export default GateBlockDiagram;
