'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import styles from './LeadMagnet.module.css';

export function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <Section id="lead" background="gradient">
            <motion.div
                ref={ref}
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.content}>
                    {/* PDF Mockup */}
                    <div className={styles.mockup}>
                        <div className={styles.document}>
                            <div className={styles.documentHeader}>
                                <div className={styles.documentIcon}>📊</div>
                                <span className={styles.documentType}>PDF Guide</span>
                            </div>
                            <h4 className={styles.documentTitle}>
                                The Executive&apos;s Guide to AI Risk
                            </h4>
                            <p className={styles.documentSubtitle}>
                                Hidden dangers of black-box APIs
                            </p>
                            <div className={styles.documentPages}>
                                <span>15 pages</span>
                                <span>•</span>
                                <span>Free download</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className={styles.text}>
                        <span className={styles.eyebrow}>Free Resource</span>
                        <h2 className={styles.title}>
                            Is your company exposing trade secrets to ChatGPT?
                        </h2>
                        <p className={styles.description}>
                            Most companies don&apos;t realize that pasting sensitive data into public
                            LLMs voids their trade secret protections. I&apos;ve written a comprehensive
                            analysis on the <strong>Hidden Risks of Black-Box APIs</strong> and the
                            strategic advantages of Private AI.
                        </p>

                        {isSubmitted ? (
                            <div className={styles.successMessage}>
                                <span className={styles.successIcon}>✓</span>
                                <span>Check your email! The guide is on its way.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="email"
                                        placeholder="Enter your business email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={styles.input}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Download the PDF'}
                                </Button>
                            </form>
                        )}

                        <p className={styles.privacy}>
                            No spam. Unsubscribe anytime. By downloading, you agree to our privacy policy.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
