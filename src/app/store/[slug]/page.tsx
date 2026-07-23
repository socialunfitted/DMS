"use client";

import { useState } from "react";
import { ShoppingBag, ShieldCheck, CheckCircle2, Zap, Download } from "lucide-react";
import Link from "next/link";

export default function PublicStorefront({ params }: { params: { slug: string } }) {
  const [purchased, setPurchased] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl">
            {params.slug.substring(0, 2).toUpperCase()}
          </div>
          <h1 className="text-3xl font-bold font-display text-white capitalize">{params.slug} Store</h1>
          <p className="text-xs text-neutral-400">Official Digital Products & Download Portal</p>
        </div>

        {/* Product Card */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20">
                Instant PDF Download
              </span>
              <h2 className="text-2xl font-bold text-white mt-3">
                Instagram DM Automation & Lead Gen Playbook
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold font-display text-white">₹499</div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">One-time payment</div>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed">
            Learn step-by-step how to convert Instagram Reels comments into high-paying leads and digital sales using Meta official APIs.
          </p>

          <div className="space-y-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full 65-page eBook PDF + Checklist</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant Download link sent to your Email & Instagram DM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Secure Razorpay / UPI Payment</span>
            </div>
          </div>

          {/* Checkout Button / Simulated Success */}
          {!purchased ? (
            <button
              onClick={() => setPurchased(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold text-base hover:opacity-90 shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Buy Now with Razorpay / UPI (₹499)</span>
            </button>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-lg font-bold text-white">Payment Confirmed!</div>
              <p className="text-xs text-emerald-300">
                Your download link has been generated and sent to your Instagram DM & Email.
              </p>
              <button className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-2 mx-auto shadow-md">
                <Download className="w-4 h-4" />
                <span>Download Playbook (PDF)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
