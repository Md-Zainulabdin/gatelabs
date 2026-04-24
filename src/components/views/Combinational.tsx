import { useState } from "react";
import { Info } from "lucide-react";
import { useCombinational } from "@/src/hooks/useCombinational";
import { COMBINATIONAL_CIRCUITS } from "@/src/libs/constants";
import { SidebarSelection } from "@/src/components/ui/SidebarSelection";
import { TruthTable } from "@/src/components/ui/TruthTable";
import { OptimizedImage } from "@/src/components/ui/OptimizedImage";

/**
 * View for combinational circuits.
 * Manages the selected circuit and exposes interactive input toggles.
 */
export const CombinationalView = () => {
  const [selectedCircuitId, setSelectedCircuitId] =
    useState<string>("half-adder");
  const circuit = COMBINATIONAL_CIRCUITS[selectedCircuitId];

  const { inputs, outputs, toggleInput } = useCombinational(circuit);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDEBAR */}

      <div className="lg:col-span-1">
        <div className="sidebar">
          <h2 className="section-title">Combinational Circuits</h2>

          <SidebarSelection
            items={Object.keys(COMBINATIONAL_CIRCUITS).map((id) => ({
              id,
              label: COMBINATIONAL_CIRCUITS[id].name,
            }))}
            selectedId={selectedCircuitId}
            onSelect={setSelectedCircuitId}
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="lg:col-span-2">
        <div className="card p-6 space-y-12">
          {/* Title & Description */}

          <div>
            <h1 className="text-3xl font-bold mb-2">{circuit.name}</h1>

            <p className="text-zinc-500 leading-relaxed max-w-2xl">
              {circuit.description}
            </p>
          </div>

          {/* Expressions */}

          <div className="space-y-3">
            <h3 className="section-heading">Logic Expression</h3>
            {circuit?.expression?.map((exp, i) => (
              <div
                key={i}
                className="font-mono text-sm bg-zinc-50 border border-zinc-200 px-3 py-2"
              >
                {exp}
              </div>
            ))}
          </div>

          {/* Circuit Diagram */}

          {circuit.imagePath && (
            <div className="space-y-3">
              <h3 className="section-heading">Circuit Diagram</h3>

              <div className="panel-block">
                <div className="w-full max-w-md flex items-center justify-center">
                  <OptimizedImage src={circuit.imagePath} alt={circuit.name} />
                </div>
              </div>
            </div>
          )}

          {/* Block Diagram */}

          <div className="space-y-3">
            <h3 className="section-heading">Block Diagram</h3>

            <div className="panel-block">
              <div className="w-full max-w-md flex items-center justify-center">
                {circuit.blockDiagram({ inputs, outputs, toggleInput })}
              </div>
            </div>
          </div>

          {/* Truth Table */}

          <section>
            <h3 className="section-heading-spaced flex items-center gap-2">
              <Info className="w-3 h-3" />
              Truth Table
            </h3>

            <TruthTable
              headers={[
                ...circuit.inputs.map((input) => input),
                ...circuit.outputs.map((output) => output),
              ]}
              rows={circuit.truthTable}
              isActiveRow={(row) =>
                circuit.inputs.every(
                  (input) => String(row[input]) === String(inputs[input]),
                )
              }
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
