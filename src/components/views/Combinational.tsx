import { useState, useEffect } from "react";
import { ChevronRight, Info } from "lucide-react";

import { COMBINATIONAL_CIRCUITS } from "@/src/libs/constants";

export const CombinationalView = () => {
  const [selectedCircuit, setSelectedCircuit] = useState<string>("half-adder");
  const [inputs, setInputs] = useState<Record<string, number>>({});

  const circuit = COMBINATIONAL_CIRCUITS[selectedCircuit];

  // Initialize inputs when circuit changes
  useEffect(() => {
    const initialInputs: Record<string, number> = {};
    circuit.inputs.forEach((input) => {
      initialInputs[input] = 0;
    });
    setInputs(initialInputs);
  }, [selectedCircuit]);

  const toggleInput = (name: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: prev[name] === 1 ? 0 : 1,
    }));
  };

  const evaluate = (): Record<string, number> => {
    const getVal = (name: string): number => inputs[name] ?? 0;
    const A = getVal("A");
    const B = getVal("B");
    const Cin = getVal("Cin");
    const Bin = getVal("Bin");
    const S = getVal("S");
    const I = getVal("I");
    const I0 = getVal("I0");
    const I1 = getVal("I1");
    const I2 = getVal("I2");
    const I3 = getVal("I3");

    switch (selectedCircuit) {
      case "half-adder":
        return { Sum: A ^ B, Carry: A & B };
      case "full-adder":
        return {
          Sum: A ^ B ^ Cin,
          Cout: A & B || Cin & (A ^ B) ? 1 : 0,
        };
      case "half-subtractor":
        return { Diff: A ^ B, Borrow: A === 0 && B === 1 ? 1 : 0 };
      case "full-subtractor":
        return {
          Diff: A ^ B ^ Bin,
          Bout: (A === 0 && B === 1) || (Bin === 1 && (A ^ B) === 0) ? 1 : 0,
        };
      case "mux-2-1":
        return { Y: S === 1 ? I1 : I0 };
      case "demux-1-2":
        return {
          Y0: S === 0 && I === 1 ? 1 : 0,
          Y1: S === 1 && I === 1 ? 1 : 0,
        };
      case "decoder-2-4":
        return {
          Y0: A === 0 && B === 0 ? 1 : 0,
          Y1: A === 0 && B === 1 ? 1 : 0,
          Y2: A === 1 && B === 0 ? 1 : 0,
          Y3: A === 1 && B === 1 ? 1 : 0,
        };
      case "encoder-4-2":
        return {
          A: I2 === 1 || I3 === 1 ? 1 : 0,
          B: I1 === 1 || I3 === 1 ? 1 : 0,
        };
      default:
        return {};
    }
  };

  const outputs = evaluate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDEBAR */}

      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Combinational Circuits
          </h2>

          <div className="grid grid-cols-1 gap-2">
            {Object.keys(COMBINATIONAL_CIRCUITS).map((id) => (
              <button
                key={id}
                onClick={() => setSelectedCircuit(id)}
                className={`flex items-center justify-between px-4 py-3 border text-sm font-medium transition-all ${selectedCircuit === id ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"}`}
              >
                <span>{COMBINATIONAL_CIRCUITS[id].name}</span>
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
          {/* Title */}

          <div>
            <h1 className="text-3xl font-bold mb-2">{circuit.name}</h1>

            <p className="text-zinc-500 leading-relaxed max-w-2xl">
              {circuit.description}
            </p>
          </div>

          {/* Expressions */}

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Logic Expression
            </h3>
            {circuit?.expression?.map((exp, i) => (
              <div
                key={i}
                className="font-mono text-sm bg-zinc-50 border border-zinc-200 px-3 py-2"
              >
                {exp}
              </div>
            ))}
          </div>

          {/* Block Diagram */}

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Block Diagram
            </h3>

            <div className="bg-zinc-50 border border-zinc-200 p-6 flex items-center justify-center min-h-65">
              <div className="w-full max-w-md flex items-center justify-center">
                {circuit.blockDiagram({ inputs, outputs, toggleInput })}
              </div>
            </div>
          </div>

          {/* Truth Table */}

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
              <Info className="w-3 h-3" />
              Truth Table
            </h3>

            <div className="overflow-hidden border border-zinc-200">
              <table className="w-full table-stripe">
                <thead>
                  <tr>
                    {circuit?.inputs.map((input) => (
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
                  {circuit?.truthTable.map((row, i) => {
                    const isActive = circuit.inputs.every(
                      (input) => row[input] === inputs[input],
                    );
                    return (
                      <tr
                        key={i}
                        className={`transition-colors text-center ${isActive ? "bg-zinc-900 text-white" : "hover:bg-zinc-50"}`}
                      >
                        {circuit?.inputs.map((input) => (
                          <td key={input} className="font-mono">
                            {row[input]}
                          </td>
                        ))}
                        {circuit?.outputs.map((output) => (
                          <td key={output} className="font-mono font-bold">
                            {row[output]}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
