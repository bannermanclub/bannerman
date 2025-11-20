import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rebuild Your Connection.<br />
            Restore Your Love.
          </h1>
          <p className="text-lg sm:text-xl text-teal-50 max-w-2xl mx-auto mb-10">
            Professional guidance for couples seeking to strengthen their bond.
            Whether you&apos;re navigating a rough patch or looking to deepen your intimacy,
            Bannerman is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" variant="accent" className="w-full sm:w-auto">
                Get Expert Advice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-teal-800 border-teal-700 text-white hover:bg-teal-900">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">How Bannerman Helps</h2>
          <p className="text-lg text-neutral-600">
            We provide a safe, empathetic space for you to explore your relationship dynamics and find practical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-rose-600 mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Relationship Counselling</h3>
            <p className="text-neutral-600">
              One-on-one or couples sessions with certified therapists who specialize in marriage and partnership dynamics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Daily Advice Newsletter</h3>
            <p className="text-neutral-600">
              Practical tips, conversation starters, and relationship insights delivered straight to your inbox every morning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Safe & Confidential</h3>
            <p className="text-neutral-600">
              Your privacy is our priority. All sessions and communications are strictly confidential and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container-custom">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-900 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-rose-900 rounded-full opacity-50 blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Daily Newsletter</h2>
              <p className="text-neutral-300 text-lg mb-8">
                Get daily insights on how to improve your communication, intimacy, and trust.
                Join 10,000+ couples who are strengthening their bond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-md text-neutral-900 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button variant="primary" className="whitespace-nowrap">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-neutral-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for an illustration or image */}
              <div className="bg-neutral-800 rounded-xl h-64 w-full flex items-center justify-center border border-neutral-700">
                <span className="text-neutral-500 font-medium">Newsletter Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
