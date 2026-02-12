import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 py-12 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-serif font-bold text-neutral-900 block mb-4">
                            Bannerman
                        </span>
                        <p className="text-neutral-600 max-w-sm">
                            Full-service newsletter studio for AI startups, operators, and brands.
                            We design, launch, grow, and monetize high-performing newsletter assets.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-neutral-900 mb-4">Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-neutral-600 hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-neutral-600 hover:text-primary">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-started" className="text-neutral-600 hover:text-primary">
                                    Work with us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-neutral-900 mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:hello@bannerman.club"
                                    className="text-neutral-600 hover:text-primary"
                                >
                                    hello@bannerman.club
                                </a>
                            </li>
                            <li className="text-neutral-500 text-sm">
                                Typically responds within 1–2 business days.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Bannerman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
