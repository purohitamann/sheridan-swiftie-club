'use client';
import React from 'react';

import './ThemeWrapper.css';
import { useGoogleAnalytics } from '../../lib/gtag';

export default function ThemeWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    useGoogleAnalytics('G-KH9G0Z027R');
    return (
        <div className="theme-wrapper">
            {children}
        </div>
    );
}


