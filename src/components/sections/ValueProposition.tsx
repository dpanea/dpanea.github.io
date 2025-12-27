'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import styles from './ValueProposition.module.css';

const values = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: 'Ownership & Sovereignty',
        description: 'You own the model, the weights, and the data. No indefinite cloud subscriptions. No vendor lock-in. Your AI infrastructure belongs to you.',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: 'Regulatory Compliance',
        description: 'Your data never leaves your infrastructure. Designed for GDPR & EU AI Act compliance by default. Built for European enterprises.',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
                <path d="M16.24 7.76l-1.42 1.42" />
                <path d="M18 12h-2" />
            </svg>
        ),
        title: 'Scientific Predictability',
        description: 'I don\'t "guess" with AI. I engineer systems that are deterministic, measurable, and robust. My physics background demands mathematical rigor.',
    },
];

export function ValueProposition() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <Section id="value" background="gradient">
            <SectionHeader
                title="Data Sovereignty as a Competitive Advantage"
                subtitle="You need the efficiency of LLMs to stay competitive, but you cannot risk sending trade secrets to black-box APIs. Here's how I solve this dilemma."
            />

            <motion.div
                ref={ref}
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {values.map((value) => (
                    <motion.div key={value.title} variants={itemVariants}>
                        <Card variant="glass" className={styles.card}>
                            <CardContent>
                                <div className={styles.iconWrapper}>
                                    <div className={styles.icon}>{value.icon}</div>
                                </div>
                                <h3 className={styles.cardTitle}>{value.title}</h3>
                                <p className={styles.cardDescription}>{value.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
