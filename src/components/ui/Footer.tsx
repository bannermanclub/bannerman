import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 py-12 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-serif font-bold text-neutral-900 block mb-4">Bannerman</span>
                        <p className="text-neutral-600 max-w-sm">
                            Restoring relationships through empathetic guidance and expert advice.
                            Because every marriage deserves a second chance.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-neutral-900 mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-neutral-600 hover:text-primary">Home</Link></li>
                            <li><Link href="/blog" className="text-neutral-600 hover:text-primary">Blog</Link></li>
                            <li><Link href="/get-started" className="text-neutral-600 hover:text-primary">Get Advice</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-neutral-900 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-neutral-600 hover:text-primary">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="text-neutral-600 hover:text-primary">Privacy Policy</Link></li>
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
