import { appendLeadRow } from "@/lib/google-sheets";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let email = "";
    let newsletterRunRaw = "";
    let newsletterUrlRaw = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = body.email ?? "";
      newsletterRunRaw = body.newsletterRun ?? "";
      newsletterUrlRaw = body.newsletterUrl ?? "";
    } else {
      const formData = await request.formData();
      email = (formData.get("email") as string) ?? "";
      newsletterRunRaw = (formData.get("newsletterRun") as string) ?? "";
      newsletterUrlRaw = (formData.get("newsletterUrl") as string) ?? "";
    }

    const newsletterRunValue = String(newsletterRunRaw).trim().toLowerCase();
    const hasNewsletter = ["yes", "y", "true", "1"].includes(newsletterRunValue);
    const noNewsletter = ["no", "n", "false", "0"].includes(newsletterRunValue);
    const newsletterRun = hasNewsletter ? "Yes" : "No";
    const newsletterUrl = String(newsletterUrlRaw).trim();

    // Basic server-side validation to mirror client-side rules
    if (!email || (!hasNewsletter && !noNewsletter)) {
      return new Response("Missing required fields", { status: 400 });
    }

    if (hasNewsletter) {
      if (!newsletterUrl.trim()) {
        return new Response("Missing newsletterUrl", { status: 400 });
      }

      try {
        const candidate = newsletterUrl.trim().startsWith("http")
          ? newsletterUrl.trim()
          : `https://${newsletterUrl.trim()}`;
        new URL(candidate);
      } catch {
        return new Response("Invalid newsletterUrl", { status: 400 });
      }
    }

    await appendLeadRow({
      email,
      newsletterRun,
      newsletterUrl: hasNewsletter ? newsletterUrl : "",
    });

    // JSON-friendly response for client-side form submissions
    if (contentType.includes("application/json")) {
      return Response.json({ ok: true });
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Failed to append lead row:", error);
    return new Response("Failed to submit. Please try again later.", {
      status: 500,
    });
  }
}

