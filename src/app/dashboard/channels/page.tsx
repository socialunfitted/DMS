"use client";

import { useState } from "react";
import {
  Share2,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Zap,
  ExternalLink,
  MessageSquare,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ChannelsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold font-display text-white">Social Channel Integrations</h1>
        <p className="text-sm text-neutral-400">
          Connect your official Meta, WhatsApp, and Google YouTube accounts securely via OAuth 2.0.
        </p>
      </div>

      {/* Channel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instagram */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-500 flex items-center justify-center text-white font-bold">
                IG
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Instagram Graph API</h3>
                <div className="text-xs text-neutral-400">Comment-to-DM, Story Mention, Live DMs</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              Connected
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            Official Meta OAuth 2.0 authentication. Automatically listens to comments, story tags, and private DMs without storing passwords.
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold text-white">Account: @brand_official</span>
            <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors">
              Re-authorize
            </button>
          </div>
        </div>

        {/* WhatsApp Cloud API */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                WA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">WhatsApp Cloud API</h3>
                <div className="text-xs text-neutral-400">Meta Business Account & Broadcasts</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              Connected
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            Direct integration via Meta WABA & Phone Number ID. High throughput messaging with instant order notifications.
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold text-white">Phone: +91 9876543210</span>
            <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors">
              Settings
            </button>
          </div>
        </div>

        {/* Facebook Messenger */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                FB
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Facebook Page Messenger</h3>
                <div className="text-xs text-neutral-400">Page Comments & Direct Chat</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              Connected
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            Listen to post comments, auto-reply via page messenger, and capture lead profiles.
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold text-white">Page: Brand Official</span>
            <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors">
              Disconnect
            </button>
          </div>
        </div>

        {/* YouTube Data API */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold">
                YT
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">YouTube Data API</h3>
                <div className="text-xs text-neutral-400">Video Comment Keyword Auto-Replies</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              Connected
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            Monitors comments across your YouTube videos and automatically posts replies containing product links.
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-semibold text-white">Channel: Creator Official</span>
            <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors">
              Manage API Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
