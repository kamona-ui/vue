import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: {
                    light: 'var(--color-primary-light)',
                    DEFAULT: 'var(--color-primary)',
                    dark:'var(--color-primary-dark)',
                },

                dark: {
                    'eval-0': '#151823',
                    'eval-1': '#222738',
                    'eval-2': '#2A2F42',
                    'eval-3': '#2C3142',
                },
            },

            keyframes: {
                rotate: {
                    '100%': { transform: 'rotate(1turn)' },
                }
            },

            animation: { 
                rotate: 'rotate 4s infinite linear',
                'rotate-reverse': 'rotate 4s infinite linear reverse',
            },
        },
    },
    plugins: [forms],
}
