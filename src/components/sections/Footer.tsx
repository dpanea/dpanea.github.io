'use client';

import { Button } from '../ui/Button';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* CTA Section */}
                <div className={styles.cta}>
                    <h2 className={styles.ctaTitle}>
                        Let&apos;s build an AI strategy that secures your future,
                        <span className={styles.gradient}> rather than renting it.</span>
                    </h2>
                    <div className={styles.ctaActions}>
                        <Button
                            variant="primary"
                            size="lg"
                            href="https://calendly.com/daniel-panea/discovery-call"
                            icon={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            }
                            iconPosition="left"
                        >
                            Book a Free Discovery Call
                        </Button>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Footer Content */}
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoText}>Daniel Panea</span>
                            <span className={styles.logoSubtext}>AI Architect</span>
                        </div>
                        <p className={styles.tagline}>
                            Sovereign AI Engineering for European Enterprises
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Connect</h4>
                            <a href="https://www.linkedin.com/in/daniel-panea-lichtig" className={styles.link} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href="mailto:me@danielpanea.com" className={styles.link}>
                                Email
                            </a>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Legal</h4>
                            <a href="/impressum" className={styles.link}>
                                Impressum
                            </a>
                            <a href="/privacy" className={styles.link}>
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={styles.copyright}>
                    <p>© {currentYear} Daniel Panea. All rights reserved.</p>
                    <p className={styles.location}>Based in the Canary Islands, EU 🇪🇺</p>
                </div>
            </div>
        </footer>
    );
}
