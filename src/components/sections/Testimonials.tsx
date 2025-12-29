'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Daniel is helping us as a freelancer to build AI and machine learning solutions for our clients. He is delivering exceptionally good work. He is very intelligent and knows what he is talking about.",
        name: 'Armin Pfauser',
        role: 'CEO & Founder',
        company: 'DigitFlow GmbH',
        image: '/images/armin.jpeg',
    },
    {
        quote: "Daniel is a brilliant freelancer. Hardworking, smart, creative and personable. I could not recommend him more.",
        name: 'James Smith',
        role: 'Founder',
        company: 'Mark My Words',
        image: '/images/james.jpeg',
    },
    {
        quote: "Professional, smart and friendly. Daniel delivers outstanding work, and has a solid grasp of technical domains. We value his work, and hope to continue engaging with him in future.",
        name: 'Chris Cooper',
        role: 'Founder',
        company: 'NeoMatrix',
        image: '/images/chris.jpeg',
    },
    {
        quote: "It has been a privilege to have Daniel on our team. From day one, he proved himself an exceptional professional, excelling in every task and constantly improving our projects.",
        name: 'Juan Trujillo Sevilla',
        role: 'Chief Optical Engineer',
        company: 'Wooptix',
        image: '/images/juan.jpeg',
    },
    {
        quote: "I was consistently impressed by his dedication, professionalism, and ability to quickly develop effective solutions to complex problems. A highly skilled professional and valuable team player.",
        name: 'Kiril Ivanov Kurtev',
        role: 'Tech Lead',
        company: 'Wooptix',
        image: '/images/kiril.jpeg',
    }
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
                subtitle="What past clients say about my work."
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
                            <CardContent className={styles.cardContent}>
                                <div className={styles.quoteIcon}>&ldquo;</div>
                                <blockquote className={styles.quote}>
                                    {testimonial.quote}
                                </blockquote>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {testimonial.image ? (
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        ) : (
                                            testimonial.name.split(' ').map(n => n[0]).join('')
                                        )}
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
