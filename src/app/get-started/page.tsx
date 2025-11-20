import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle } from "lucide-react";

export default function GetStartedPage() {
    return (
        <div className="container-custom py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-neutral-900 mb-4">Start Your Journey Today</h1>
                    <p className="text-xl text-neutral-600">
                        Take the first step towards a stronger, healthier relationship.
                        Fill out the form below to schedule a callback with one of our relationship experts.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="First Name" placeholder="Jane" />
                                <Input label="Last Name" placeholder="Doe" />
                            </div>

                            <Input label="Email Address" type="email" placeholder="jane@example.com" />
                            <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">
                                    What would you like to discuss?
                                </label>
                                <select className="block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white">
                                    <option>Marriage Counselling</option>
                                    <option>Pre-marital Guidance</option>
                                    <option>Communication Issues</option>
                                    <option>Infidelity Recovery</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <Textarea
                                label="Tell us a bit about your situation (Optional)"
                                placeholder="We've been married for 5 years and..."
                            />

                            <div className="pt-4">
                                <Button size="lg" className="w-full">
                                    Request Callback
                                </Button>
                            </div>

                            <p className="text-xs text-neutral-500 text-center mt-4">
                                By submitting this form, you agree to our Terms of Service and Privacy Policy.
                                Your information is kept strictly confidential.
                            </p>
                        </form>
                    </div>

                    <div className="bg-neutral-50 p-6 border-t border-neutral-200">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>Free Initial Consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>Certified Therapists</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span>100% Confidential</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
