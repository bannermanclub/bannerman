import { appendLeadRow } from "@/lib/google-sheets";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let company = "";
    let website = "";
    let fundingStatus = "";
    let profitable = "";
    let mrrUsd = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = body.name ?? "";
      email = body.email ?? "";
      company = body.company ?? "";
      website = body.website ?? "";
      fundingStatus = body.fundingStatus ?? "";
      profitable = body.profitable ?? "";
      mrrUsd = body.mrrUsd ?? "";
    } else {
      const formData = await request.formData();
      name = (formData.get("name") as string) ?? "";
      email = (formData.get("email") as string) ?? "";
      company = (formData.get("company") as string) ?? "";
      website = (formData.get("website") as string) ?? "";
      fundingStatus = (formData.get("fundingStatus") as string) ?? "";
      profitable = (formData.get("profitable") as string) ?? "";
      mrrUsd = (formData.get("mrrUsd") as string) ?? "";
    }

    // Basic server-side validation to mirror client-side rules
    if (!name || !email || !company || !website || !fundingStatus || !profitable) {
      return new Response("Missing required fields", { status: 400 });
    }

    await appendLeadRow({
      name,
      email,
      company,
      website,
      fundingStatus,
      profitable,
      mrrUsd,
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

