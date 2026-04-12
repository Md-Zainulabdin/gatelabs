import { useState, useEffect } from "react";
import { ChevronRight, Info } from "lucide-react";
import { SEQUENTIAL_CIRCUITS } from "@/src/libs/constants";

export const SequentialView = () => {
  const [selectedCircuit, setSelectedCircuit] = useState<string>("sr-latch");
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [outputs, setOutputs] = useState<Record<string, number>>({});

  const circuit = SEQUENTIAL_CIRCUITS[selectedCircuit];
  const isEdgeTriggered = circuit.truthTable.some((r) => r["CLK"] === "↑");

  // Reset state when circuit changes
  useEffect(() => {
    const initInputs: Record<string, number> = {};
    circuit.inputs.forEach((inp) => (initInputs[inp] = 0));
    setInputs(initInputs);
    setOutputs(getOutputs(initInputs, false));
  }, [selectedCircuit]);

  const getOutputs = (
    inpState: Record<string, number>,
    risingEdge: boolean,
  ): Record<string, number> => {
    const result: Record<string, number> = {};
    circuit.outputs.forEach((o) => (result[o] = 0));

    for (const row of circuit.truthTable) {
      const match = circuit.inputs.every((inp) => {
        const val = row[inp];
        if (val === "x") return true;
        if (val === "↑") return risingEdge;
        return (inpState[inp] ?? 0) === val;
      });

      if (match) {
        circuit.outputs.forEach((o) => {
          if (typeof row[o] === "number") result[o] = row[o] as number;
        });
        break;
      }
    }
    return result;
  };

  const toggleInput = (name: string) => {
    setInputs((prev) => {
      const newState = { ...prev, [name]: prev[name] === 1 ? 0 : 1 };
      const risingEdge =
        name === "CLK" && prev["CLK"] === 0 && newState["CLK"] === 1;

      if (isEdgeTriggered) {
        // Only update outputs on a rising CLK edge
        if (risingEdge) setOutputs(getOutputs(newState, true));
      } else {
        setOutputs(getOutputs(newState, false));
      }

      return newState;
    });
  };

  const isRowActive = (row: Record<string, number | string>): boolean => {
    return circuit.inputs.every((inp) => {
      const val = row[inp];
      if (val === "x") return true;
      if (val === "↑") return inputs["CLK"] === 1; // highlight row where CLK is high
      return (inputs[inp] ?? 0) === val;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Sequential Circuits
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(SEQUENTIAL_CIRCUITS).map((id) => (
              <button
                key={id}
                onClick={() => setSelectedCircuit(id)}
                className={`flex items-center justify-between px-4 py-3 border text-sm font-medium transition-all ${
                  selectedCircuit === id
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <span>{SEQUENTIAL_CIRCUITS[id].name}</span>
                <ChevronRight
                  className={`w-4 h-4 ${selectedCircuit === id ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
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
            <div className="overflow-hidden border border-zinc-200">
              <table className="w-full table-stripe">
                <thead>
                  <tr>
                    {circuit.inputs.map((input) => (
                      <th key={input} className="text-center">
                        Input ({input})
                      </th>
                    ))}
                    {circuit.outputs.map((output) => (
                      <th key={output} className="text-center">
                        Output ({output})
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {circuit.truthTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`transition-colors text-center ${
                        isRowActive(row)
                          ? "bg-zinc-900 text-white"
                          : "hover:bg-zinc-50"
                      }`}
                    >
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
