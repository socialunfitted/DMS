"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ArrowRight,
  MessageSquare,
  ShoppingBag,
  Share2,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Play,
  TrendingUp,
  Instagram,
  Youtube,
  DollarSign,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>100% Meta Official Tech Provider — Risk-Free Automation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-tight mb-8">
            Turn Social DMs into Instant <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent">
              Leads, Sales & Digital Products
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-300 text-lg md:text-xl leading-relaxed mb-10">
            Automate Instagram, WhatsApp, Facebook & YouTube comments. Send instant private DMs, qualify leads, collect payments via Razorpay/Stripe, and deliver digital goods automatically.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-semibold text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Start Free Trial — No Card Needed</span>
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch 2-Min Demo</span>
            </Link>
          </div>

          {/* Platform Stat Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-6 rounded-2xl glass-panel border border-white/10 shadow-2xl">
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-3xl font-extrabold font-display text-white">99.8%</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">DM Response Rate</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-3xl font-extrabold font-display text-purple-400">3.4x</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Sales Conversion</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-3xl font-extrabold font-display text-pink-400">&lt; 2s</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Instant Fulfillment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold font-display text-indigo-400">4+</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Channels Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Inspired by TamilDM & Next-Gen AI */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Everything You Need to Automate & Sell
          </h2>
          <p className="text-neutral-400 text-lg">
            Replace 5 disjointed tools with one unified AI automation engine and digital product store.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Comment-to-DM Engine</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                When users comment "PRICE", "LINK", or "BUY" on your Instagram Reels or YouTube videos, automatically send private DM details instantly.
              </p>
            </div>
            <span className="text-xs font-semibold text-purple-400 flex items-center gap-1">
              Supports IG Reels, Posts & YouTube
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Storefront & DMs</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Host digital products (eBooks, courses, PDFs) and send Razorpay/Stripe payment links directly inside chat. Auto-deliver files upon payment.
              </p>
            </div>
            <span className="text-xs font-semibold text-pink-400 flex items-center gap-1">
              Razorpay, UPI & Stripe Integrated
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Workflow & Agent</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Build workflows using visual drag-and-drop or prompt AI in plain English: "Build an IG flow to sell my $29 PDF guide to anyone who comments 'GUIDE'".
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1">
              Powered by OpenAI GPT-4o
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 text-lg">
            Choose the plan that fits your business. Scale as your DM sales grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-lg font-bold text-white mb-2">Starter Creator</div>
              <p className="text-neutral-400 text-xs mb-6">For creators getting started with DM automation.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">₹999</span>
                <span className="text-neutral-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>1 Instagram & 1 Facebook Account</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>1,000 DM Automation Executions/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Digital Product Store (3 Products)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Razorpay & UPI Payments</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="w-full py-3 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-center text-sm transition-all border border-white/10"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl glass-panel border-2 border-purple-500/50 flex flex-col justify-between relative shadow-2xl glow-purple">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="text-lg font-bold text-white mb-2">Professional</div>
              <p className="text-neutral-400 text-xs mb-6">For growing brands, digital sellers & SMBs.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">₹2,499</span>
                <span className="text-neutral-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Instagram, WhatsApp, Facebook & YouTube</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>10,000 DM Executions/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Unlimited Digital Products</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>AI Natural Language Builder</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Unified Inbox & Lead CRM</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-center text-sm hover:opacity-90 transition-all shadow-lg"
            >
              Start 14-Day Free Trial
            </Link>
          </div>

          {/* Agency Plan */}
          <div className="p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-lg font-bold text-white mb-2">Agency & Multi-Tenant</div>
              <p className="text-neutral-400 text-xs mb-6">For agencies managing client accounts.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">₹6,999</span>
                <span className="text-neutral-400 text-xs">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>10 Client Workspaces Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>50,000 DM Executions/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Team Collaboration & Roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>White-Label Custom Branding Ready</span>
                </li>
              </ul>
            </div>
            <Link
              href="/dashboard"
              className="w-full py-3 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-center text-sm transition-all border border-white/10"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 OmniFlow AI. Built using official Meta & Google APIs.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-neutral-300 transition-colors">
              Meta Tech Partner Compliance
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
