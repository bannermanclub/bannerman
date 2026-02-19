import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const filePath = join(
    process.cwd(),
    "src/content",
    "why-do-brands-need-a-newsletter.md"
  );
  const content = readFileSync(filePath, "utf-8");

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
