import { motion } from "motion/react";
import { ArrowRight, Heart, ChevronRight } from "lucide-react";
import Footer from "@/src/components/ui/Footer";

export const Hero = ({ onExplore }: { onExplore: (tab: string) => void }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 bg-white my-10 md:my-5">
      {/* Hero */}
      <div className="relative z-10 max-w-5xl mx-auto md:py-16 text-center">
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
            <span className="font-medium tracking-tighter text-zinc-400">
              Pulse the Logic.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-500 text-lg md:text-xl mb-12">
            Explore logic gates, TTL ICs, and boolean algebra with interactive
            visual tools.
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
      </div>

      {/* STATS */}
      <motion.section
        className="w-full border border-zinc-200 bg-zinc-50/30 my-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          {[
            { value: "19+", label: "Interactive circuits" },
            { value: "7.", label: "TTL IC references" },
            { value: "100%", label: "Free & open source" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-16 text-center">
              <div className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 mb-2 font-geist">
                {s.value}
              </div>
              <div className="text-sm font-mono text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* MODULES */}
      <motion.section
        className="w-full max-w-7xl mx-auto py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 tracking-tight rounded-md border border-blue-200 bg-blue-50 text-blue-700 text-[10px] font-semibold font-mono uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Explore
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[0.95]">
              All modules included.
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "Logic Gates",
                  description:
                    "Explore 7 fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) with interactive truth tables and block diagrams.",
                },
                {
                  label: "Combinational Circuits",
                  description:
                    "Master arithmetic & logic circuits. Includes selectors, multiplexers, encoders, and mathematical operators like adders.",
                },
                {
                  label: "Sequential Circuits",
                  description:
                    "Understand memory elements and state machines. Flip-flops, latches, counters, and shift registers with timing diagrams.",
                },
                {
                  label: "TTL 74-Series ICs",
                  description:
                    "Reference guide for popular 74-series integrated circuits with pinouts, datasheets, and practical applications.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="p-8 border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="text-sm font-semibold text-zinc-900 font-geist uppercase mb-3">
                    {item.label}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ROADMAP  */}
      <motion.section
        className="w-full max-w-7xl mx-auto py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 tracking-tight rounded-md border border-emerald-200 bg-emerald-50 text-emerald-700 text-[10px] font-semibold font-mono uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Shipped
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[0.95]">
              v1 is live.
            </h2>
          </div>

          <div>
            <div className="flex flex-col border border-zinc-200">
              {[
                { n: "07", label: "Logic Gates" },
                { n: "08", label: "Combinational Circuits" },
                { n: "04", label: "Sequential flip-flops" },
                { n: "07", label: "TTL 74-Series ICs" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between p-8 border-b border-zinc-200 last:border-b-0 hover:bg-zinc-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors font-geist uppercase">
                    {item.label}
                  </span>
                  <span className="text-4xl font-bold font-geist tracking-tighter text-zinc-900">
                    {item.n}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="px-6 py-24 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Heart className="w-6 h-6 text-black mx-auto mb-6" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] mb-4 text-zinc-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Built in the open.
          </motion.h2>
          <motion.p
            className="text-zinc-600 mb-8 text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            MIT licensed. 100% open source. Contributions welcome from the
            community.
          </motion.p>
          <motion.a
            href="https://github.com/Md-Zainulabdin/gatelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 border border-zinc-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contribute on GitHub <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
