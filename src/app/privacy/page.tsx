import { Metadata } from 'next';
import styles from '../impressum/page.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy | Daniel Panea',
    description: 'Privacy policy for Daniel Panea AI Engineering services.',
};

export default function Privacy() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <a href="/" className={styles.backLink}>← Back to Home</a>

                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.subtitle}>Last updated: December 2024</p>

                <section className={styles.section}>
                    <h2>1. Overview</h2>
                    <p>
                        The protection of your personal data is important to me. This privacy policy
                        explains how I collect, use, and protect your information when you visit my
                        website or use my services.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Data Controller</h2>
                    <p>
                        <strong>Daniel Panea</strong><br />
                        AI Engineering & Consulting<br />
                        Canary Islands, Spain<br />
                        Email: hello@danielpanea.com
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. Data Collection</h2>
                    <h3>3.1 Server Logs</h3>
                    <p>
                        When you visit this website, my hosting provider automatically collects
                        certain information including your IP address, browser type, referring URL,
                        and timestamp. This data is used for security and performance purposes only
                        and is not linked to any personally identifiable information.
                    </p>

                    <h3>3.2 Contact Forms</h3>
                    <p>
                        If you contact me through the website or download resources, I collect the
                        information you provide (such as your email address and name). This
                        information is used solely to respond to your inquiry or deliver the
                        requested content.
                    </p>

                    <h3>3.3 Cookies</h3>
                    <p>
                        This website uses essential cookies that are necessary for the website to
                        function properly. No tracking or advertising cookies are used.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Legal Basis for Processing</h2>
                    <p>
                        I process your personal data based on the following legal grounds:
                    </p>
                    <ul>
                        <li>Your consent (Art. 6(1)(a) GDPR)</li>
                        <li>Performance of a contract (Art. 6(1)(b) GDPR)</li>
                        <li>Legitimate interests (Art. 6(1)(f) GDPR)</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>5. Data Retention</h2>
                    <p>
                        I retain your personal data only for as long as necessary to fulfill the
                        purposes for which it was collected, or as required by law. Contact form
                        submissions are typically retained for 3 years unless you request earlier
                        deletion.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Your Rights</h2>
                    <p>Under the GDPR, you have the following rights:</p>
                    <ul>
                        <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                        <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                        <li><strong>Right to erasure:</strong> Request deletion of your data</li>
                        <li><strong>Right to restriction:</strong> Request limited processing of your data</li>
                        <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                        <li><strong>Right to object:</strong> Object to processing of your data</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact me at hello@danielpanea.com.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>7. Third-Party Services</h2>
                    <p>
                        This website may use the following third-party services:
                    </p>
                    <ul>
                        <li><strong>Vercel:</strong> Website hosting (servers in EU)</li>
                        <li><strong>Calendly:</strong> Appointment scheduling (if used)</li>
                    </ul>
                    <p>
                        I carefully select service providers that comply with GDPR requirements
                        and prioritize data protection.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>8. Data Security</h2>
                    <p>
                        I implement appropriate technical and organizational measures to protect
                        your personal data against unauthorized access, alteration, disclosure,
                        or destruction. This includes using HTTPS encryption for all data
                        transmission.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>9. Changes to This Policy</h2>
                    <p>
                        I may update this privacy policy from time to time. Any changes will be
                        posted on this page with an updated revision date.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>10. Contact</h2>
                    <p>
                        If you have any questions about this privacy policy or your personal data,
                        please contact me at hello@danielpanea.com.
                    </p>
                </section>
            </div>
        </main>
    );
}
