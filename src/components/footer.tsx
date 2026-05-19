export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">
              MiMo DevAssistant
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Multi-agent AI development pipeline
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/ClawlyCrz/mimo-multi-agent-devassistant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://platform.xiaomimimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              MiMo Platform
            </a>
            <a
              href="https://100t.xiaomimimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              MiMo Orbit
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-600">
          <span>MiMo-V2.5-Pro</span>
          <span>&middot;</span>
          <span>MiMo-V2.5</span>
          <span>&middot;</span>
          <span>MiMo-V2.5-TTS</span>
          <span>&middot;</span>
          <span>OpenAI SDK</span>
          <span>&middot;</span>
          <span>FastAPI</span>
          <span>&middot;</span>
          <span>Next.js</span>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-700">
          Built for the Xiaomi MiMo Orbit 100T Token Creator Incentive Program
        </p>
      </div>
    </footer>
  );
}
