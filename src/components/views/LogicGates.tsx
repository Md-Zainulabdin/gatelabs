import { useState } from "react";
import { evaluateGate, GATES } from "@/src/libs/constants";
import GateBlockDiagram from "@/src/components/diagrams/GateBlockDiagram";
import { GateType, LogicValue } from "@/src/libs/types";
import { SidebarSelection } from "@/src/components/ui/SidebarSelection";
import { TruthTable } from "@/src/components/ui/TruthTable";
import { OptimizedImage } from "@/src/components/ui/OptimizedImage";

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
      <div className="lg:col-span-2">
        <div className="card p-6 space-y-8">
          {/* Title & Description */}

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{gate.name}</h1>
            <p className="text-zinc-500 font-mono">"{gate.mnemonic}"</p>
            <p className="text-zinc-500 leading-relaxed">{gate.description}</p>
          </div>

          {/* Expressions */}

          <div className="space-y-3">
            <h3 className="section-heading">Logic Expression</h3>
            <div className="font-mono text-sm bg-zinc-50 border border-zinc-200 px-3 py-2">
              {gate.expression}
            </div>
          </div>

          {/* Logic Symbol */}

          <div className="space-y-3">
            <h3 className="section-heading">Logic Symbol</h3>

            <div className="panel-block">
              <div className="w-full max-w-md flex items-center justify-center">
                <OptimizedImage src={gate.imagePath} alt={gate.name} />
              </div>
            </div>
          </div>

          {/* Block Diagram */}

          <div className="space-y-3">
            <h3 className="section-heading">Block Diagram</h3>

            <div className="panel-block">
              <div className="w-full max-w-md flex items-center justify-center">
                <GateBlockDiagram
                  name={gate.name}
                  inputs={
                    selectedGate === GateType.NOT
                      ? { A: inputs[0] }
                      : { A: inputs[0], B: inputs[1] }
                  }
                  outputs={{ Y: output }}
                  onToggle={(label: string) => {
                    const idx = label === "A" ? 0 : 1;
                    toggleInput(idx);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Truth Table */}

          <section>
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
          </section>
        </div>
      </div>
    </div>
  );
};
