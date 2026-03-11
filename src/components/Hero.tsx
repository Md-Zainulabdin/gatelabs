import { motion } from "motion/react";
import { Zap, ChevronRight, Cpu, BookOpen } from "lucide-react";

export const Hero = ({ onExplore }: { onExplore: (tab: string) => void }) => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden bg-white my-10 md:my-5">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50"
            style={{ animationDelay: "100ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase">
              for students by student
            </span>
          </div>

          <h1 className="font-geist mb-6 text-center text-5xl leading-[1.1] font-semibold tracking-tighter text-balance md:text-6xl lg:text-7xl">
            Flip the Bit.
            <br />
            <span className="font-light text-zinc-400">Pulse the Logic.</span>
          </h1>

          <p className="max-w-xl font-geist mx-auto text-zinc-500 text-lg md:text-xl mb-12">
            Master the building blocks of modern computing. Explore logic gates,
            TTL ICs, and boolean algebra with interactive visual tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onExplore("gates")}
              className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 font-medium hover:bg-zinc-800 transition-all"
            >
              Explore Gates
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onExplore("ics")}
              className="flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 font-medium hover:border-zinc-900 transition-all"
            >
              IC Reference
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-zinc-100 pt-12"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center rounded-sm">
              <BookOpen className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="font-semibold text-sm">Interactive Learning</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Visualize logic propagation in real-time with interactive gate
              testing.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center rounded-sm">
              <Cpu className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="font-semibold text-sm">TTL Reference</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Detailed pinouts and datasheets for standard 74-series integrated
              circuits.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center rounded-sm">
              <Zap className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="font-semibold text-sm">Boolean Algebra</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Understand the mathematical foundation of digital circuits.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
