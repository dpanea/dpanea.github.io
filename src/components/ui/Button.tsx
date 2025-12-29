'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    fullWidth = false,
    icon,
    iconPosition = 'right',
    className = '',
    ...props
}: ButtonProps) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
            <span className={styles.text}>{children}</span>
            {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            {...(props as any)}
        >
            {content}
        </motion.button>
    );
}
