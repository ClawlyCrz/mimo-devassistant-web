const features = [
  {
    title: "Multi-Agent Orchestration",
    description:
      "Coordinated pipeline with agents that communicate via structured messages. The Orchestrator manages state and delegates tasks.",
  },
  {
    title: "Iterative Code Refinement",
    description:
      "Automated improvement loop between Coder and Reviewer. Code is revised until it meets quality standards or max iterations.",
  },
  {
    title: "Full MiMo V2.5 Integration",
    description:
      "Leverages all three model variants: MiMo-V2.5-Pro for reasoning, MiMo-V2.5 for multimodal, and MiMo-V2.5-TTS for speech.",
  },
  {
    title: "3 Interfaces: CLI, API, Web",
    description:
      "Access via Click-based CLI, FastAPI REST API, or Streamlit web dashboard. Choose the workflow that fits your needs.",
  },
  {
    title: "Token Usage Analytics",
    description:
      "Real-time monitoring of API token consumption across all agents. Track prompt, completion, and total token usage.",
  },
  {
    title: "OpenAI-Compatible SDK",
    description:
      "Uses the standard OpenAI Python SDK for seamless integration with MiMo API endpoints. Drop-in compatible.",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-6 py-20 lg:px-8 border-t border-zinc-800 bg-zinc-950/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Key Features
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
