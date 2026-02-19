import { readFileSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function GET(_req: Request, { params }: Props) {
  const { slug } = await params;
  const filePath = join(process.cwd(), "src/content/blog", `${slug}.md`);

  let content: string;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
