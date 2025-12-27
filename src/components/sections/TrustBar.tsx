'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '../ui/Badge';
import styles from './TrustBar.module.css';

const techStack = [
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Mistral AI', icon: '🌬️' },
    { name: 'Meta Llama', icon: '🦙' },
    { name: 'HuggingFace', icon: '🤗' },
];

export function TrustBar() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <section className={styles.trustBar} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Credentials */}
                    <div className={styles.credentials}>
                        <Badge variant="accent" icon="🎓">PhD Theoretical Physics</Badge>
                        <Badge variant="success" icon="🛡️">Insured via Orus</Badge>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider} />

                    {/* Tech Stack */}
                    <div className={styles.techStack}>
                        <span className={styles.label}>Tech Stack:</span>
                        <div className={styles.techList}>
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech.name}
                                    className={styles.tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <span className={styles.techIcon}>{tech.icon}</span>
                                    <span className={styles.techName}>{tech.name}</span>
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider} />

                    {/* Partner */}
                    <div className={styles.partner}>
                        <span className={styles.label}>Strategic Partner:</span>
                        <span className={styles.partnerName}>DigitFlow</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
