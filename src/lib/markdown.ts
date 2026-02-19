import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type ArticleFrontmatter = {
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  authorRole?: string;
  date: string;
  category?: string;
};

export type Article = {
  frontmatter: ArticleFrontmatter;
  /** Rendered HTML ready for dangerouslySetInnerHTML */
  html: string;
  /** Raw markdown source (for serving to AI crawlers) */
  raw: string;
};

export function getArticle(slug: string): Article {
  const filePath = join(process.cwd(), "src/content", `${slug}.md`);
  const source = readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  const html = marked.parse(content) as string;

  return {
    frontmatter: data as ArticleFrontmatter,
    html,
    raw: content,
  };
}
