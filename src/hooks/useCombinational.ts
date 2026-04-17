import { useState, useEffect, useMemo, useCallback } from "react";
import { CombinationalCircuitDefinition } from "@/src/libs/types";

/**
 * Custom hook for managing combinational circuit state.
 * Initializes input values, computes outputs, and exposes a toggle handler.
 */
export const useCombinational = (circuit: CombinationalCircuitDefinition) => {
  const [inputs, setInputs] = useState<Record<string, number>>({});

  // Reset inputs whenever the selected circuit changes
  useEffect(() => {
    const initialInputs: Record<string, number> = {};
    circuit.inputs.forEach((input) => (initialInputs[input] = 0));
    setInputs(initialInputs);
  }, [circuit]);

  // Memoize evaluation to prevent unnecessary calculations
  const outputs = useMemo(() => {
    return circuit.evaluate(inputs);
  }, [inputs, circuit]);

  // Stable reference for the toggle function
  const toggleInput = useCallback((name: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: prev[name] === 1 ? 0 : 1,
    }));
  }, []);

  return { inputs, outputs, toggleInput };
};
