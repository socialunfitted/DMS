import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "razorpay_secret_saas";

    // Verify Razorpay HMAC SHA256 Signature
    if (signature) {
      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== signature) {
        console.warn("[RAZORPAY WEBHOOK] Invalid signature match");
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    console.log("[RAZORPAY EVENT]:", payload.event);

    if (payload.event === "payment.captured") {
      const payment = payload.payload.payment.entity;
      console.log(`[PAYMENT SUCCESSFUL] Amount: ₹${payment.amount / 100} | ID: ${payment.id}`);

      // Trigger post-purchase fulfillment flow: send digital download URL via Instagram DM / WhatsApp
    }

    return NextResponse.json({ status: "SUCCESS" }, { status: 200 });
  } catch (error) {
    console.error("[RAZORPAY WEBHOOK ERROR]:", error);
    return NextResponse.json({ error: "Webhook Error" }, { status: 500 });
  }
}
