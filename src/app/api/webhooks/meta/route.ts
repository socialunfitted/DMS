import { NextResponse } from "next/server";

// GET endpoint for Meta Webhook Handshake Verification
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.META_VERIFY_TOKEN || "custom-webhook-verify-token-saas-2026";

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[META WEBHOOK] Verification Successful.");
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// POST endpoint for Meta Real-time Events (Instagram & Facebook DMs/Comments)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[META WEBHOOK INCOMING EVENT]:", JSON.stringify(body, null, 2));

    // Entry processing
    if (body.object === "instagram" || body.object === "page") {
      for (const entry of body.entry) {
        // Process Instagram / FB messaging events
        if (entry.messaging) {
          for (const messagingEvent of entry.messaging) {
            const senderId = messagingEvent.sender?.id;
            const messageText = messagingEvent.message?.text;

            console.log(`[DM RECEIVED] From: ${senderId} | Text: ${messageText}`);
            // Here the automation execution engine evaluates rules and fires replies
          }
        }

        // Process Instagram / FB comment events
        if (entry.changes) {
          for (const change of entry.changes) {
            if (change.field === "comments") {
              const commentId = change.value?.id;
              const text = change.value?.text;
              console.log(`[COMMENT RECEIVED] Comment ID: ${commentId} | Text: ${text}`);
            }
          }
        }
      }
    }

    return NextResponse.json({ status: "EVENT_RECEIVED" }, { status: 200 });
  } catch (error) {
    console.error("[META WEBHOOK ERROR]:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
