import { defineComponent } from 'vue'
import { baseButtonProps } from './Button'

// TODO: Handle active button style
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
        filled: {
            normal: '*:bg-primary *:text-white *:border-primary-dark',
            active: '',
        },
        outline: {
            normal: '*:border-primary *:text-primary hover:*:text-white',
            active: '',
        },
    },
    success: {
        default: 'focus:*:ring-green-600 hover:*:bg-green-400',
        filled: {
            normal: '*:bg-green-500 *:text-white *:border-green-600',
            active: '',
        },
        outline: {
            normal: '*:border-green-500 *:text-green-500 hover:*:text-white',
            active: '',
        },
    },
    info: {
        default: 'focus:*:ring-cyan-600 hover:*:bg-cyan-400',
        filled: {
            normal: '*:bg-cyan-500 *:text-white *:border-cyan-600',
            active: '',
        },
        outline: {
            normal: '*:border-cyan-500 *:text-cyan-500 hover:*:text-white',
            active: '',
        },
    },
    warning: {
        default: 'focus:*:ring-yellow-600 hover:*:bg-yellow-400',
        filled: {
            normal: '*:bg-yellow-500 *:text-white *:border-yellow-600',
            active: '',
        },
        outline: {
            normal: '*:border-yellow-500 *:text-yellow-500 hover:*:text-white',
            active: '',
        },
    },
    danger: {
        default: 'focus:*:ring-red-600 hover:*:bg-red-400',
        filled: {
            normal: '*:bg-red-500 *:text-white *:border-red-600',
            active: '',
        },
        outline: {
            normal: '*:border-red-500 *:text-red-500 hover:*:text-white',
            active: '',
        },
    },
    white: {
        default: 'focus:*:ring-white',
        filled: {
            normal: '*:bg-white *:text-gray-800 hover:*:bg-gray-200',
            active: '',
        },
        outline: {
            normal: '*:border-white *:text-white hover:*:bg-white hover:*:text-gray-800',
            active: '',
        },
    },
    black: {
        default: 'focus:*:ring-black hover:*:bg-gray-800',
        filled: {
            normal: '*:bg-black *:text-gray-300 *:border-black',
            active: '',
        },
        outline: {
            normal: '*:border-black *:text-black hover:*:text-white',
            active: '',
        },
    },
    link: {
        // default: 'focus:*:ring-red-600 hover:*:bg-red-400',
        // filled: '*:bg-red-500 *:text-white *:border-red-600',
        // outline: '*:border-red-500 *:text-red-500 hover:*:text-white',

        default: 'focus:*:ring-blue-500 *:underline *:text-blue-600 hover:*:text-blue-500',
        filled: {
            normal: '*:border-blue-500',
            active: '',
        },
        outline: {
            normal: '*:border-blue-500',
            active: '',
        },
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
    props: {
        ...baseButtonProps,

        iconOnly: {
            type: Boolean,
            default: false,
        }
    },

    setup(props, { slots }) {
        const { size, iconOnly } = props
        const defaultColorClasses = colorClasses[props.variant]?.default
        const cClasses = props.outline
            ? colorClasses[props.variant]?.outline?.normal
            : colorClasses[props.variant]?.filled?.normal

        const childrenClasses = [
            ...baseClasses,
            {
                'first:*:rounded-s-lg last:*:rounded-e-lg': props.shape == 'rounded',
                'first:*:rounded-s-full last:*:rounded-e-full': props.shape == 'pill',
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
                    ...childrenClasses
                ]}
            >
                {slots.default?.()}
            </div>
        )
    },
})

export default ButtonGroup
