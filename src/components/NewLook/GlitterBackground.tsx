'use client';
import React, { useEffect } from 'react';

const GlitterBackground: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.glitter-container');
    if (!container) return;

    const particleCount = 150; // Number of glitter particles
    const colors = ['#FFA500', '#FFD700', '#FFC04C', '#FFBF00', '#FF8C00'];

    for (let i = 0; i < particleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      const size = Math.random() * 4 + 1; // Random size between 1px and 5px
      const x = Math.random() * 100; // Random horizontal position (in %)
      const y = Math.random() * 100; // Random vertical position (in %)
      const delay = Math.random() * 4; // Random animation delay up to 4 seconds
      const duration = Math.random() * 3 + 2; // Random duration between 2-5 seconds
      const color = colors[Math.floor(Math.random() * colors.length)];

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${x}%`;
      sparkle.style.top = `${y}%`;
      sparkle.style.animationDelay = `${delay}s`;
      sparkle.style.animationDuration = `${duration}s`;
      sparkle.style.backgroundColor = color;

      container.appendChild(sparkle);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="glitter-container fixed inset-0 pointer-events-none z-0 overflow-hidden"></div>
  );
};

export default GlitterBackground;