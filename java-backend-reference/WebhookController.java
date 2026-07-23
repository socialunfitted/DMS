package com.omniflow.saas.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/v1/webhooks")
public class WebhookController {

    private static final String META_VERIFY_TOKEN = "custom-webhook-verify-token-saas-2026";
    private static final String RAZORPAY_WEBHOOK_SECRET = "razorpay_secret_saas";

    /**
     * Meta Instagram & Facebook Webhook Handshake Verification (GET)
     */
    @GetMapping("/meta")
    public ResponseEntity<String> verifyMetaWebhook(
            @RequestParam("hub.mode") String mode,
            @RequestParam("hub.verify_token") String token,
            @RequestParam("hub.challenge") String challenge) {

        if ("subscribe".equals(mode) && META_VERIFY_TOKEN.equals(token)) {
            System.out.println("[JAVA META WEBHOOK] Verification Successful.");
            return ResponseEntity.ok(challenge);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Verification failed");
    }

    /**
     * Meta Webhook Event Listener for Incoming DMs & Comments (POST)
     */
    @PostMapping("/meta")
    public ResponseEntity<String> handleMetaEvent(@RequestBody String payload) {
        System.out.println("[JAVA META EVENT RECEIVED]: " + payload);
        // Dispatch to AI Agent / Workflow Engine Task Queue
        return ResponseEntity.ok("EVENT_RECEIVED");
    }

    /**
     * Razorpay Webhook Event Listener with HMAC SHA-256 Validation (POST)
     */
    @PostMapping("/razorpay")
    public ResponseEntity<String> handleRazorpayEvent(
            @RequestHeader(value = "X-Razorpay-Signature", required = false) String signature,
            @RequestBody String rawBody) {

        if (signature != null && !verifyHmacSignature(rawBody, signature, RAZORPAY_WEBHOOK_SECRET)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Razorpay Signature");
        }

        System.out.println("[JAVA RAZORPAY EVENT RECEIVED]: " + rawBody);
        // Trigger automated DM digital product delivery
        return ResponseEntity.ok("PAYMENT_FULFILLED");
    }

    private boolean verifyHmacSignature(String data, String expectedSignature, String secret) {
        try {
            Mac sha256Hmac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256Hmac.init(secretKey);
            byte[] hash = sha256Hmac.doFinal(data.getBytes(StandardCharsets.UTF_8));
            
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString().equalsIgnoreCase(expectedSignature);
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            return false;
        }
    }
}
