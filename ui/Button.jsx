'use client'

import styles from '@/public/css/ui/Button.module.css';

export default function Button({ text, href, onClick, className }) {
    return (
        <a
            className={` ${className || ''} ${styles.button}`}
            href={href}
            onClick={onClick}
        >
            {text}
        </a>
    );
}

