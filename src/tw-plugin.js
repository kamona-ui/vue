const plugin = require('tailwindcss/plugin')

const opts = {
    colorVars: {
        '--color-primary-light': 'var(--color-purple-light)',
        '--color-primary': 'var(--color-purple)',
        '--color-primary-dark': 'var(--color-purple-dark)',

        '--color-dark-eval-0': '#151823',
        '--color-dark-eval-1': '#222738',
        '--color-dark-eval-2': '#2A2F42',
        '--color-dark-eval-3': '#2C3142',

        '--color-purple-light': '#c084fc',
        '--color-purple': '#a855f7',
        '--color-purple-dark': '#9333ea',

        '--color-fuchsia-light': '#d946ef',
        '--color-fuchsia': '#c026d3',
        '--color-fuchsia-dark': '#a21caf',

        '--color-violet-light': '#8b5cf6',
        '--color-violet': '#7c3aed',
        '--color-violet-dark': '#6d28d9',

        '--color-teal-light': '#14b8a6',
        '--color-teal': '#0d9488',
        '--color-teal-dark': '#0f766e',

        '--color-lime-light': '#a3e635',
        '--color-lime': '#84cc16',
        '--color-lime-dark': '#65a30d',
    },
    primaryColors: {
        light: 'var(--color-primary-light)',
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-primary-dark)',
    },
    darkColors: {
        'eval-0': 'var(--color-dark-eval-0)',
        'eval-1': 'var(--color-dark-eval-1)',
        'eval-2': 'var(--color-dark-eval-2)',
        'eval-3': 'var(--color-dark-eval-3)',
    }
}

module.exports = plugin.withOptions(
    function (options = {}) {
        const {
            colorVars = opts.colorVars,
        } = options

        return function({ addBase }) {
            addBase({
                [[':root']]: colorVars
            })
        }
    }, 

    function(options = {}) {
        const { 
            primaryColors = opts.primaryColors,
            darkColors = opts.darkColors,
         } = options

        return {
            theme: {
                extend: {
                    colors: {
                        primary: primaryColors,

                        dark: darkColors,
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
                }
            }
        }
    }
)