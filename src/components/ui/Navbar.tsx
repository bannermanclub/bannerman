import Link from 'next/link';
import { Button } from './Button';
import { HeartHandshake } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
            <div className="container-custom flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                    <span className="text-xl font-serif font-bold text-neutral-900">Bannerman</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-neutral-600 hover:text-primary font-medium">
                        Home
                    </Link>
                    <Link href="/blog" className="text-neutral-600 hover:text-primary font-medium">
                        Blog
                    </Link>
                    <Link href="/get-started">
                        <Button variant="primary" size="sm">
                            Get Advice
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Placeholder - for simplicity in this iteration */}
                <div className="md:hidden">
                    <Link href="/get-started">
                        <Button variant="primary" size="sm">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
