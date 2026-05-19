const agents = [
  {
    name: "Planner Agent",
    model: "MiMo-V2.5-Pro",
    description:
      "Decomposes complex tasks into structured implementation plans with technology choices and complexity estimates.",
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "bg-blue-500/20 text-blue-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    name: "Coder Agent",
    model: "MiMo-V2.5-Pro",
    description:
      "Generates production-ready code following the implementation plan. Extracts named code blocks for easy integration.",
    color: "border-green-500/30 bg-green-500/5",
    badge: "bg-green-500/20 text-green-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Reviewer Agent",
    model: "MiMo-V2.5-Pro",
    description:
      "Multi-dimensional code review analyzing security, performance, correctness, and maintainability. Provides severity ratings.",
    color: "border-yellow-500/30 bg-yellow-500/5",
    badge: "bg-yellow-500/20 text-yellow-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Tester Agent",
    model: "MiMo-V2.5-Pro",
    description:
      "Generates comprehensive test suites using pytest with unit tests, edge cases, error handling, and integration tests.",
    color: "border-purple-500/30 bg-purple-500/5",
    badge: "bg-purple-500/20 text-purple-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Documenter Agent",
    model: "MiMo-V2.5",
    description:
      "Creates comprehensive Markdown documentation with architecture diagrams using MiMo multimodal understanding.",
    color: "border-cyan-500/30 bg-cyan-500/5",
    badge: "bg-cyan-500/20 text-cyan-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Narrator Agent",
    model: "MiMo-V2.5-TTS",
    description:
      "Provides voice narration for code reviews and documentation summaries using text-to-speech capabilities.",
    color: "border-rose-500/30 bg-rose-500/5",
    badge: "bg-rose-500/20 text-rose-400",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
];

export function AgentsSection() {
  return (
    <section className="px-6 py-20 lg:px-8 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          6 Specialized AI Agents
        </h2>
        <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
          Each agent is an expert in its domain, coordinated by the Orchestrator
          to deliver complete development pipeline output.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`rounded-xl border ${agent.color} p-5 transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3">
                <div className="text-zinc-300">{agent.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    {agent.name}
                  </h3>
                  <span
                    className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${agent.badge}`}
                  >
                    {agent.model}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-zinc-400">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
