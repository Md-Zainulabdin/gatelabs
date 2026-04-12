import { useState } from "react";
import { ChevronRight, Download } from "lucide-react";

import { ICS } from "@/src/libs/constants";

export const ICsView = () => {
  const [selectedIC, setSelectedIC] = useState<string>("7408");
  const ic = ICS[selectedIC];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          TTL 74-Series
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {Object.keys(ICS).map((id) => (
            <button
              key={id}
              onClick={() => setSelectedIC(id)}
              className={`flex items-center justify-between px-4 py-3 border text-sm font-medium transition-all ${selectedIC === id ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"}`}
            >
              <span>
                {id} - {ICS[id].name.split(" ").slice(1).join(" ")}
              </span>
              <ChevronRight className={`w-4 h-4 ${selectedIC === id ? "opacity-100" : "opacity-0"}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-8">
        <div className="card">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">{ic.name}</h1>
              <p className="text-zinc-500 text-sm">Standard DIP-14 Package</p>
            </div>
            <a
              href={ic.datasheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 border border-zinc-200 text-xs font-medium hover:bg-zinc-50 transition-colors"
            >
              <Download className="w-3 h-3" />
              Datasheet
            </a>
          </div>

          <p className="text-zinc-600 mb-8 leading-relaxed text-lg">{ic.description}</p>

          <div className="space-y-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 bg-zinc-50 border border-zinc-100 p-8 flex justify-center items-center">
                <div className="relative w-48 h-64 bg-zinc-800 border-4 border-zinc-700 rounded-sm flex flex-col items-center justify-center">
                  <div className="absolute top-0 w-10 h-3 bg-zinc-900 rounded-b-full"></div>
                  <div className="text-zinc-300 font-mono text-xs mb-4">{selectedIC}</div>

                  <div className="absolute -left-5 top-6 flex flex-col gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <div key={n} className="flex items-center">
                        <div className="w-5 h-3 bg-zinc-400 rounded-l-sm"></div>
                        <span className="ml-1 text-[9px] text-zinc-200 font-mono">{n}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-5 top-6 flex flex-col gap-4 items-end">
                    {[14, 13, 12, 11, 10, 9, 8].map((n) => (
                      <div key={n} className="flex items-center flex-row-reverse">
                        <div className="w-5 h-3 bg-zinc-400 rounded-r-sm"></div>
                        <span className="mr-1 text-[9px] text-zinc-200 font-mono">{n}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-white/30 text-3xl font-bold rotate-90">TTL</div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Detailed Pin Configuration</h3>
              <div className="overflow-scroll md:overflow-hidden border border-zinc-200 rounded-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-center">
                      <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Pin</th>
                      <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Name</th>
                      <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Type</th>
                      <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {ic.pinout.map((pin) => (
                      <tr key={pin.id} className="hover:bg-zinc-50 transition-colors text-center">
                        <td className="px-6 py-4 font-mono text-sm font-bold text-zinc-900">{pin.id}</td>
                        <td className="px-6 py-4 font-mono text-sm text-zinc-600">{pin.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter rounded-sm ${pin.type === "power" ? "bg-red-50 text-red-600" : pin.type === "ground" ? "bg-zinc-100 text-zinc-600" : pin.type === "input" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>
                            {pin.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-500">{pin.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border border-zinc-100 bg-zinc-50">
                <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-2 tracking-widest">Power Pin 14</span>
                <span className="text-lg font-bold text-zinc-900">VCC (+5V)</span>
                <p className="text-xs text-zinc-500 mt-1">Connect to positive supply voltage.</p>
              </div>
              <div className="p-6 border border-zinc-100 bg-zinc-50">
                <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-2 tracking-widest">Ground Pin 7</span>
                <span className="text-lg font-bold text-zinc-900">GND (0V)</span>
                <p className="text-xs text-zinc-500 mt-1">Connect to common ground.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
