import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Impressum | Daniel Panea',
    description: 'Legal information and imprint for Daniel Panea AI Engineering services.',
};

export default function Impressum() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <a href="/" className={styles.backLink}>← Back to Home</a>

                <h1 className={styles.title}>Impressum</h1>
                <p className={styles.subtitle}>Legal Notice (Gesetzliche Anbieterkennung)</p>

                <section className={styles.section}>
                    <h2>Contact Information</h2>
                    <address className={styles.address}>
                        <strong>Daniel Panea</strong><br />
                        AI Engineering & Consulting<br />
                        <br />
                        {/* TODO: Add your actual address */}
                        Santa Cruz de Tenerife<br />
                        Canary Islands, Spain<br />
                        <br />
                        Email: <a href="mailto:me@danielpanea.com">me@danielpanea.com</a>
                    </address>
                </section>

                <section className={styles.section}>
                    <h2>Business Information</h2>
                    <p>
                        {/* TODO: Add your actual business registration details */}
                        <strong>Tax ID (NIF):</strong> 77751987G<br />
                        {/*<strong>VAT ID:</strong> [Your VAT Number if applicable]*/}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Professional Liability Insurance</h2>
                    <p>
                        Professional indemnity and cyber risk insurance provided by Orus.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Dispute Resolution</h2>
                    <p>
                        The European Commission provides a platform for online dispute resolution (ODR):
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                            https://ec.europa.eu/consumers/odr
                        </a>
                    </p>
                    <p>
                        We are not willing or obliged to participate in dispute resolution proceedings
                        before a consumer arbitration board.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Liability for Content</h2>
                    <p>
                        As a service provider, we are responsible for our own content on these pages
                        according to general laws. However, we are not obligated to monitor transmitted
                        or stored third-party information or to investigate circumstances that indicate
                        illegal activity.
                    </p>
                    <p>
                        Obligations to remove or block the use of information according to general laws
                        remain unaffected. However, liability in this regard is only possible from the
                        time of knowledge of a specific legal violation. Upon becoming aware of such
                        violations, we will remove this content immediately.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Liability for Links</h2>
                    <p>
                        Our website contains links to external third-party websites over whose content
                        we have no influence. Therefore, we cannot accept any liability for this
                        third-party content. The respective provider or operator of the pages is always
                        responsible for the content of the linked pages. The linked pages were checked
                        for possible legal violations at the time of linking. Illegal content was not
                        recognizable at the time of linking.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Copyright</h2>
                    <p>
                        The content and works on these pages created by the site operator are subject
                        to copyright law. Duplication, processing, distribution, and any kind of
                        exploitation outside the limits of copyright require the written consent of
                        the respective author or creator.
                    </p>
                </section>
            </div>
        </main>
    );
}
