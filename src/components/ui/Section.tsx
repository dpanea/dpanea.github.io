'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Section.module.css';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'primary' | 'secondary' | 'gradient';
    containerSize?: 'default' | 'narrow' | 'text' | 'full';
    animate?: boolean;
}

export function Section({
    children,
    id,
    className = '',
    background = 'primary',
    containerSize = 'default',
    animate = true,
}: SectionProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const sectionClasses = [
        styles.section,
        styles[background],
        className,
    ].filter(Boolean).join(' ');

    const containerClasses = [
        styles.container,
        containerSize !== 'full' ? styles[containerSize] : '',
    ].filter(Boolean).join(' ');

    const variants = {
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
        <section id={id} className={sectionClasses} ref={ref}>
            <motion.div
                className={containerClasses}
                initial={animate ? 'hidden' : 'visible'}
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
            >
                {children}
            </motion.div>
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = 'center',
    className = '',
}: SectionHeaderProps) {
    return (
        <div className={`${styles.header} ${styles[`align-${align}`]} ${className}`}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}
