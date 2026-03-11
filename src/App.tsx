import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Hero } from "@/src/components/Hero";
import { LogicGatesView } from "@/src/components/LogicGates";
import { ICsView } from "@/src/components/ICs";
import Navbar from "@/src/components/Navbar";

export default function App() {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="grow">
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
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-zinc-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-bold tracking-tight text-zinc-900 uppercase font-mono">
              GateLabs
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            © 2026 GateLabs. Educational resource for digital logic design.
          </p>
        </div>
      </footer>
    </div>
  );
}
