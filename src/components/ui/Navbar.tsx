import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { LeadFormModal } from "./LeadFormModal";

const FLAGBEARER_COLOR = "#BC4F12";

export function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
            <div className="container-custom flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo-white.svg"
                        alt=""
                        width={80}
                        height={80}
                        className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0"
                    />
                    <span
                        className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] font-normal tracking-tight"
                        style={{
                            color: FLAGBEARER_COLOR,
                            WebkitTextStroke: "1px currentColor",
                            paintOrder: "stroke fill",
                        }}
                    >
                        Flagbearer
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="sr-only">
                        Home
                    </Link>
                    <Link href="/#services" className="sr-only">
                        Services
                    </Link>
                    <Link href="/why-do-brands-need-a-newsletter" className="text-neutral-600 hover:text-primary font-medium">
                        Newsletter? Why!
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
                <div className="md:hidden flex items-center gap-2">
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
