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
                dark: {
                    'eval-0': '#151823',
                    'eval-1': '#222738',
                    'eval-2': '#2A2F42',
                    'eval-3': '#2C3142',
                },

                primary: {
                    DEFAULT: 'var(--color-primary)', // 500
                    light: 'var(--color-primary-light)', // 400
                    dark: 'var(--color-primary-dark)', // 600

                    50: colors.purple[50], // #faf5ff,
                    100: colors.purple[100], // #f3e8ff,
                    200: colors.purple[200], // #e9d5ff,
                    300: colors.purple[300], // #d8b4fe,
                    400: colors.purple[400], // #c084fc,
                    500: colors.purple[500], // #a855f7,
                    600: colors.purple[600], // #9333ea,
                    700: colors.purple[700], // #7e22ce,
                    800: colors.purple[800], // #6b21a8,
                    900: colors.purple[900], // #581c87,
                    950: colors.purple[950], // #3b0764,
                }
            },
        },
    },
    plugins: [forms],
}
