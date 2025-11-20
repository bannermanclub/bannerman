import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container-custom py-16 md:py-24">
            <Link href="/blog" className="inline-flex items-center text-neutral-600 hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
            </Link>

            <article className="max-w-3xl mx-auto">
                <header className="mb-10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-primary text-sm font-medium mb-4">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-500 text-sm">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-lg prose-neutral prose-headings:font-serif prose-headings:text-neutral-900 prose-a:text-primary hover:prose-a:text-teal-800 mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
                    <h3 className="text-xl font-bold mb-4">Need personalized advice?</h3>
                    <p className="text-neutral-600 mb-6">
                        Our experts are here to help you navigate your specific situation.
                    </p>
                    <Link href="/get-started">
                        <Button size="lg">
                            Book a Consultation
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    );
}
