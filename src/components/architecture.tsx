export function ArchitectureSection() {
  const steps = [
    { label: "Task Input", color: "bg-zinc-700", icon: "1" },
    { label: "Planner", color: "bg-blue-600", icon: "2" },
    { label: "Coder", color: "bg-green-600", icon: "3" },
    { label: "Reviewer", color: "bg-yellow-600", icon: "4" },
    { label: "Tester", color: "bg-purple-600", icon: "5" },
    { label: "Documenter", color: "bg-cyan-600", icon: "6" },
    { label: "Output", color: "bg-zinc-700", icon: "7" },
  ];

  return (
    <section className="px-6 py-20 lg:px-8 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Multi-Agent Pipeline
        </h2>
        <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
          Tasks flow through specialized agents, with an iterative refinement
          loop between Coder and Reviewer until code meets quality standards.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`${step.color} flex h-14 w-14 items-center justify-center rounded-xl text-white font-bold text-lg shadow-lg`}
                >
                  {step.icon}
                </div>
                <span className="mt-2 text-xs text-zinc-400 font-medium">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="h-5 w-5 text-zinc-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="font-mono text-sm text-zinc-400 leading-relaxed">
            <pre className="overflow-x-auto whitespace-pre">
{`  Orchestrator Agent
  ├── Planner Agent    ─── MiMo-V2.5-Pro  (Deep reasoning)
  ├── Coder Agent      ─── MiMo-V2.5-Pro  (Code generation)
  ├── Reviewer Agent   ─── MiMo-V2.5-Pro  (Multi-dim review)
  │   └── ↻ Iterative refinement loop with Coder
  ├── Tester Agent     ─── MiMo-V2.5-Pro  (Test generation)
  ├── Documenter Agent ─── MiMo-V2.5      (Multimodal docs)
  └── Narrator Agent   ─── MiMo-V2.5-TTS  (Voice narration)`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
