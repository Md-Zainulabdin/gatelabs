import { useState } from "react";
import { Download } from "lucide-react";

import { ICS } from "@/src/libs/constants";
import { SidebarSelection } from "@/src/components/ui/SidebarSelection";

/**
 * View for TTL IC reference data.
 * Displays pinout tables and datasheet links for selected ICs.
 */
export const ICsView = () => {
  const [selectedIC, setSelectedIC] = useState<string>("7408");
  const ic = ICS[selectedIC];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* SIDEBAR */}
      <div className="lg:col-span-1">
        <div className="sidebar">
          <h2 className="section-title mb-4">TTL 74-Series</h2>
          <SidebarSelection
            items={Object.keys(ICS).map((id) => ({
              id,
              label: (
                <>
                  {id} - {ICS[id].name.split(" ").slice(1).join(" ")}
                </>
              ),
            }))}
            selectedId={selectedIC}
            onSelect={setSelectedIC}
          />
        </div>
      </div>

      {/* CONTENT */}
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

          <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
            {ic.description}
          </p>

          <div className="space-y-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 bg-zinc-50 border border-zinc-100 p-8 flex justify-center items-center">
                <div className="relative w-48 h-64 bg-zinc-800 border-4 border-zinc-700 rounded-sm flex flex-col items-center justify-center">
                  <div className="absolute top-0 w-10 h-3 bg-zinc-900 rounded-b-full"></div>
                  <div className="text-zinc-300 font-mono text-xs mb-4">
                    {selectedIC}
                  </div>

                  <div className="absolute -left-5 top-6 flex flex-col gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <div key={n} className="flex items-center">
                        <div className="w-5 h-3 bg-zinc-400 rounded-l-sm"></div>
                        <span className="ml-1 text-[9px] text-zinc-200 font-mono">
                          {n}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-5 top-6 flex flex-col gap-4 items-end">
                    {[14, 13, 12, 11, 10, 9, 8].map((n) => (
                      <div
                        key={n}
                        className="flex items-center flex-row-reverse"
                      >
                        <div className="w-5 h-3 bg-zinc-400 rounded-r-sm"></div>
                        <span className="mr-1 text-[9px] text-zinc-200 font-mono">
                          {n}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-white/30 text-3xl font-bold rotate-90">
                    TTL
                  </div>
                </div>
              </div>
            </section>

            {/* Truth table */}
            <section>
              <h3 className="section-heading-spaced">
                Detailed Pin Configuration
              </h3>
              <div className="table-panel">
                <table className="w-full table-stripe truth-table">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-center">
                      <th className="text-center text-[10px]">Pin</th>
                      <th className="text-center text-[10px]">Name</th>
                      <th className="text-center text-[10px]">Type</th>
                      <th className="text-center text-[10px]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {ic.pinout.map((pin) => (
                      <tr
                        key={pin.id}
                        className="hover:bg-zinc-50 transition-colors text-center"
                      >
                        <td className="px-6 py-4 font-mono text-sm font-bold text-zinc-900">
                          {pin.id}
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-zinc-600">
                          {pin.name}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter rounded-sm ${pin.type === "power" ? "bg-red-50 text-red-600" : pin.type === "ground" ? "bg-zinc-100 text-zinc-600" : pin.type === "input" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}
                          >
                            {pin.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-500">
                          {pin.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border border-zinc-100 bg-zinc-50">
                <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-2 tracking-widest">
                  Power Pin 14
                </span>
                <span className="text-lg font-bold text-zinc-900">
                  VCC (+5V)
                </span>
                <p className="text-xs text-zinc-500 mt-1">
                  Connect to positive supply voltage.
                </p>
              </div>
              <div className="p-6 border border-zinc-100 bg-zinc-50">
                <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-2 tracking-widest">
                  Ground Pin 7
                </span>
                <span className="text-lg font-bold text-zinc-900">
                  GND (0V)
                </span>
                <p className="text-xs text-zinc-500 mt-1">
                  Connect to common ground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
