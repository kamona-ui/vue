import { computed, defineComponent, toRefs } from 'vue'
import { Icon } from '@iconify/vue'

const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'transition',
    'min-w-max',
    'font-medium',
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
    transparent: {
        default: 'focus:ring-primary',
        filled: 'text-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-eval-0',
        outline: 'text-primary hover:text-primary-light',
    },
}

const focusOffsetClasses = ['focus:ring-offset-2']

const focusClasses = ['focus:outline-none', 'focus:ring']

export const baseButtonProps = {
    variant: {
        type: String,
        default: 'primary',
        validator(value) {
            return [
                'primary',
                'success',
                'info',
                'warning',
                'danger',
                'white',
                'black',
                'link',
                'transparent',
            ].includes(value)
        },
    },
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['sm', 'base', 'lg'].includes(value)
        },
    },
    square: {
        type: Boolean,
        default: false,
    },
    pill: {
        type: Boolean,
        default: false,
    },
    iconOnly: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
}

export default defineComponent({
    props: {
        ...baseButtonProps,

        as: {
            // type: String,
            required: false,
            default: 'a',
        },
        to: {
            type: [String, undefined],
            default: undefined,
        },
        href: {
            type: String,
        },
        type: {
            type: String,
            default: 'submit',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        srText: {
            type: String || undefined,
            default: undefined,
        },
        text: {
            type: String || undefined,
            default: undefined,
        },
        external: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String || undefined,
            default: undefined,
        },
        startIcon: {
            type: String || undefined,
            default: undefined,
        },
        endIcon: {
            type: String || undefined,
            default: undefined,
        },
        ringOffsetColorClass: {
            type: String,
            default:
                'focus:ring-offset-white dark:focus:ring-offset-dark-eval-2',
        },
        noPadding: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        }
    },

    emits: ['click'],

    setup(props, { slots, emit, attrs }) {
        const {
            type,
            variant,
            size,
            square,
            pill,
            href,
            iconOnly,
            srText,
            external,
            outline,
            block,
            // icon,
            startIcon,
            endIcon,
            ringOffsetColorClass,
            noPadding,
        } = props

        const { disabled, icon, text } = toRefs(props)

        const vClass = computed(() => {
            return ''
        })

        const classes = [
            ...baseClasses,
            colorClasses[variant].default,
            props.active && colorClasses[variant].default?.[props.active],
            outline
                ? colorClasses[variant].outline
                : colorClasses[variant].filled,
            ...focusClasses,
            ringOffsetColorClass,
            focusOffsetClasses,
            block ? 'w-full' : null,
            noPadding ? null : 
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
                'rounded-md': !square && !pill,
                'rounded-full': pill,
            },
            {
                'pointer-events-none opacity-50':
                    (href || props.to) && disabled.value,
            },
            // vClasses,
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
                    {icon && iconOnly && (
                        <Icon icon={icon.value} class={iconSizeClasses} />
                    )}
                    {startIcon && (
                        <Icon icon={startIcon} class={iconSizeClasses} />
                    )}
                    {text.value ?? slots.default?.({ iconSizeClasses })}
                    {endIcon && <Icon icon={endIcon} class={iconSizeClasses} />}
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
                {icon && iconOnly && (
                    <Icon icon={icon.value} class={[
                        iconSizeClasses,
                        // 'fill-current',
                        // 'stroke-current'
                    ]} />
                )}
                {startIcon && <Icon icon={startIcon} class={iconSizeClasses} />}
                {text.value ?? slots.default?.({ iconSizeClasses })}
                {endIcon && <Icon icon={endIcon} class={iconSizeClasses} />}
            </button>
        )
    },
})
