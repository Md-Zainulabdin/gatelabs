import type { ReactNode } from "react";

interface TruthTableProps<Row> {
  headers: ReactNode[];
  rows: Row[];
  renderRow: (row: Row, index: number) => ReactNode;
  isActiveRow?: (row: Row, index: number) => boolean;
  rowKey?: (row: Row, index: number) => string | number;
}

/**
 * Generic truth table component.
 * Supports active-row highlighting and custom row rendering.
 */
export const TruthTable = <Row extends unknown>({
  headers,
  rows,
  renderRow,
  isActiveRow,
  rowKey,
}: TruthTableProps<Row>) => {
  return (
    <div className="table-panel">
      <table className="w-full table-stripe truth-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isActive = isActiveRow?.(row, index) ?? false;

            return (
              <tr
                key={rowKey?.(row, index) ?? index}
                className={`transition-colors text-center ${
                  isActive ? "bg-zinc-900 text-white" : "hover:bg-zinc-50"
                }`}
              >
                {renderRow(row, index)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
