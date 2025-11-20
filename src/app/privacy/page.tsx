export default function PrivacyPage() {
    return (
        <div className="container-custom py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-lg prose-neutral">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.
                        This may include your name, email address, and phone number.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to send you newsletters if you have subscribed.
                    </p>

                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell your personal information. We may share your information with third-party service providers who help us operate our business,
                        subject to confidentiality agreements.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal information. You may also unsubscribe from our marketing communications at any time.
                    </p>

                    <p className="mt-8 text-sm text-neutral-500">
                        For any questions regarding this privacy policy, please contact us at privacy@bannerman.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
