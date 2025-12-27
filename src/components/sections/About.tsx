'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import styles from './About.module.css';

export function About() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Section id="about" background="primary">
            <motion.div
                ref={ref}
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.header}>
                    <span className={styles.eyebrow}>About</span>
                    <h2 className={styles.title}>The Physicist in the Room</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.main}>
                        <p className={styles.lead}>
                            I am not just a developer; I am a <strong>Physicist and AI Architect</strong>.
                        </p>
                        <p className={styles.text}>
                            I apply the rigorous Scientific Method to business automation. My background
                            in Theoretical Physics (PhD) trained me to model complex systems and demand
                            mathematical predictability in everything I build.
                        </p>
                        <p className={styles.text}>
                            In 2025, businesses no longer need convincing that AI is powerful—they need
                            assurance that it is <em>safe</em>. I bridge the gap between &quot;wrapper&quot;
                            solutions and true, sovereign AI assets.
                        </p>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Why Work With Me?</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <span className={styles.icon}>⚡</span>
                                    <span>Agility of a freelance expert</span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.icon}>🎯</span>
                                    <span>Strategic depth of a management consultant</span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.icon}>🇪🇺</span>
                                    <span>European legal compliance (Canary Islands base)</span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.icon}>🔬</span>
                                    <span>Scientific rigor from physics background</span>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.mission}>
                            <p>
                                My mission is to help you build an AI strategy that
                                <strong> secures your future</strong>, rather than renting it.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
