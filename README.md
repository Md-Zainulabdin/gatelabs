# GateLabs

GateLabs is an interactive digital logic learning application designed for students exploring the fundamentals of digital electronics. It provides hands-on tools to understand logic gates and TTL integrated circuits through visual diagrams, truth tables, pin configurations, and real-time interaction — all in the browser, no installation required.

---

## Why GateLabs?

Learning digital logic from textbooks alone can feel abstract. GateLabs bridges the gap between theory and intuition by letting you interact directly with the components — toggle inputs, observe outputs, read mnemonics, and study IC pinouts — all in one place. Whether you are in high school or university, GateLabs is designed to make digital logic click.

---

## What You Can Do (v1)

### Logic Gates

GateLabs covers the seven fundamental logic gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR.

For each gate you get:

- **Interactive input testing** — toggle between 0 and 1 across multiple input combinations and see the output update instantly.
- **Circuit diagram** — a clean visual of the gate symbol with labeled inputs and outputs.
- **Truth table** — dynamically generated for all possible input combinations, so you can verify behaviour at a glance.
- **Plain-language explanation** — a concise description of what the gate does and when it outputs high or low.
- **Mnemonic** — a short memory aid to help you remember each gate's behaviour (for example, AND as "all must agree", OR as "one is enough", XOR as "one but not both").

### Combinational Circuits

GateLabs now includes a set of standard combinational circuits used in arithmetic and signal routing:

| Circuit | Description |
|---------|-------------|
| Half Adder | Adds two bits to produce Sum and Carry outputs. |
| Full Adder | Adds three bits (A, B, Cin) to produce Sum and Cout. |
| Half Subtractor | Subtracts B from A to generate Difference and Borrow. |
| Full Subtractor | Subtracts B and Bin from A to produce Difference and Bout. |
| 2-to-1 Multiplexer | Selects one of two inputs (I0 or I1) based on selector S. |
| 1-to-2 Demultiplexer | Routes a single input I to either Y0 or Y1 depending on S. |
| 2-to-4 Decoder | Converts 2-bit input into one of four unique output lines. |
| 4-to-2 Encoder | Encodes one active input line into a 2-bit binary output. |

For each combinational circuit you get:

- **Interactive signal toggles** — change inputs and observe outputs and wiring instantly.
- **Block diagram** — a simplified visual that shows how input and output nodes are connected.
- **Truth table** — all valid input/output combinations for the circuit.
- **Boolean expression** — the circuit's logic equations shown in readable form.
- **Optimized circuit diagrams** — images from Cloudinary with instant loading and fade-in animations for seamless transitions between circuits.

### Sequential Circuits

GateLabs also supports stateful sequential circuits that depend on clock or memory behavior:

| Circuit | Description |
|---------|-------------|
| SR Latch | A basic memory element that sets or resets output Q depending on S and R. |
| D Flip-Flop | Captures the D input on the rising clock edge and holds it until the next edge. |
| JK Flip-Flop | A versatile edge-triggered flip-flop that can set, reset, hold, or toggle state. |
| T Flip-Flop | A toggle flip-flop that changes state on each active clock pulse when T is high. |

For each sequential circuit you get:

- **Stateful output behavior** — outputs can hold previous values and change only on clock events.
- **Clock-aware simulation** — supports rising-edge triggering for flip-flop circuits.
- **Truth/State table** — shows how inputs and clock transitions map to next-state outputs.
- **Interactive block diagram** — see the effect of signal changes in a state machine style diagram.

### Integrated Circuits (ICs)

GateLabs covers seven standard TTL 74-series ICs commonly used in introductory digital design courses:

| IC | Description |
|----|-------------|
| 7400 | Quad 2-input NAND |
| 7402 | Quad 2-input NOR |
| 7404 | Hex Inverter |
| 7408 | Quad 2-input AND |
| 7432 | Quad 2-input OR |
| 7486 | Quad 2-input XOR |
| 74266 | Quad 2-input XNOR |

For each IC you get:

- **Description** — what the chip does and how many gates it contains.
- **DIP pin diagram** — an interactive visual of the chip body with all 14 pins labeled, matching the standard dual in-line package layout.
- **Circuit diagram** — an example showing how the IC is typically wired up.
- **Datasheet link** — a direct link to the official Texas Instruments datasheet for reference.

---

## Key Features

- **100% Free & Open Source** — MIT licensed, hosted on GitHub.
- **No Installation Required** — runs entirely in the browser.
- **Real-time Interactive Simulation** — toggle inputs and watch outputs update instantly.
- **Mobile Responsive** — works on desktop, tablet, and mobile devices.
- **Production Ready** — optimized performance with preloaded cloud images, smooth animations, and zero console errors.

---

## Roadmap

GateLabs is being built in focused versions. Here is what is planned:

### v1 — Current
- Logic Gates module (AND, OR, NOT, NAND, XOR, XNOR, NAND)
- Combinational Circuits (Half/Full Adder, Half/Full Subtractor, Multiplexers, Encoders, Decoders)
- Sequential Circuits (Latches, Flip-flops)
- ICs module (7400, 7402, 7404, 7408, 7432, 7486, 74266)
- Truth tables, diagrams, mnemonics, and pin configurations
- Optimized image loading with CDN delivery

### v2 — Planned
- **Playground** — a drag-and-drop canvas to build your own circuits using gates, ICs, power sources (Vcc, Gnd), and LED output indicators
- **Real-time simulation** — toggle input switches and watch signals propagate through your circuit
- **Boolean equation generation** — automatically derive the logic expression from your circuit
- **K-map simplification** — populate a Karnaugh map from your truth table, group prime implicants, and get the minimised Boolean expression
- **Export** — save circuits as images, export truth tables as CSV, and copy minimised equations as text

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Md-Zainulabdin/gatelabs.git

# Navigate into the project
cd gatelabs

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## Contributing

Contributions are welcome. If you spot a bug, have a suggestion, or want to help build a v2 feature, feel free to open an issue or submit a pull request. Please keep pull requests focused — one feature or fix per PR makes review much easier.

---

## License

MIT