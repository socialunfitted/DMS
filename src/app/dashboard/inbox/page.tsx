"use client";

import { useState } from "react";
import {
  MessageSquare,
  Search,
  Send,
  User,
  Tag,
  PauseCircle,
  PlayCircle,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

const mockConversations = [
  {
    id: "conv_1",
    name: "Alex Morgan",
    username: "@alex_m",
    channel: "INSTAGRAM",
    lastMessage: "Is the eBook available in PDF format?",
    time: "2m ago",
    paused: false,
    tags: ["Lead", "High Intent"],
  },
  {
    id: "conv_2",
    name: "Priya Sharma",
    username: "+91 98765 43210",
    channel: "WHATSAPP",
    lastMessage: "Payment done via UPI. Where is my download?",
    time: "14m ago",
    paused: true,
    tags: ["Customer", "Paid ₹499"],
  },
];

export default function UnifiedInboxPage() {
  const [selectedConv, setSelectedConv] = useState(mockConversations[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="h-[calc(100vh-8rem)] glass-panel border border-white/10 rounded-2xl flex overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-white/10 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-white/5">
          {mockConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConv(conv)}
              className={`p-4 cursor-pointer transition-colors ${
                selectedConv.id === conv.id ? "bg-purple-600/10 border-l-2 border-purple-500" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">{conv.name}</span>
                <span className="text-[10px] text-neutral-500">{conv.time}</span>
              </div>
              <div className="text-xs text-neutral-400 truncate mb-2">{conv.lastMessage}</div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-[9px] text-neutral-400 border border-white/10">
                  {conv.channel}
                </span>
                {conv.paused && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-semibold border border-amber-500/20">
                    Human Agent Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Live Chat Window */}
      <div className="flex-1 flex flex-col min-w-0 bg-black/20">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-600/30 border border-purple-500/30 flex items-center justify-center font-bold text-xs text-purple-300">
              {selectedConv.name.substring(0, 2)}
            </div>
            <div>
              <div className="text-xs font-bold text-white">{selectedConv.name}</div>
              <div className="text-[10px] text-neutral-400">{selectedConv.username} ({selectedConv.channel})</div>
            </div>
          </div>

          <button
            onClick={() =>
              setSelectedConv((prev) => ({ ...prev, paused: !prev.paused }))
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
              selectedConv.paused
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-amber-500/10 border-amber-500/20 text-amber-400"
            }`}
          >
            {selectedConv.paused ? (
              <>
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Resume AI Bot</span>
              </>
            ) : (
              <>
                <PauseCircle className="w-3.5 h-3.5" />
                <span>Pause Bot (Takeover)</span>
              </>
            )}
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex justify-start">
            <div className="max-w-md p-3 rounded-2xl bg-white/10 text-white text-xs space-y-1">
              <div className="font-semibold text-[10px] text-neutral-400">{selectedConv.name}</div>
              <p>{selectedConv.lastMessage}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-md p-3 rounded-2xl bg-purple-600 text-white text-xs space-y-1">
              <div className="font-semibold text-[10px] text-purple-200">AI Bot Response</div>
              <p>
                Hi {selectedConv.name}! Yes, it is a direct PDF download. You can purchase it here for ₹499: https://omniflow.ai/store/demo-brand
              </p>
            </div>
          </div>
        </div>

        {/* Message Input Bar */}
        <div className="p-4 border-t border-white/10 flex items-center gap-3">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a manual reply to takeover chat..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500"
          />
          <button className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors">
            <Send className="w-3.5 h-3.5" />
            <span>Send Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
