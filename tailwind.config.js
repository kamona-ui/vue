import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import twPlugin from './src/tw-plugin'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        forms,
        twPlugin,
    ],
}
