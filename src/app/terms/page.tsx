export default function TermsPage() {
    return (
        <div className="container-custom py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-neutral-900 mb-8">Terms and Conditions</h1>
                <div className="prose prose-lg prose-neutral">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Bannerman. These Terms and Conditions govern your use of our website and services.
                        By accessing or using our service, you agree to be bound by these terms.
                    </p>

                    <h2>2. Services</h2>
                    <p>
                        Bannerman provides relationship counselling information and connects users with professional therapists.
                        We do not provide medical advice. If you are in immediate danger, please contact your local emergency services.
                    </p>

                    <h2>3. User Responsibilities</h2>
                    <p>
                        You agree to provide accurate information when using our services. You are responsible for maintaining the confidentiality of your account information.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        The content on this website, including text, graphics, and logos, is the property of Bannerman and is protected by copyright laws.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                        Bannerman shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
                    </p>

                    <h2>6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any significant changes.
                    </p>

                    <p className="mt-8 text-sm text-neutral-500">
                        For any questions regarding these terms, please contact us at legal@bannerman.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
