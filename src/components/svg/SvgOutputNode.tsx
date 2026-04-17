import { memo } from "react";
import { Lightbulb, Info } from "lucide-react";
import { SvgNodeWrapper } from "@/src/components/svg/SvgNodeWrapper";
import { LogicState } from "@/src/libs/types";

interface SvgOutputNodeProps {
  x: number;
  y: number;
  value: LogicState;
  label: string;
}

/**
 * SVG output node for block diagrams.
 * Renders a status indicator based on logic value.
 */
export const SvgOutputNode = memo(
  ({ x, y, value, label }: SvgOutputNodeProps) => {
    const getContainerStyles = () => {
      if (value === 1) return "bg-emerald-500 border-emerald-500 text-white";
      if (value === "Invalid") return "bg-red-500 border-red-500 text-white";
      return "bg-white border-zinc-200 text-zinc-300";
    };
    return (
      <SvgNodeWrapper x={x} y={y}>
        {/* Interactive Bulb centered at 0,0 */}
        <foreignObject x={-15} y={-15} width="30" height="30">
          <div
            className={`w-full h-full flex items-center justify-center border-2 rounded-md transition-all duration-200 ${getContainerStyles()}`}
            title={value === "Invalid" ? "Invalid State (Race Condition)" : ""}
          >
            {value === "Invalid" ? (
              <Info className="w-4 h-4" />
            ) : (
              <Lightbulb className="w-4 h-4" />
            )}
          </div>
        </foreignObject>

        {/* Label (right) */}
        <text x={20} y={4} fontSize="12" fontWeight="bold">
          {label}
        </text>
      </SvgNodeWrapper>
    );
  },
);

export default SvgOutputNode;
