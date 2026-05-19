export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#0a0a0a] to-purple-950/30 gradient-flow" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          Powered by Xiaomi MiMo V2.5
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          MiMo Multi-Agent{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            DevAssistant
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
          A production-grade AI orchestration platform that coordinates 6
          specialized agents for automated code development &mdash; from planning
          to code generation, review, testing, and documentation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://github.com/ClawlyCrz/mimo-multi-agent-devassistant"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200 transition-colors"
          >
            View on GitHub
          </a>
          <a
            href="#demo"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Try Demo
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">6</div>
            <div className="mt-1 text-sm text-zinc-500">AI Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="mt-1 text-sm text-zinc-500">MiMo Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="mt-1 text-sm text-zinc-500">Interfaces</div>
          </div>
        </div>
      </div>
    </section>
  );
}
