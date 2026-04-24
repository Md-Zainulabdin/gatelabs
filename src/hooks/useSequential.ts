// Sequential circuit state management utilities
import { useState, useRef, useEffect, useCallback } from "react";
import { CircuitState, SequentialCircuitDefinition } from "@/src/libs/types";

/**
 * Custom hook for sequential circuit evaluation.
 * Tracks inputs, outputs, and previous state for edge-triggered logic.
 */
export const useSequential = (circuitConfig: SequentialCircuitDefinition) => {
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [outputs, setOutputs] = useState<CircuitState>({});
  const stateRef = useRef<CircuitState>({});

  // Reset logic when switching circuits
  useEffect(() => {
    const initInputs: Record<string, number> = {};
    circuitConfig.inputs.forEach((inp: string) => (initInputs[inp] = 0));

    const initOutputs: CircuitState = {};
    circuitConfig.outputs.forEach((o: string) => (initOutputs[o] = 0));

    setInputs(initInputs);
    setOutputs(initOutputs);
    stateRef.current = initOutputs;
  }, [circuitConfig]);

  const reset = useCallback(() => {
    const initInputs: Record<string, number> = {};
    circuitConfig.inputs.forEach((inp: string) => (initInputs[inp] = 0));

    const initOutputs: CircuitState = {};
    circuitConfig.outputs.forEach((o: string) => (initOutputs[o] = 0));

    setInputs(initInputs);
    setOutputs(initOutputs);
    stateRef.current = initOutputs;
  }, [circuitConfig]);

  const toggleInput = useCallback((name: string) => {
    // 1. Capture current values from the closure
    const currentVal = inputs[name];
    const nextVal = currentVal === 1 ? 0 : 1;
    
    // 2. Build the next input object immediately
    const nextInputs = { ...inputs, [name]: nextVal };

    // 3. Determine Edge/Async triggers
    const isClocked = circuitConfig.inputs.includes("CLK");
    const isRisingEdge = name === "CLK" && inputs["CLK"] === 0 && nextVal === 1;

    // 4. Update Inputs State (UI Only)
    setInputs(nextInputs);

    // 5. Evaluate Logic (Side Effects happen here, ONCE)
    if (!isClocked || isRisingEdge) {
      const nextOutputs = circuitConfig.evaluate(
        nextInputs,
        stateRef.current,
        isRisingEdge
      );

      // Mutate Ref and Update Output State
      stateRef.current = nextOutputs;
      setOutputs(nextOutputs);
    }
  }, [inputs, circuitConfig]); 
  

  return { inputs, outputs, toggleInput, reset };
};