import { defineComponent, toRefs } from 'vue'

const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'transition-colors',
    'min-w-max',
    'font-semibold',
    'select-none',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'focus:outline-none',
    'focus:z-10',
    'focus:ring',
]

const colorClasses = {
    primary: {
        default: 'focus:ring-primary',
        filled: 'bg-primary text-white hover:bg-primary-dark',
        outline:
            'border border-primary text-primary hover:bg-primary-light hover:text-white',
    },
    success: {
        default: 'focus:ring-green-500',
        filled: 'bg-green-500 text-white hover:bg-green-600',
        outline:
            'border border-green-500 text-green-500 hover:bg-green-400 hover:text-white',
    },
    info: {
        default: 'focus:ring-cyan-500',
        filled: 'bg-cyan-500 text-white hover:bg-cyan-600',
        outline:
            'border border-cyan-500 text-cyan-500 hover:bg-cyan-400 hover:text-white',
    },
    warning: {
        default: 'focus:ring-yellow-500',
        filled: 'bg-yellow-500 text-white hover:bg-yellow-600',
        outline:
            'border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-white',
    },
    danger: {
        default: 'focus:ring-red-500',
        filled: 'bg-red-500 text-white hover:bg-red-600',
        outline:
            'border border-red-500 text-red-500 hover:bg-red-400 hover:text-white',
    },
    white: {
        default: 'focus:ring-white',
        filled: 'bg-white text-gray-800 hover:bg-gray-200',
        outline:
            'border border-white text-white hover:bg-white hover:text-gray-800',
    },
    black: {
        default: 'focus:ring-black',
        filled: 'bg-black text-gray-300 hover:text-white hover:bg-gray-800',
        outline:
            'border border-black text-black hover:bg-black hover:text-white',
    },
    link: {
        default:
            'focus:ring-blue-500 underline text-blue-600 hover:text-blue-500',
        filled: '',
        outline: 'border border-blue-500',
    },
}

const focusOffsetClasses = ['focus:ring-offset-2']

const focusClasses = ['focus:outline-none', 'focus:ring']

export default defineComponent({
    props: {
        as: {
            type: String,
            default: 'a',
        },
        to: {
            type: [String, undefined],
            default: undefined,
        },
        variant: {
            type: String,
            default: 'primary',
            validator(value) {
                return [
                    'primary',
                    // 'secondary',
                    'success',
                    'info',
                    'warning',
                    'danger',
                    'white',
                    'black',
                    'link',
                ].includes(value)
            },
        },
        type: {
            type: String,
            default: 'submit',
        },
        size: {
            type: String,
            default: 'base',
            validator(value) {
                return ['sm', 'base', 'lg'].includes(value)
            },
        },
        squared: {
            type: Boolean,
            default: false,
        },
        pill: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        iconOnly: {
            type: Boolean,
            default: false,
        },
        srText: {
            type: String || undefined,
            default: undefined,
        },
        external: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        ringOffsetColorClass: {
            type: String,
            default:
                'focus:ring-offset-white dark:focus:ring-offset-dark-eval-2',
        },
    },

    emits: ['click'],

    setup(props, { slots, emit, attrs }) {
        const {
            type,
            variant,
            size,
            squared,
            pill,
            href,
            iconOnly,
            srText,
            external,
            outline,
            block,
            ringOffsetColorClass,
        } = props

        const { disabled } = toRefs(props)

        const classes = [
            ...baseClasses,
            colorClasses[variant].default,
            outline
                ? colorClasses[variant].outline
                : colorClasses[variant].filled,
            ...focusClasses,
            ringOffsetColorClass,
            focusOffsetClasses,
            block ? 'w-full' : null,
            iconOnly
                ? {
                      'p-1.5': size == 'sm',
                      'p-2': size == 'base',
                      'p-3': size == 'lg',
                  }
                : {
                      'px-2.5 py-1.5 text-sm': size == 'sm',
                      'px-4 py-2 text-base': size == 'base',
                      'px-5 py-2 text-xl': size == 'lg',
                  },
            {
                'rounded-md': !squared && !pill,
                'rounded-full': pill,
            },
            {
                'pointer-events-none opacity-50':
                    (href || props.to) && disabled.value,
            },
        ]

        const iconSizeClasses = [
            {
                'w-5 h-5': size == 'sm',
                'w-6 h-6': size == 'base',
                'w-7 h-7': size == 'lg',
            },
        ]

        const handleClick = (e) => {
            if (disabled.value) {
                e.preventDefault()
                e.stopPropagation()
                return
            }

            emit('click', e)
        }

        const Tag = props.as

        if (href || props.to) {
            return () => (
                <Tag
                    href={!disabled.value ? href : null}
                    to={!disabled.value ? props.to : null}
                    class={classes}
                    aria-disabled={disabled.value.toString()}
                    target={external ? '_blank' : null}
                    {...attrs}
                >
                    {srText && <span class="sr-only">{srText}</span>}
                    {slots.default?.({ iconSizeClasses })}
                </Tag>
            )
        }

        return () => (
            <button
                type={type}
                onClick={handleClick}
                class={classes}
                disabled={disabled.value}
                {...attrs}
            >
                {srText && <span class="sr-only">{srText}</span>}
                {slots.default?.({ iconSizeClasses })}
            </button>
        )
    },
})
