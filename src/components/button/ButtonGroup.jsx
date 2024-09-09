import { defineComponent, ref } from 'vue'
import { baseButtonProps } from './Button'

const baseClasses = [
    '*:inline-flex',
    '*:items-center',
    '*:transition',
    '*:font-semibold',
    '*:select-none',
    'disabled:*:opacity-50',
    'disabled:*:cursor-not-allowed',
    'focus:*:outline-none',
    'focus:*:z-10',
]

const focusClasses = [
    'focus:*:outline-none',
    'focus:*:ring-1',
    'focus:*:z-10',
    'focus:*:ring-offset-1',
    'dark:focus:*:dark:ring-offset-gray-800',
]

const borderClasses =
    'first:*:border-s first:*:border-e *:border-e *:border-t *:border-b'

const colorClasses = {
    primary: {
        default: 'focus:*:ring-primary-dark hover:*:bg-primary-light',
        filled: '*:bg-primary *:text-white *:border-primary-dark',
        outline: '*:border-primary *:text-primary hover:*:text-white',
    },
    success: {
        default: 'focus:*:ring-green-600 hover:*:bg-green-400',
        filled: '*:bg-green-500 *:text-white *:border-green-600',
        outline: '*:border-green-500 *:text-green-500 hover:*:text-white',
    },
    info: {
        default: 'focus:*:ring-cyan-600 hover:*:bg-cyan-400',
        filled: '*:bg-cyan-500 *:text-white *:border-cyan-600',
        outline: '*:border-cyan-500 *:text-cyan-500 hover:*:text-white',
    },
    warning: {
        default: 'focus:*:ring-yellow-600 hover:*:bg-yellow-400',
        filled: '*:bg-yellow-500 *:text-white *:border-yellow-600',
        outline: '*:border-yellow-500 *:text-yellow-500 hover:*:text-white',
    },
    danger: {
        default: 'focus:*:ring-red-600 hover:*:bg-red-400',
        filled: '*:bg-red-500 *:text-white *:border-red-600',
        outline: '*:border-red-500 *:text-red-500 hover:*:text-white',
    },
    white: {
        default: 'focus:*:ring-white',
        filled: '*:bg-white *:text-gray-800 hover:*:bg-gray-200',
        outline:
            '*:border-white *:text-white hover:*:bg-white hover:*:text-gray-800',
    },
    black: {
        default: 'focus:*:ring-black hover:*:bg-gray-800',
        filled: '*:bg-black *:text-gray-300 *:border-black',
        outline: '*:border-black *:text-black hover:*:text-white',
    },
    link: {
        default: 'focus:*:ring-red-600 hover:*:bg-red-400',
        filled: '*:bg-red-500 *:text-white *:border-red-600',
        outline: '*:border-red-500 *:text-red-500 hover:*:text-white',

        default:
            'focus:*:ring-blue-500 *:underline *:text-blue-600 hover:*:text-blue-500',
        filled: '*:border-blue-500',
        outline: '*:border-blue-500',
    },
}

const paddingClasses = {
    sm: {
        default: '*:px-2.5 *:py-1.5 *:text-sm',
        iconOnly: '*:p-1.5',
    },
    base: {
        default: '*:px-4 *:py-2 *:text-base',
        iconOnly: 'p-2',
    },
    lg: {
        default: '*:px-5 *:py-2 *:text-xl',
        iconOnly: '*:p-3',
    },
}

const ButtonGroup = defineComponent({
    props: baseButtonProps,

    setup(props, { slots }) {
        const { size, square, pill, iconOnly } = props
        const defaultColorClasses = colorClasses[props.variant]?.default
        const cClasses =props.outline
            ? colorClasses[props.variant]?.outline
            : colorClasses[props.variant]?.filled

        const childrenClasses = [
            ...baseClasses,
            {
                'first:*:rounded-s-lg last:*:rounded-e-lg': !square && !pill,
                'first:*:rounded-s-full last:*:rounded-e-full': pill,
            },
            defaultColorClasses,
            cClasses,
            focusClasses,
            {
                'focus:*:ring': !props.outline,
                'focus:*:ring-inset': props.outline,
            },
            borderClasses,
            iconOnly
                ? paddingClasses[size].iconOnly
                : paddingClasses[size].default,
        ]

        return () => (
            <div class={[
                    'inline-flex items-stretch', 
                    ...childrenClasses,
                ]}
            >
                {slots.default?.()}
            </div>
        )
    },
})

export default ButtonGroup
