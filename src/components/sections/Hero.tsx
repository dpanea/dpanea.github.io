'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background with overlay */}
            <div className={styles.background}>
                <div className={styles.overlay} />
                <div className={styles.gradient} />
            </div>

            {/* Content */}
            <div className={styles.content}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.p
                        className={styles.eyebrow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Sovereign AI Engineering
                    </motion.p>

                    <h1 className={styles.headline}>
                        Building AI that you{' '}
                        <span className={styles.highlight}>actually own.</span>
                        <br />
                        <span className={styles.secondLine}>Secure. Scientific. Sovereign.</span>
                    </h1>

                    <p className={styles.subheadline}>
                        We have entered the era of &quot;Post-Hype&quot; AI. I help European enterprises
                        migrate from black-box APIs to deterministic, private AI systems that you
                        control completely.
                    </p>

                    <div className={styles.ctas}>
                        <Button
                            variant="primary"
                            size="lg"
                            href="#work"
                            icon={
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            }
                        >
                            View Selected Work
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            href="https://calendly.com"
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
                            Book Free Discovery Call
                        </Button>
                    </div>

                    <motion.a
                        href="#lead"
                        className={styles.tertiaryLink}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Or download the Risk Report →
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <span className={styles.scrollText}>Scroll to explore</span>
                    <div className={styles.scrollLine}>
                        <motion.div
                            className={styles.scrollDot}
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
