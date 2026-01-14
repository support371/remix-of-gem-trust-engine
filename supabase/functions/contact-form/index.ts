import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  topic: string;
  message: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormData = await req.json();
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.company || !data.role || !data.topic || !data.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log the submission (in production, you'd store this in a database or send via email)
    console.log("Contact form submission received:", {
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      role: data.role,
      topic: data.topic,
      messageLength: data.message.length,
      timestamp: new Date().toISOString(),
    });

    // For now, just acknowledge receipt
    // In production, you could:
    // 1. Store in a contacts table
    // 2. Send an email notification via Resend
    // 3. Create a CRM entry

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form received successfully" 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process submission" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
