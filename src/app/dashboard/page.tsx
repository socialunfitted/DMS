"use client";

import {
  MessageSquare,
  DollarSign,
  GitFork,
  Users,
  TrendingUp,
  Instagram,
  Share2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-white">Workspace Overview</h1>
          <p className="text-sm text-neutral-400">
            Real-time analytics for your Instagram, WhatsApp, and Digital Store automations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Meta Webhook Live
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Total DM Executions
            </span>
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-display text-white mb-1">4,820</div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+24.8% from last week</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Digital Store Sales
            </span>
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-display text-white mb-1">₹48,950</div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.2% via DM Checkout</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Active Flows
            </span>
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <GitFork className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-display text-white mb-1">12</div>
            <div className="text-xs text-neutral-400">8 Keyword, 4 Comment DM</div>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              CRM Leads Captured
            </span>
            <div className="w-9 h-9 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold font-display text-white mb-1">1,240</div>
            <div className="text-xs text-neutral-400">Emails & Phone numbers tagged</div>
          </div>
        </div>
      </div>

      {/* Connected Social Channels */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-lg font-bold font-display text-white">Social Channels Status</h2>
          <Link href="/dashboard/channels" className="text-xs font-semibold text-purple-400 hover:text-purple-300">
            Manage Channels →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                IG
              </div>
              <div>
                <div className="text-xs font-semibold text-white">@brand_official</div>
                <div className="text-[10px] text-neutral-400">Instagram Graph API</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                WA
              </div>
              <div>
                <div className="text-xs font-semibold text-white">+91 9876543210</div>
                <div className="text-[10px] text-neutral-400">WhatsApp Cloud API</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                FB
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Brand Page</div>
                <div className="text-[10px] text-neutral-400">Messenger API</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                YT
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Creator Channel</div>
                <div className="text-[10px] text-neutral-400">YouTube Data API</div>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
        <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-4">
          Live Automation Execution Log
        </h2>

        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">Instagram Comment DM</span>
              <span className="text-neutral-400">Triggered by @alex_m on Reel #849 (Keyword: "PRICE")</span>
            </div>
            <span className="text-neutral-500">2 mins ago</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="font-semibold text-white">Digital Product Sold</span>
              <span className="text-neutral-400">₹499 Razorpay Payment received from Priya S. &rarr; eBook Delivered</span>
            </div>
            <span className="text-neutral-500">14 mins ago</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">WhatsApp Lead Capture</span>
              <span className="text-neutral-400">Phone contact saved & tagged "Course Inquiry"</span>
            </div>
            <span className="text-neutral-500">32 mins ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
