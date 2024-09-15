import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import Label from './Label'
import { shapeProp, sizeProp, variantProp } from '@/support'

const inputBaseClasses = [
    'w-full',
    'focus:ring',
    'focus:ring-offset-2',
    'focus:ring-offset-white',
    'dark:bg-dark-eval-1',
    'dark:text-gray-300',
    'dark:focus:ring-offset-dark-eval-1',
]

const inputSizeClasses = {
    sm: 'py-1 text-sm',
    base: 'py-2 text-base',
    lg: 'py-4 text-xl',
}

export const inputVariantClasses = {
    priamry: 'border-gray-400 focus:ring-primary focus:border-primary dark:border-gray-600',
    success: 'border-green-400 focus:ring-green-500 focus:border-green-500 dark:border-green-600',
    info: 'border-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 dark:border-gray-600',
    warning: 'border-yellow-400 focus:ring-yellow-500 focus:border-yellow-500 dark:border-gray-600',
    danger: 'border-red-400 focus:ring-red-500 focus:border-red-500 dark:border-gray-600',
    black: 'border-black focus:ring-black focus:border-black dark:border-gray-600',
}

export const baseInputProps = {
    variant: variantProp,
    size: sizeProp,
    shape: shapeProp,
}

const BaseInput = defineComponent({
    props: {
        ...baseInputProps,
        modelValue: String,
        icon: {
            type: [String, undefined],
            default: undefined,
        },
        type: {
            type: String,
            default: 'text',
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['update:modelValue'],

    setup(props, { emit, attrs }) {
        return () => (
            <input
                {...attrs}
                type={props.type}
                class={[
                    ...inputBaseClasses,
                    inputVariantClasses[props.variant],
                    props.icon ?
                    {
                        'ps-8 pe-2': props.size == 'sm',
                        'ps-10 pe-4': props.size == 'base',
                        'ps-12 pe-6': props.size == 'lg',
                    } : {
                        'px-2': props.size == 'sm',
                        'px-4': props.size == 'base',
                        'px-6': props.size == 'lg',
                    },
                    inputSizeClasses[props.size],
                    {
                        'rounded-md': props.shape == 'rounded',
                    }
                ]}
                value={props.modelValue}
                onInput={(e) => {
                    emit('update:modelValue', e.target.value)
                }}
            />
        )
    },
})

const HelperMessage = defineComponent({
    props: {
        message: String,
    },

    setup(props, { attrs }) {
        return () => (
            <>
                {props.message && (
                    <p
                        {...attrs}
                        class="text-sm text-gray-600 dark:text-gray-300"
                    >
                        {props.message}
                    </p>
                )}
            </>
        )
    },
})

const ErrorMessage = defineComponent({
    props: {
        message: String,
    },

    setup(props) {
        return () => (
            <>
                {props.message && (
                    <p class="text-sm text-red-600">{props.message}</p>
                )}
            </>
        )
    },
})

const Header = defineComponent({
    props: {
        label: {
            type: [String, undefined],
            default: undefined,
        },

        helperMessage: {
            type: [String, undefined],
            default: undefined,
        },
    },

    setup(props) {
        return () => (
            <div
                class={[
                    'w-full flex items-center gap-2',
                    props.label ? 'justify-between' : 'justify-end',
                ]}
            >
                {props.label && <Label value={props.label} />}

                {props.helperMessage && (
                    <HelperMessage message={props.helperMessage} />
                )}
            </div>
        )
    },
})

const InputIconWrapper = defineComponent({
    props: {
        size: sizeProp,
        icon: {
            type: [String, undefined],
            default: undefined,
        },
    },

    setup(props, { slots }) {
        const iconSizeClasses = {
            sm: 'w-3 h-3',
            base: 'w-5 h-5',
            lg: 'w-7 h-7',
        }

        return () => (
            <div class="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-gray-400">
                <div
                    aria-hidden="true"
                    class="absolute inset-y-0 flex items-center px-4 pointer-events-none "
                >
                    <Icon 
                        icon={props.icon} 
                        class={[
                            iconSizeClasses[props.size],
                        ]} 
                    />
                </div>

                {slots.default?.()}
            </div>
        )
    },
})

export default defineComponent({
    props: {
        icon: {
            type: [String, undefined],
            default: undefined,
        },

        size: sizeProp,

        type: {
            type: String,
            default: 'text'
        },

        label: {
            type: [String, undefined],
            default: undefined,
        },

        helperMessage: {
            type: [String, undefined],
            default: undefined,
        },

        errorMessage: {
            type: [String, Boolean],
            default: false,
        },
    },

    inheritAttrs: false,

    setup(props, { attrs }) {
        if (props.icon) {
            return () => (
                <div class="space-y-2 w-full">
                    <Header
                        label={props.label}
                        helperMessage={props.helperMessage}
                    />

                    <InputIconWrapper size={props.size} icon={props.icon}>
                        <BaseInput 
                            type={props.type} 
                            icon={props.icon} 
                            size={props.size} 
                            {...attrs} 
                        />
                    </InputIconWrapper>

                    {props.errorMessage && (
                        <ErrorMessage message={props.errorMessage} />
                    )}
                </div>
            )
        }

        return () => (
            <div class="space-y-2 w-full">
                <Header
                    label={props.label}
                    helperMessage={props.helperMessage}
                />

                {props.helperMessage && (
                    <HelperMessage message={props.helperMessage} />
                )}

                <BaseInput 
                    type={props.type} 
                    icon={props.icon} 
                    size={props.size} 
                    {...attrs} 
                />

                {props.errorMessage && (
                    <ErrorMessage message={props.errorMessage} />
                )}
            </div>
        )
    },
})
