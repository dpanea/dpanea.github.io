'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { VideoLightbox } from '../ui/VideoLightbox';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        tag: 'Conference Project',
        title: 'The Future of AI',
        subtitle: 'Spanish National AI Conference Keynote',
        challenge: 'Deliver a compelling, technically rigorous presentation on sovereign AI that resonates with both technical and business audiences.',
        solution: 'Developed a comprehensive framework demonstrating the practical transition from API-dependent solutions to self-hosted infrastructure.',
        impact: [
            'Standing ovation from 500+ attendees',
            'Multiple enterprise consultation requests',
            'Framework now used as reference architecture',
        ],
        hasVideo: true,
    },
    {
        tag: 'Enterprise Partnership',
        title: 'DigitFlow Collaboration',
        subtitle: 'Technical Lead & AI Architecture',
        challenge: 'Scale AI-powered document processing while maintaining strict German data privacy compliance.',
        solution: 'Architected a fully on-premise solution using fine-tuned open-source models, eliminating external API dependencies.',
        impact: [
            '100% data sovereignty achieved',
            '60% cost reduction vs. cloud APIs',
            'Passed BSI security audit',
        ],
        hasVideo: false,
    },
];

export function CaseStudies() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Section id="work" background="primary">
            <SectionHeader
                title="Selected Work"
                subtitle="Real results for enterprises demanding excellence."
            />

            <motion.div
                ref={ref}
                className={styles.grid}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={study.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    >
                        <Card variant="glass" className={styles.card}>
                            <CardContent>
                                <Badge variant="accent" size="sm">{study.tag}</Badge>
                                <h3 className={styles.title}>{study.title}</h3>
                                <p className={styles.subtitle}>{study.subtitle}</p>

                                <div className={styles.section}>
                                    <span className={styles.label}>Challenge</span>
                                    <p className={styles.text}>{study.challenge}</p>
                                </div>

                                <div className={styles.section}>
                                    <span className={styles.label}>Solution</span>
                                    <p className={styles.text}>{study.solution}</p>
                                </div>

                                <div className={styles.section}>
                                    <span className={styles.label}>Impact</span>
                                    <ul className={styles.impactList}>
                                        {study.impact.map((item) => (
                                            <li key={item} className={styles.impactItem}>
                                                <span className={styles.checkmark}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {study.hasVideo && (
                                    <div className={styles.videoSection}>
                                        <div
                                            className={styles.videoThumbnail}
                                            onClick={() => setIsVideoOpen(true)}
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Play Keynote Video"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    setIsVideoOpen(true);
                                                }
                                            }}
                                        >
                                            <div className={styles.thumbnailImage} />
                                            <div className={styles.videoOverlay}>
                                                <div className={styles.playButton}>
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                                <span className={styles.watchText}>Watch Keynote</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* Video Lightbox */}
            <VideoLightbox
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="/videos/keynote.mp4"
                title="The Future of AI — Conference Keynote"
            />
        </Section>
    );
}
