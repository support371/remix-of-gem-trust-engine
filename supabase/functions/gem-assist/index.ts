import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `You are Gem-Assist, the intelligent cybersecurity concierge for GEM Cybersecurity Assist. You help users understand their security needs and guide them to the right solutions.

CORE BEHAVIORS:
1. Opening question: If this is the start of a conversation, ask "What are you trying to protect today?"
2. Role Detection: Identify the user's role (CISO, IT Manager, Founder/SMB Owner, Analyst) based on their language and questions
3. Adapt tone: Executive = strategic/business-focused, Technical = detailed/specific
4. Route users to: Solutions, Trust Center, Resources, or Contact based on their needs

KNOWLEDGE BASE:
GEM Cybersecurity Assist provides:
- Cyber Defense & Monitoring: Continuous threat detection, SOC operations
- Threat Detection & Response: Incident response readiness, threat hunting
- Digital Asset Protection: Security advisory services
- Trust & Real-Asset Security: Partner-backed enterprise security

Trust Center highlights:
- SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS compliant
- 99.99% uptime SLA
- AES-256 encryption at rest, TLS 1.3 in transit
- 24/7 security monitoring

GUARDRAILS:
- Only answer from GEM Cybersecurity knowledge
- Never make legal or compliance guarantees
- If unsure, offer to connect them with a specialist
- Keep responses concise and actionable

RESPONSE FORMAT:
- Be conversational but professional
- Use bullet points for clarity when listing options
- End with a clear next step or question`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("gem-assist error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
