"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GitFork,
  MessageSquare,
  ShoppingBag,
  Share2,
  Users,
  BarChart3,
  Settings,
  Zap,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Automations", href: "/dashboard/workflows", icon: GitFork },
  { name: "Unified Inbox", href: "/dashboard/inbox", icon: MessageSquare },
  { name: "Digital Store", href: "/dashboard/store", icon: ShoppingBag },
  { name: "Social Channels", href: "/dashboard/channels", icon: Share2 },
  { name: "Contacts CRM", href: "/dashboard/contacts", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass-panel border-r border-white/10 flex flex-col h-screen sticky top-0">
      {/* Brand Logo */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold font-display tracking-tight text-white">
            OmniFlow<span className="text-purple-400">.ai</span>
          </span>
        </Link>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 py-2 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
          Workspace Menu
        </div>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                isActive
                  ? "bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-purple-400" : "text-neutral-500 group-hover:text-neutral-300"
                )}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* AI Assistant Banner */}
      <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-purple-900/40 via-indigo-900/20 to-purple-950/40 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-semibold text-purple-300">AI Prompt Builder</span>
        </div>
        <p className="text-[12px] text-neutral-400 mb-3 leading-relaxed">
          Create complete DM flows using natural language prompts.
        </p>
        <button className="w-full py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors shadow-sm">
          Generate Flow with AI
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">
            JD
          </div>
          <div className="text-left overflow-hidden">
            <div className="text-xs font-semibold text-white truncate">John Creator</div>
            <div className="text-[10px] text-neutral-400 truncate">Pro Workspace</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
