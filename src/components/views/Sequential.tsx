import { useState } from "react";
import { Info } from "lucide-react";
import { SEQUENTIAL_CIRCUITS } from "@/src/libs/constants";
import { useSequential } from "@/src/hooks/useSequential";
import { SidebarSelection } from "@/src/components/ui/SidebarSelection";
import { TruthTable } from "@/src/components/ui/TruthTable";

/**
 * View for sequential circuits.
 * Handles input toggles, clock logic, and stateful outputs.
 */
export const SequentialView = () => {
  const [selectedCircuitId, setSelectedCircuitId] =
    useState<string>("sr-latch");
  const circuit = SEQUENTIAL_CIRCUITS[selectedCircuitId];

  const { inputs, outputs, toggleInput } = useSequential(circuit);

  const isRowActive = (row: any): boolean => {
    return circuit.inputs.every((inp) => {
      const val = row[inp];
      if (val === "↑") return inputs["CLK"] === 1;
      if (typeof val === "number") return inputs[inp] === val;
      return true;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-1">
        <div className="sidebar">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Sequential Circuits
          </h2>
          <SidebarSelection
            items={Object.keys(SEQUENTIAL_CIRCUITS).map((id) => ({
              id,
              label: SEQUENTIAL_CIRCUITS[id].name,
            }))}
            selectedId={selectedCircuitId}
            onSelect={setSelectedCircuitId}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-2">
        <div className="card p-6 space-y-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">{circuit.name}</h1>
            <p className="text-zinc-500 leading-relaxed max-w-2xl">
              {circuit.description}
            </p>
          </div>

          {/* Block Diagram */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Info className="w-3 h-3" />
              Block Diagram
            </h3>
            <div className="bg-zinc-50 border border-zinc-200 p-6 flex items-center justify-center min-h-65">
              <div className="w-full max-w-md">
                {circuit.blockDiagram({ inputs, outputs, toggleInput })}
              </div>
            </div>
          </section>

          {/* Truth Table */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
              Truth Table / State Table
            </h3>
            <TruthTable
              headers={[
                ...circuit.inputs.map((input) => `${input}`),
                ...circuit.outputs.map((output) => `${output}`),
              ]}
              rows={circuit.truthTable}
              isActiveRow={isRowActive}
              renderRow={(row) => (
                <>
                  {circuit.inputs.map((input) => (
                    <td key={input} className="font-mono">
                      {row[input]}
                    </td>
                  ))}
                  {circuit.outputs.map((output) => (
                    <td key={output} className="font-mono font-bold">
                      {row[output]}
                    </td>
                  ))}
                </>
              )}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
