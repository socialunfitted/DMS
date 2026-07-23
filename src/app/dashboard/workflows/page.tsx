"use client";

import { useState } from "react";
import {
  GitFork,
  Plus,
  Play,
  Pause,
  MessageSquare,
  Sparkles,
  Zap,
  MoreVertical,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const mockFlows = [
  {
    id: "flow_1",
    name: "Instagram Reel Comment-to-DM (Keyword: PRICE)",
    trigger: "Comment Keyword ('PRICE', 'COST', 'DETAILS')",
    channel: "Instagram",
    status: "ACTIVE",
    runs: 2840,
    conversions: "32.4%",
  },
  {
    id: "flow_2",
    name: "Digital Product Delivery via DM (Razorpay Webhook)",
    trigger: "Order Paid (Razorpay / Stripe)",
    channel: "Instagram / WhatsApp",
    status: "ACTIVE",
    runs: 940,
    conversions: "98.1%",
  },
  {
    id: "flow_3",
    name: "Story Mention Auto-Thank You DM",
    trigger: "Story Mention Tag",
    channel: "Instagram",
    status: "ACTIVE",
    runs: 620,
    conversions: "14.2%",
  },
  {
    id: "flow_4",
    name: "YouTube Video Comment Auto-Reply",
    trigger: "YouTube Comment Keyword ('LINK')",
    channel: "YouTube",
    status: "PAUSED",
    runs: 420,
    conversions: "21.0%",
  },
];

export default function WorkflowsPage() {
  const [flows, setFlows] = useState(mockFlows);

  const toggleStatus = (id: string) => {
    setFlows((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, status: f.status === "ACTIVE" ? "PAUSED" : "ACTIVE" } : f
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-white">Automation Workflows</h1>
          <p className="text-sm text-neutral-400">
            Manage your trigger-based automations, comment replies, and AI agent bots.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-purple-500/30 text-purple-300 text-xs font-semibold hover:bg-purple-500/10 transition-colors">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Create with AI Prompt</span>
          </button>
          <Link
            href="/dashboard/workflows/new"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold hover:opacity-90 shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Custom Flow</span>
          </Link>
        </div>
      </div>

      {/* Workflows List */}
      <div className="space-y-4">
        {flows.map((flow) => (
          <div
            key={flow.id}
            className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-500/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-1">
                <GitFork className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-bold text-white">{flow.name}</h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      flow.status === "ACTIVE"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-neutral-500/10 text-neutral-400 border border-neutral-500/20"
                    }`}
                  >
                    {flow.status}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <span>Trigger: <strong className="text-neutral-300">{flow.trigger}</strong></span>
                  <span>•</span>
                  <span>Channel: <strong className="text-neutral-300">{flow.channel}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
              <div className="text-right">
                <div className="text-base font-bold text-white">{flow.runs.toLocaleString()}</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Executions</div>
              </div>
              <div className="text-right">
                <div className="text-base font-bold text-emerald-400">{flow.conversions}</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Conversion</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleStatus(flow.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    flow.status === "ACTIVE"
                      ? "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20"
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
                  }`}

                >
                  {flow.status === "ACTIVE" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
