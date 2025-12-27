'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'glass' | 'elevated' | 'outline';
    hover?: boolean;
    className?: string;
    onClick?: () => void;
}

export function Card({
    children,
    variant = 'default',
    hover = true,
    className = '',
    onClick,
}: CardProps) {
    const classes = [
        styles.card,
        styles[variant],
        hover ? styles.hoverable : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <motion.div
            className={classes}
            onClick={onClick}
            whileHover={hover ? { y: -4, scale: 1.01 } : {}}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return <div className={`${styles.header} ${className}`}>{children}</div>;
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={`${styles.content} ${className}`}>{children}</div>;
}

interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
    return <div className={`${styles.footer} ${className}`}>{children}</div>;
}
