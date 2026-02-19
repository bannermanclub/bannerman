import { readdirSync } from "fs";
import { join } from "path";
import { getArticle } from "./markdown";
import type { ArticleFrontmatter } from "./markdown";

export type BlogPostMeta = {
  slug: string;
  frontmatter: ArticleFrontmatter;
};

const BLOG_DIR = join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPostMeta[] {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { frontmatter } = getArticle(`blog/${slug}`);
      return { slug, frontmatter };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getBlogPost(slug: string) {
  return getArticle(`blog/${slug}`);
}
