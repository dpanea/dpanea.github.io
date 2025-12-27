'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionHeader } from '../ui/Section';
import styles from './Process.module.css';

const steps = [
    {
        number: '01',
        title: 'Strategic Audit',
        description: 'Identifying where AI delivers genuine ROI and filtering out low-value use cases. Not every problem needs AI—I help you find the ones that do.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6" />
                <path d="M8 11h6" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Scientific Prototyping',
        description: 'Building rapid, testable proofs-of-concept using open-source SOTA models. Hypothesis-driven development with measurable outcomes.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6v2.5a3 3 0 0 1-3 3 3 3 0 0 1-3-3V3z" />
                <path d="M9 5.5 6 21h12l-3-15.5" />
                <path d="M15 14H9" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Production Engineering',
        description: 'Deploying robust pipelines integrated seamlessly into legacy workflows. Production-ready systems with monitoring, logging, and failsafes.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
];

export function Process() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Section id="process" background="secondary">
            <SectionHeader
                title="A Holistic, Scientific Approach"
                subtitle="From strategy to production, every step is grounded in the scientific method."
            />

            <motion.div
                ref={ref}
                className={styles.timeline}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {/* Connector line */}
                <motion.div
                    className={styles.connector}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        className={styles.step}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                    >
                        <div className={styles.stepNumber}>
                            <div className={styles.numberCircle}>
                                <span className={styles.icon}>{step.icon}</span>
                            </div>
                            <span className={styles.number}>{step.number}</span>
                        </div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDescription}>{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
