import { defineComponent, toRefs } from 'vue'
import { Icon } from '@iconify/vue'
import { shapeProp, shapes, sizeProp, sizes, variantProp, variants } from '@/support'

// TODO: Handle active button style
// TODO: handle link components `router-link, ...`

const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'transition',
    'duration-300',
    'ease-in-out',
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
        filled: {
            normal: 'bg-primary text-white hover:bg-primary-dark',
            active: 'bg-primary-600',
        },
        outline: {
            normal: 'border border-primary text-primary hover:bg-primary-light hover:text-white',
            active: '',
        },
    },
    success: {
        default: 'focus:ring-green-500',
        filled: {
            normal: 'bg-green-500 text-white hover:bg-green-600',
            active: '',
        },
        outline: {
            normal: 'border border-green-500 text-green-500 hover:bg-green-400 hover:text-white',
            active: '',
        },
    },
    info: {
        default: 'focus:ring-cyan-500',
        filled: {
            normal: 'bg-cyan-500 text-white hover:bg-cyan-600',
            active: '',
        },
        outline: {
            normal: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-400 hover:text-white',
            active: '',
        },
    },
    warning: {
        default: 'focus:ring-yellow-500',
        filled: {
            normal: 'bg-yellow-500 text-white hover:bg-yellow-600',
            active: '',
        },
        outline: {
            normal: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-white',
            active: '',
        },
    },
    danger: {
        default: 'focus:ring-red-500',
        filled: {
            normal: 'bg-red-500 text-white hover:bg-red-600',
            active: '',
        },
        outline: {
            normal: 'border border-red-500 text-red-500 hover:bg-red-400 hover:text-white',
            active: '',
        },
    },
    white: {
        default: 'focus:ring-white',
        filled: {
            normal: 'bg-white text-gray-700 hover:bg-gray-200',
        },
        outline: {
            normal: 'border border-white text-white hover:bg-white hover:text-gray-800',
        },
    },
    black: {
        default: 'focus:ring-black',
        filled: {
            normal: 'bg-black text-gray-300 hover:text-white hover:bg-gray-800',
            active: '',
        },
        outline: {
            normal: 'border border-black text-black hover:bg-black hover:text-white',
            active: '',
        },
    },
    link: {
        default:
            'focus:ring-blue-500 underline text-blue-600 hover:text-blue-500',
        filled: {
            normal: '',
            active: '',
        },
        outline: {
            normal: 'border border-blue-500',
            active: '',
        },
    },
    transparent: {
        default: 'focus:ring-primary text-gray-700 dark:text-gray-300',
        filled: {
            normal: 'hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-dark-eval-1',
            active: '',
        },
        outline: {
            normal: 'hover:text-gray-800',
            active: '',
        },
    },
}

const focusOffsetClasses = ['focus:ring-offset-2']

const focusClasses = ['focus:outline-none', 'focus:ring']

export const baseButtonProps = {
    variant: variantProp({ variants: [...variants, 'link', 'transparent'] }),
    size: sizeProp({ sizes: ['xs', ...sizes] }),
    shape: shapeProp({ shapes: shapes.filter((s) => s != 'circle') }),
    outline: {
        type: Boolean,
        default: false,
    },
}

export default defineComponent({
    props: {
        ...baseButtonProps,
        as: {
            // type: [String, Object],
            required: false,
            default: 'a',
        },
        to: {
            type: [String, Object],
            default: undefined,
        },
        href: {
            type: String,
        },
        type: {
            type: String,
            default: 'submit',
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
        slim: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['click'],

    setup(props, { slots, emit, attrs }) {
        const {
            type,
            size,
            href,
            srText,
            external,
            outline,
            block,
            startIcon,
            endIcon,
            ringOffsetColorClass,
            slim,
            shape,
        } = props

        const { disabled, icon, text } = toRefs(props)

        const classes = [
            ...baseClasses,
            colorClasses[props.variant]?.default,
            outline
                ? props.active
                    ? colorClasses[props.variant]?.outline?.active
                    : colorClasses[props.variant]?.outline?.normal
                : props.active
                  ? colorClasses[props.variant]?.filled?.active
                  : colorClasses[props.variant]?.filled?.normal,
            ...focusClasses,
            ringOffsetColorClass,
            focusOffsetClasses,
            block ? 'w-full' : null,
            slim
                ? null
                : icon.value
                  ? {
                        'p-1': size == 'xs',
                        'p-1.5': size == 'sm',
                        'p-2': size == 'base',
                        'p-3': size == 'lg',
                    }
                  : {
                        'px-2 py-1 text-xs': size == 'xs',
                        'px-2.5 py-1.5 text-sm': size == 'sm',
                        'px-4 py-2 text-base': size == 'base',
                        'px-5 py-2 text-xl': size == 'lg',
                    },
            {
                'rounded-none': shape == 'square',
                'rounded-md': shape == 'rounded',
                'rounded-full': shape == 'pill',
            },
            {
                'pointer-events-none opacity-50':
                    (href || props.to) && disabled.value,
            },
        ]

        const iconSizeClasses = [
            {
                'w-4 h-4': size == 'xs',
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
                    {icon.value && !slots.default && (
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
                {icon.value && !slots.default && (
                    <Icon icon={icon.value} class={iconSizeClasses} />
                )}
                {startIcon && <Icon icon={startIcon} class={iconSizeClasses} />}
                {text.value ?? slots.default?.({ iconSizeClasses })}
                {endIcon && <Icon icon={endIcon} class={iconSizeClasses} />}
            </button>
        )
    },
})
