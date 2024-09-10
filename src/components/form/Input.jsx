import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import Label from './Label'

// TODO: Handle border color on error
const inputBaseClasses = [
    'py-2',
    'rounded-md',
    'focus:ring',
    'focus:ring-offset-2',

    'border-gray-400', //

    'focus:border-gray-400', //
    'focus:ring-primary-500', //
    'focus:ring-offset-white', //

    'dark:border-gray-600', //
    'dark:bg-dark-eval-1', //
    'dark:text-gray-300', //
    'dark:focus:ring-offset-dark-eval-1', //
]

const BaseInput = defineComponent({
    props: {
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
                type={props.type}
                class={[...inputBaseClasses]}
                value={props.modelValue}
                onInput={(e) => {
                    emit('update:modelValue', e.target.value)
                }}
                {...attrs}
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
        icon: {
            type: [String, undefined],
            default: undefined,
        },
    },

    setup(props, { slots }) {
        return () => (
            <div class="relative text-gray-500  focus-within:text-gray-900 dark:focus-within:text-gray-400">
                <div
                    aria-hidden="true"
                    class="absolute inset-y-0 flex items-center px-4 pointer-events-none "
                >
                    <Icon icon={props.icon} class="w-5 h-5" />
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

    setup(props, { attrs }) {
        if (props.icon) {
            return () => (
                <div class="space-y-2">
                    <Header
                        label={props.label}
                        helperMessage={props.helperMessage}
                    />

                    <InputIconWrapper icon={props.icon}>
                        <BaseInput class="pl-11 pr-4" {...attrs} />
                    </InputIconWrapper>

                    {props.errorMessage && (
                        <ErrorMessage message={props.errorMessage} />
                    )}
                </div>
            )
        }

        return () => (
            <div class="space-y-2">
                <Header
                    label={props.label}
                    helperMessage={props.helperMessage}
                />

                {props.helperMessage && (
                    <HelperMessage message={props.helperMessage} />
                )}

                <BaseInput class="px-4" {...attrs} />

                {props.errorMessage && (
                    <ErrorMessage message={props.errorMessage} />
                )}
            </div>
        )
    },
})
