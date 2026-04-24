import { Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Application navigation bar.
 * Loads GitHub stars and provides desktop/mobile tab controls.
 */
const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
}) => {
  const [stars, setStars] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/Md-Zainulabdin/gatelabs")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(0));
  }, []);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <nav className="border-b border-zinc-200 bg-white text-zinc-900 lg:sticky lg:top-0 lg:z-50">
      <div className="mx-auto px-6 lg:px-8 py-1">
        <div className="flex justify-between h-14 items-center">
          {/* Left — Brand */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTab("hero")}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-xl font-extrabold tracking-tighter font-mono cursor-pointer">
                  GateLabs
                </span>
              </button>
            </div>

            {/* Center — Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <span className="text-zinc-300 font-mono text-xs">/</span>
              <div className="flex space-x-6">
                <button
                  onClick={() => handleTab("gates")}
                  className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${activeTab === "gates" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}`}
                >
                  Logic Gates
                </button>
                <button
                  onClick={() => handleTab("combinational")}
                  className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${activeTab === "combinational" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}`}
                >
                  Combinational
                </button>
                <button
                  onClick={() => handleTab("sequential")}
                  className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${activeTab === "sequential" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}`}
                >
                  Sequential
                </button>
                <button
                  onClick={() => handleTab("ics")}
                  className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${activeTab === "ics" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"}`}
                >
                  IC's
                </button>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled
                    className="text-[11px] font-semibold tracking-widest uppercase text-zinc-300 cursor-not-allowed"
                  >
                    Playground
                  </button>
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-wider text-amber-500 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-sm">
                    Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — GitHub + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Md-Zainulabdin/gatelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-3 py-1 hover:bg-zinc-100 rounded-md transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
              {stars === null ? (
                <span className="font-mono text-xs font-bold text-zinc-400">
                  ...
                </span>
              ) : stars === 0 ? (
                <span className="flex items-center gap-1 font-mono text-xs font-bold uppercase text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  Be first!
                </span>
              ) : (
                <span className="font-mono text-xs font-bold text-zinc-900">
                  {stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}
                </span>
              )}
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 rounded-md hover:bg-zinc-100 transition-colors"
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-zinc-900" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden border-t border-zinc-100 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-6">
          <button
            onClick={() => handleTab("gates")}
            className={`text-left text-xs font-semibold tracking-widest uppercase transition-colors ${activeTab === "gates" ? "text-zinc-900" : "text-zinc-500"}`}
          >
            Logic Gates
          </button>
          <button
            onClick={() => handleTab("combinational")}
            className={`text-left text-xs font-semibold tracking-widest uppercase transition-colors ${activeTab === "combinational" ? "text-zinc-900" : "text-zinc-500"}`}
          >
            Combinational
          </button>
          <button
            onClick={() => handleTab("sequential")}
            className={`text-left text-xs font-semibold tracking-widest uppercase transition-colors ${activeTab === "sequential" ? "text-zinc-900" : "text-zinc-500"}`}
          >
            Sequential
          </button>
          <button
            onClick={() => handleTab("ics")}
            className={`text-left text-xs font-semibold tracking-widest uppercase transition-colors ${activeTab === "ics" ? "text-zinc-900" : "text-zinc-500"}`}
          >
            IC's
          </button>
          <div className="flex items-center gap-1.5">
            <button
              disabled
              className="text-xs font-semibold tracking-widest uppercase text-zinc-300 cursor-not-allowed"
            >
              Playground
            </button>
            <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-amber-500 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-sm">
              Soon
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
