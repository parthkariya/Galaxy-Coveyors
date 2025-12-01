import React, { useEffect } from "react";
import "./TermsOfUsage.css";

const TermsOfUsage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="policy-container">
            <h1 className="policy-title">Terms of Usage (Terms of Use)</h1>

            <p><strong>Galaxy Conveyors Pvt. Ltd.</strong></p>
            <p>Phone: +91 90999 32799</p>
            <p>Email: galaxy@galaxyconveyors.com</p>
            <p><strong>Last Updated:</strong> 28th November 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using the website www.galaxyconveyors.com, you (“User”,
                “Visitor”, “Customer”) agree to comply with and be bound by these Terms of Usage.
                If you do not agree, please refrain from using the website.
            </p>

            <h2>2. Website Purpose</h2>
            <p>
                This website provides information about Galaxy Conveyors Pvt. Ltd., its products,
                capabilities, and contact details. All content is intended for business and
                informational purposes only.
            </p>

            <h2>3. User Responsibilities</h2>
            <ul>
                <li>Use the website for illegal or unauthorised purposes.</li>
                <li>Copy, duplicate, or distribute website content without permission.</li>
                <li>Attempt to hack, disrupt, or overload the website.</li>
                <li>Submit false or misleading information.</li>
                <li>Interfere with website security features.</li>
                <li>Use automated tools (bots/scrapers) without prior written consent.</li>
            </ul>
            <p>Any violation may lead to restricted access or legal action.</p>

            <h2>4. Intellectual Property</h2>
            <p>
                All website content—including images, product descriptions, technical data,
                text, logos, chain designs, documentation, graphics, and layout—is the
                exclusive property of Galaxy Conveyors Pvt. Ltd.
            </p>
            <ul>
                <li>Copy or reproduce content</li>
                <li>Use product images for commercial purposes</li>
                <li>Modify or republish any content</li>
                <li>Claim ownership of or redistribute content</li>
            </ul>
            <p>Unauthorised use may result in legal consequences under copyright and trademark laws.</p>

            <h2>5. Accuracy of Information</h2>
            <p>
                We strive to ensure all product details, specifications, and information are accurate.
                However:
            </p>
            <ul>
                <li>Some information may be approximate</li>
                <li>Product specifications may change without notice</li>
                <li>Technical details may vary based on customisation</li>
            </ul>
            <p>Galaxy Conveyors is not liable for errors, typographical mistakes, or outdated information.</p>

            <h2>6. Third-Party Links</h2>
            <p>
                Our website may contain links to external websites for reference or convenience.
                We do not endorse, control, or take responsibility for:
            </p>
            <ul>
                <li>Third-party website content</li>
                <li>Data collection practices of external sites</li>
                <li>Accuracy of linked information</li>
            </ul>

            <h2>7. User-Generated Inputs</h2>
            <p>
                When users contact us through forms, email, WhatsApp, or phone calls, they agree that:
            </p>
            <ul>
                <li>Information provided must be accurate</li>
                <li>We may use submitted information for communication and order processing</li>
                <li>Misuse or harassment through communication channels is prohibited</li>
            </ul>
            <p>We reserve the right to restrict communication if abuse or spam is detected.</p>

            <h2>8. Restrictions on Website Usage</h2>
            <ul>
                <li>Reverse engineering website code</li>
                <li>Using website content to create competing material</li>
                <li>Uploading malware, viruses, or harmful scripts</li>
                <li>Impersonating Galaxy Conveyors staff or representatives</li>
            </ul>
            <p>Any malicious attempt will be reported to the authorities.</p>

            <h2>9. No Warranties</h2>
            <p>
                The website and its content are provided on an “as-is” and “as-available” basis.
                Galaxy Conveyors makes no warranties regarding:
            </p>
            <ul>
                <li>Website uptime or uninterrupted service</li>
                <li>Error-free, accurate, or updated content</li>
                <li>Compatibility with all devices or browsers</li>
            </ul>

            <h2>10. Limitation of Liability</h2>
            <p>Galaxy Conveyors Pvt. Ltd. is not responsible for:</p>
            <ul>
                <li>Loss caused by website downtime</li>
                <li>Errors in content or product descriptions</li>
                <li>Damages from misuse of information</li>
                <li>Losses due to malware or unauthorised access</li>
                <li>Indirect, incidental, or consequential losses</li>
            </ul>

            <h2>11. Privacy</h2>
            <p>Your use of this website is governed by our Privacy Policy.</p>

            <h2>12. Changes to Terms</h2>
            <p>
                Galaxy Conveyors may update or modify these Terms of Usage at any time without notice.
                Continued use of the website signifies acceptance.
            </p>

            <h2>13. Contact Information</h2>
            <p><strong>Galaxy Conveyors Pvt. Ltd.</strong></p>
            <p>Phone: +91 90999 32799</p>
            <p>Email: galaxy@galaxyconveyors.com</p>
            <p>Website: www.galaxyconveyors.com</p>
        </div>
    );
};

export default TermsOfUsage;
