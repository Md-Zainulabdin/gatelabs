import { memo, PropsWithChildren } from "react";

interface SvgNodeWrapperProps {
  x: number;
  y: number;
}

/**
 * Generic SVG container that positions nodes with a translate transform.
 */
export const SvgNodeWrapper = memo(
  ({ x, y, children }: PropsWithChildren<SvgNodeWrapperProps>) => {
    return <g transform={`translate(${x},${y})`}>{children}</g>;
  },
);

export default SvgNodeWrapper;
