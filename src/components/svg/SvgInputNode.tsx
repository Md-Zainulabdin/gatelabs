import { memo } from "react";
import { SvgNodeWrapper } from "@/src/components/svg/SvgNodeWrapper";

interface SvgInputNodeProps {
  x: number;
  y: number;
  value: number;
  label: string;
  onToggle: () => void;
}

/**
 * SVG input node used in interactive block diagrams.
 * Displays a toggle button for an input signal.
 */
export const SvgInputNode = memo(({ x, y, value, label, onToggle }: SvgInputNodeProps) => {
  return (
    <SvgNodeWrapper x={x} y={y}>
      {/* Label (left) */}
      <text x={-20} y={4} fontSize="12" fontWeight="bold" textAnchor="end">
        {label}
      </text>

      {/* Interactive Button centered at 0,0 */}
      <foreignObject x={-15} y={-15} width="30" height="30">
        <button
          onClick={onToggle}
          className={`w-full h-full rounded-md border-2 text-xs font-mono font-bold
            ${
              value === 1
                ? "bg-zinc-900 text-white border-zinc-900"
                : "bg-white text-zinc-400 border-zinc-200"
            }`}
        >
          {value}
        </button>
      </foreignObject>
    </SvgNodeWrapper>
  );
});

export default SvgInputNode;
