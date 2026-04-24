import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Hero } from "@/src/components/ui/Hero";
import { LogicGatesView } from "@/src/components/views/LogicGates";
import { ICsView } from "@/src/components/views/ICs";
import Navbar from "@/src/components/ui/Navbar";
import { CombinationalView } from "@/src/components/views/Combinational";
import { SequentialView } from "@/src/components/views/Sequential";

/**
 * Root application component.
 * Manages the current active tab and renders the matching view.
 */
export default function App() {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="grow px-2 md:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {activeTab === "hero" && <Hero onExplore={setActiveTab} />}
            {activeTab === "gates" && <LogicGatesView />}
            {activeTab === "ics" && <ICsView />}
            {activeTab === "combinational" && <CombinationalView />}
            {activeTab === "sequential" && <SequentialView />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
