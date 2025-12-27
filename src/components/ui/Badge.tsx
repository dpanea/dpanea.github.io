import { ReactNode } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'accent' | 'success' | 'warning';
    size?: 'sm' | 'md';
    icon?: ReactNode;
    className?: string;
}

export function Badge({
    children,
    variant = 'default',
    size = 'md',
    icon,
    className = '',
}: BadgeProps) {
    const classes = [
        styles.badge,
        styles[variant],
        styles[size],
        className,
    ].filter(Boolean).join(' ');

    return (
        <span className={classes}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{children}</span>
        </span>
    );
}
