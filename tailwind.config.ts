import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                pulseSoft: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.00003)' },
                },
                sweep: {
                    '0%': { left: '-100%' },
                    '50%': { left: '62.397%' },
                    '100%': { left: '120%' },
                },
                spinOnce: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'pulse-soft': 'pulseSoft 2s cubic-bezier(.4,0,.6,1) infinite',
                sweep: 'sweep 2.5s ease-in-out infinite',
                'spin-once': 'spinOnce 2s ease-out forwards',
            },
            backgroundImage: {
                'light-sweep':
                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent)',
            },
        },
    },
    plugins: [],
};

export default config;