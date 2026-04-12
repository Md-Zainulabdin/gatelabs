import { Lightbulb } from "lucide-react";
import { memo } from "react";
import { SvgNodeWrapper } from "@/src/components/svg/SvgNodeWrapper";

interface SvgOutputNodeProps {
  x: number;
  y: number;
  value: number;
  label: string;
}

export const SvgOutputNode = memo(({ x, y, value, label }: SvgOutputNodeProps) => {
  return (
    <SvgNodeWrapper x={x} y={y}>
      {/* Interactive Bulb centered at 0,0 */}
      <foreignObject x={-15} y={-15} width="30" height="30">
        <div
          className={`w-full h-full flex items-center justify-center border-2 rounded-md
            ${
              value === 1
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "bg-white border-zinc-200 text-zinc-300"
            }`}
        >
          <Lightbulb className="w-4 h-4" />
        </div>
      </foreignObject>

      {/* Label (right) */}
      <text x={20} y={4} fontSize="12" fontWeight="bold">
        {label}
      </text>
    </SvgNodeWrapper>
  );
});

export default SvgOutputNode;
