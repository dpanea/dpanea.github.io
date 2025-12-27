'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Daniel brings a level of engineering rigor we rarely see in freelancers. He didn't just build a model; he architected a secure system that passed our strict compliance audits.",
        name: 'Thomas Müller',
        role: 'CTO',
        company: 'Enterprise Client',
        image: null, // Placeholder - will need real image
    },
    {
        quote: "Working with Daniel is like having a partner, not a vendor. His scientific approach to AI gave us the confidence to deploy to production without hesitation.",
        name: 'Sarah Schmidt',
        role: 'Founder',
        company: 'Tech Startup',
        image: null,
    },
    {
        quote: "The transition from cloud APIs to our own infrastructure seemed impossible until Daniel showed us the path. Now we have complete control over our AI capabilities.",
        name: 'Michael Weber',
        role: 'Innovation Manager',
        company: 'German SME',
        image: null,
    },
];

export function Testimonials() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Section background="secondary">
            <SectionHeader
                title="Trusted by Leaders"
                subtitle="What clients say about working with me."
            />

            <motion.div
                ref={ref}
                className={styles.grid}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                    >
                        <Card variant="glass" className={styles.card}>
                            <CardContent>
                                <div className={styles.quoteIcon}>&ldquo;</div>
                                <blockquote className={styles.quote}>
                                    {testimonial.quote}
                                </blockquote>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.name}>{testimonial.name}</span>
                                        <span className={styles.role}>
                                            {testimonial.role}, {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
