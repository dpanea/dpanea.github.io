'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import styles from './Navigation.module.css';

const navLinks = [
    { label: 'Services', href: '#value' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <nav className={styles.nav}>
                <a href="/" className={styles.logo}>
                    <img src="/images/logo.svg" alt="Daniel Panea" className={styles.logoImage} />
                </a>

                {/* Desktop Navigation */}
                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={styles.navLink}
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Button
                        variant="primary"
                        size="sm"
                        href="https://calendly.com"
                    >
                        Book a Call
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.open : ''}`} />
                        <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.open : ''}`} />
                        <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.open : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
