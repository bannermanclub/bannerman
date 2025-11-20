import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, User } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="container-custom py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">Relationship Insights</h1>
                <p className="text-xl text-neutral-600">
                    Expert advice, practical tips, and stories of hope to help you navigate your relationship journey.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="flex flex-col h-full">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3 uppercase tracking-wider">
                                {post.category}
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-xl font-bold text-neutral-900 hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                            </Link>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-neutral-600 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </CardContent>
                        <CardFooter className="border-t border-neutral-100 mt-auto">
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex items-center justify-between text-sm text-neutral-500">
                                    <div className="flex items-center gap-1">
                                        <User className="h-4 w-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="w-full">
                                    <Button variant="secondary" size="sm" className="w-full">
                                        Read Article
                                    </Button>
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
