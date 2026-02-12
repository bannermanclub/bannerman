import Link from "next/link";
import { Button } from "./Button";
import { Sparkles } from "lucide-react";
import { LeadFormModal } from "./LeadFormModal";

export function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
            <div className="container-custom flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-orange-500">
                        <Sparkles className="h-4 w-4 text-neutral-900" />
                    </div>
                    <span className="text-xl font-serif font-bold text-neutral-900">
                        Bannerman
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-neutral-600 hover:text-primary font-medium">
                        Home
                    </Link>
                    <Link href="/#services" className="text-neutral-600 hover:text-primary font-medium">
                        Services
                    </Link>
                    <Link href="/about" className="text-neutral-600 hover:text-primary font-medium">
                        About
                    </Link>
                    <LeadFormModal>
                        <Button variant="primary" size="sm">
                            Work with us
                        </Button>
                    </LeadFormModal>
                </div>

                {/* Mobile Menu Placeholder - for simplicity in this iteration */}
                <div className="md:hidden">
                    <LeadFormModal>
                        <Button variant="primary" size="sm">
                            Work with us
                        </Button>
                    </LeadFormModal>
                </div>
            </div>
        </nav>
    );
}
