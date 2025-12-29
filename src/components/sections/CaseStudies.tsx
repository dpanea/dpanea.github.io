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
        tag: 'Conference Keynote',
        title: 'The Future of AI',
        subtitle: 'Spanish National AI Conference',
        challenge: 'Deliver a compelling, technically rigorous presentation on sovereign AI that resonates with both technical and business audiences.',
        solution: 'Developed a comprehensive framework demonstrating the practical transition from API-dependent solutions to self-hosted infrastructure.',
        impact: [
            'Standing ovation from 500+ attendees',
            'Multiple enterprise consultation requests',
            'Framework now used as reference architecture',
        ],
        image: '/images/keynote-thumbnail.jpg',
        hasVideo: true,
    },
    {
        tag: 'Public Sector & Enterprise',
        title: 'IT Service Management',
        subtitle: (
            <span>
                In collaboration with{' '}
                <a href="https://digitflow-verenburg.de/" target="_blank" rel="noopener noreferrer" className="hover:underline text-accent-primary">
                    Digitflow
                </a>
                . Now available as a product package.
            </span>
        ) as any,
        challenge: 'Transform a chaotic backlog of mixed-media support tickets into actionable strategy while strictly adhering to data sovereignty requirements (no cloud).',
        solution: 'Built a secure, local open-source pipeline using OCR and LLMs (Gemma) to digest attachments and cluster issues for automated root-cause discovery.',
        impact: [
            '100% Data Sovereignty (On-prem)',
            'Deep root-cause visibility',
            'Enabled "Shift-Left" automation',
        ],
        image: '/images/itsm_dashboard_horizontal.jpg',
        hasVideo: false,
    },
    {
        tag: 'Education Tech',
        title: (
            <a href="https://markmywords.au/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-accent-primary decoration-2 underline-offset-4">
                Mark My Words
            </a>
        ) as any,
        subtitle: 'Real-time Student Feedback',
        challenge: 'Provide scalable, personalized feedback on student writing without overworking educators.',
        solution: 'Integrated RAG models and fine-tuned LLMs with asynchronous backend pipelines to deliver instant insights.',
        impact: [
            'Real-time personalized insights',
            'Scalable async backend',
            'Context-rich automation',
        ],
        image: '/images/eduaction_horizontal.jpg',
        hasVideo: false,
    },
    {
        tag: 'Privacy Tech',
        title: 'Synthetic Data Engine',
        subtitle: 'Privacy-First Model Validation',
        challenge: 'Validate AI models without exposing sensitive user data, ensuring full GDPR compliance.',
        solution: 'Built a privacy-first engine combining LLMs, probabilistic modeling, and rule-based simulation.',
        impact: [
            'Zero sensitive data exposure',
            'Realistic user emulation',
            'Full GDPR compliance',
        ],
        image: '/images/synthetic_data_horizontal.jpg',
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

                                {(study.hasVideo || study.image) && (
                                    <div className={styles.videoSection}>
                                        <div
                                            className={styles.videoThumbnail}
                                            onClick={() => study.hasVideo && setIsVideoOpen(true)}
                                            style={{ cursor: study.hasVideo ? 'pointer' : 'default' }}
                                            role={study.hasVideo ? "button" : undefined}
                                            tabIndex={study.hasVideo ? 0 : undefined}
                                            aria-label={study.hasVideo ? "Play Keynote Video" : undefined}
                                            onKeyDown={(e) => {
                                                if (study.hasVideo && (e.key === 'Enter' || e.key === ' ')) {
                                                    setIsVideoOpen(true);
                                                }
                                            }}
                                        >
                                            <div
                                                className={styles.thumbnailImage}
                                                style={{ backgroundImage: `url(${study.image})` }}
                                            />
                                            {study.hasVideo && (
                                                <div className={styles.videoOverlay}>
                                                    <div className={styles.playButton}>
                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                    <span className={styles.watchText}>Watch Keynote</span>
                                                </div>
                                            )}
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
                title="The Future of AI - Conference Keynote"
            />
        </Section>
    );
}
