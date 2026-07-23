"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Plus,
  DollarSign,
  Download,
  ExternalLink,
  CheckCircle2,
  Lock,
  Tag,
} from "lucide-react";
import Link from "next/link";

const mockProducts = [
  {
    id: "prod_1",
    name: "Instagram Growth & DM Automation Playbook (PDF)",
    price: 499,
    currency: "INR",
    sales: 142,
    revenue: "₹70,858",
    status: "PUBLISHED",
  },
  {
    id: "prod_2",
    name: "Masterclass Video Course — Scaling to 10k Followers",
    price: 1999,
    currency: "INR",
    sales: 38,
    revenue: "₹75,962",
    status: "PUBLISHED",
  },
  {
    id: "prod_3",
    name: "Canva Template Bundle for IG Stories & Reels",
    price: 299,
    currency: "INR",
    sales: 215,
    revenue: "₹64,285",
    status: "PUBLISHED",
  },
];

export default function DigitalStorePage() {
  const [products] = useState(mockProducts);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-white">Digital Product Store</h1>
          <p className="text-sm text-neutral-400">
            Create digital products and sell them automatically via social DMs with instant Razorpay/Stripe delivery.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/store/demo-brand"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Public Store</span>
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold hover:opacity-90 shadow-md transition-all">
            <Plus className="w-4 h-4" />
            <span>Add Digital Product</span>
          </button>
        </div>
      </div>

      {/* Payment Gateway Status Banner */}
      <div className="p-6 rounded-2xl glass-panel border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Razorpay & UPI Webhook Ready</div>
            <div className="text-xs text-neutral-400">
              Automated delivery triggers instantly when payment is confirmed in chat.
            </div>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          Live Connected
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-purple-500/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                  {prod.status}
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  {prod.currency} {prod.price}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                {prod.name}
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Automated DM delivery link active.
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-neutral-300">
              <div>
                <span className="font-bold text-white">{prod.sales}</span> sales
              </div>
              <div>
                Total: <span className="font-bold text-emerald-400">{prod.revenue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
