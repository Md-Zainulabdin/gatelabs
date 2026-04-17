import { useState } from "react";
import { Lightbulb, ArrowRight } from "lucide-react";
import { evaluateGate, GATES, GateSymbol } from "@/src/libs/constants";
import { GateType, LogicValue } from "@/src/libs/types";
import { SidebarSelection } from "@/src/components/ui/SidebarSelection";
import { TruthTable } from "@/src/components/ui/TruthTable";

/**
 * View for primitive logic gates.
 * Allows selection of a gate and interactive input toggling.
 */
export const LogicGatesView = () => {
  const [selectedGate, setSelectedGate] = useState<GateType>(GateType.AND);
  const [inputs, setInputs] = useState<LogicValue[]>([
    LogicValue.LOW,
    LogicValue.LOW,
  ]);

  const gate = GATES[selectedGate];
  const output = evaluateGate(selectedGate, inputs as number[]) as LogicValue;

  const selectGate = (type: GateType) => {
    setSelectedGate(type);
    setInputs(
      type === GateType.NOT
        ? [LogicValue.LOW]
        : [LogicValue.LOW, LogicValue.LOW],
    );
  };

  const toggleInput = (index: number) => {
    const next = [...inputs];
    next[index] =
      next[index] === LogicValue.HIGH ? LogicValue.LOW : LogicValue.HIGH;
    setInputs(next);
  };

  const isActiveRow = (rowInputs: LogicValue[]) =>
    JSON.stringify(rowInputs) === JSON.stringify(inputs);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* SIDEBAR */}
      <div className="lg:col-span-1">
        <div className="sidebar">
          <h2 className="section-title mb-4">Primitive Gates</h2>
          <SidebarSelection
            items={Object.values(GateType).map((type) => ({
              id: type,
              label: `${type} Gate`,
            }))}
            selectedId={selectedGate}
            onSelect={(id) => selectGate(id as GateType)}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="lg:col-span-2 space-y-8">
        <div className="card">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">{gate.name}</h1>
              <p className="text-zinc-500 font-medium text-lg">
                "{gate.mnemonic}"
              </p>
            </div>
            <div className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-mono uppercase tracking-tight">
              {selectedGate}
            </div>
          </div>

          <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
            {gate.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Symbol */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Symbol & Expression
              </h3>
              <div className="bg-zinc-50 border border-zinc-100 p-8 flex flex-col items-center justify-center min-h-50">
                <div className="w-32 h-20 text-zinc-900 mb-6">
                  <GateSymbol type={selectedGate} />
                </div>
                <div className="text-xl font-mono font-bold text-zinc-900">
                  {gate.expression}
                </div>
              </div>
            </div>

            {/* Interactive test */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Interactive Test
              </h3>
              <div className="bg-zinc-50 border border-zinc-100 p-8 flex items-center justify-center min-h-50 gap-8">
                <div className="flex flex-col gap-6">
                  {inputs.map((val, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleInput(idx)}
                      className={`w-10 h-10 flex rounded-md items-center justify-center border-2 transition-all font-mono font-bold ${
                        val === LogicValue.HIGH
                          ? "bg-zinc-900 border-zinc-900 text-white"
                          : "bg-white border-zinc-200 text-zinc-400"
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <ArrowRight className="w-6 h-6 text-zinc-300" />
                <div
                  className={`w-14 h-14 flex items-center rounded-md justify-center border-2 transition-all ${
                    output === LogicValue.HIGH
                      ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-white border-zinc-200 text-zinc-300"
                  }`}
                >
                  <Lightbulb className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Truth table */}
          <div className="space-y-4">
            <h3 className="section-heading">Truth Table</h3>
            <TruthTable
              headers={[
                ...inputs.map((_, i) => `${String.fromCharCode(65 + i)}`),
                "Output (Y)",
              ]}
              rows={gate.truthTable}
              rowKey={(_, index) => index}
              isActiveRow={(row) => isActiveRow(row.inputs)}
              renderRow={(row) => (
                <>
                  {row.inputs.map((v, j) => (
                    <td key={j} className="font-mono">
                      {v}
                    </td>
                  ))}
                  <td className="font-mono font-bold">{row.output}</td>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
