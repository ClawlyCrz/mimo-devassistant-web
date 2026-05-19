"use client";

import { useState } from "react";

const mockPipelineOutput = `# Multi-Agent Pipeline Summary

## Planner — passed
Duration: 2340ms
### Implementation Plan
1. Create FastAPI application structure
2. Define Pydantic models for User, Token
3. Implement JWT authentication utilities
4. Create registration and login endpoints
5. Add protected route middleware

## Coder — passed
Duration: 4120ms
\`\`\`python
# auth_api/main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt
from datetime import datetime, timedelta

app = FastAPI(title="Auth API")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_access_token(data: dict) -> str:
    expire = datetime.utcnow() + timedelta(hours=1)
    return jwt.encode({**data, "exp": expire}, SECRET_KEY)
\`\`\`

## Reviewer — passed
Duration: 3210ms
Recommendation: APPROVE
- Correctness: 9/10
- Security: 8/10
- Performance: 9/10

## Tester — passed
Duration: 2890ms
Generated 12 test cases covering registration, login, and token validation.

## Documenter — passed
Duration: 1950ms
Generated API documentation with OpenAPI spec and usage examples.

---
Total tokens: 28,450 | Duration: 14.5s`;

export function DemoSection() {
  const [input, setInput] = useState(
    "Build a REST API for user authentication with JWT tokens"
  );
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);

  const steps = [
    "Planning...",
    "Generating code...",
    "Reviewing code...",
    "Generating tests...",
    "Writing docs...",
    "Complete!",
  ];

  async function runDemo() {
    setRunning(true);
    setOutput("");
    setCurrentStep(0);

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));
    }

    setOutput(mockPipelineOutput);
    setRunning(false);
  }

  return (
    <section
      id="demo"
      className="px-6 py-20 lg:px-8 border-t border-zinc-800"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Interactive Demo
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          See how the multi-agent pipeline processes a development task.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-zinc-500 font-mono">
              mimo-agent run
            </span>
          </div>

          <div className="p-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your development task..."
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={runDemo}
                disabled={running}
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                {running ? "Running..." : "Run Pipeline"}
              </button>
            </div>

            {running && (
              <div className="mt-6 space-y-2">
                {steps.map((step, i) => (
                  <div
                    key={step}
                    className={`flex items-center gap-3 text-sm transition-opacity ${
                      i <= currentStep ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    {i < currentStep ? (
                      <span className="text-green-400 font-mono text-xs">
                        OK
                      </span>
                    ) : i === currentStep ? (
                      <span className="text-blue-400 animate-pulse font-mono text-xs">
                        ..
                      </span>
                    ) : (
                      <span className="text-zinc-600 font-mono text-xs">
                        --
                      </span>
                    )}
                    <span
                      className={
                        i < currentStep ? "text-zinc-300" : "text-zinc-500"
                      }
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {output && (
              <div className="mt-6 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 max-h-96 overflow-y-auto">
                <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed">
                  {output}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
