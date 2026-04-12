import { useState } from "react";
import { ChevronRight, Lightbulb, ArrowRight } from "lucide-react";
import { GATES, GateSymbol } from "@/src/libs/constants";
import { GateType, LogicValue } from "@/src/libs/types";

const evaluate = (type: GateType, vals: LogicValue[]): LogicValue => {
  const b = vals.map((v) => v === LogicValue.HIGH);
  switch (type) {
    case GateType.AND:
      return b.every((v) => v) ? LogicValue.HIGH : LogicValue.LOW;
    case GateType.OR:
      return b.some((v) => v) ? LogicValue.HIGH : LogicValue.LOW;
    case GateType.NOT:
      return b[0] ? LogicValue.LOW : LogicValue.HIGH;
    case GateType.NAND:
      return b.every((v) => v) ? LogicValue.LOW : LogicValue.HIGH;
    case GateType.NOR:
      return b.some((v) => v) ? LogicValue.LOW : LogicValue.HIGH;
    case GateType.XOR:
      return b.filter((v) => v).length % 2 !== 0
        ? LogicValue.HIGH
        : LogicValue.LOW;
    case GateType.XNOR:
      return b.filter((v) => v).length % 2 === 0
        ? LogicValue.HIGH
        : LogicValue.LOW;
    default:
      return LogicValue.LOW;
  }
};

export const LogicGatesView = () => {
  const [selectedGate, setSelectedGate] = useState<GateType>(GateType.AND);
  const [inputs, setInputs] = useState<LogicValue[]>([
    LogicValue.LOW,
    LogicValue.LOW,
  ]);

  const gate = GATES[selectedGate];
  const output = evaluate(selectedGate, inputs);

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
        <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
            Select Gate
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {Object.values(GateType).map((type) => (
              <button
                key={type}
                onClick={() => selectGate(type)}
                className={`flex items-center justify-between px-4 py-3 border text-sm font-medium transition-all ${
                  selectedGate === type
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <span>{type} Gate</span>
                <ChevronRight
                  className={`w-4 h-4 ${selectedGate === type ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Truth Table
            </h3>
            <div className="overflow-hidden border border-zinc-200">
              <table className="w-full table-stripe">
                <thead>
                  <tr>
                    {inputs.map((_, i) => (
                      <th key={i} className="text-center">
                        Input {String.fromCharCode(65 + i)}
                      </th>
                    ))}
                    <th className="text-center">Output (Y)</th>
                  </tr>
                </thead>
                <tbody>
                  {gate.truthTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`transition-colors text-center ${
                        isActiveRow(row.inputs)
                          ? "bg-zinc-900! text-white!"
                          : ""
                      }`}
                    >
                      {row.inputs.map((v, j) => (
                        <td key={j} className="font-mono">
                          {v}
                        </td>
                      ))}
                      <td className="font-mono font-bold">{row.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
