import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { variantProp } from '@/support'
import KuiButton from '../button/Button'

export default defineComponent({
    props: {
        variant: variantProp({ defaultVariant: 'white' }),
        title: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
        hideClose: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: 'tabler:check'
        },
        hideClose: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['close-toast'],

    setup(props, { emit }) {
        const { variant, title, message, icon, hideClose, bordered } = props

        const toastBackgroundClass = {
            primary: 'bg-white',
            success: 'bg-green-100',
            warning: 'bg-yellow-100',
            danger: 'bg-red-100',
            info: 'bg-cyan-100',
            white: 'bg-white',
            black: 'bg-black',
        }

        const iconColorClass = {
            primary: 'text-primary',
            success: 'text-green-500',
            warning: 'text-yellow-500',
            danger: 'text-red-500',
            info: 'text-cyan-500',
            white: 'text-gray-800',
            black: 'text-gray-200',
        }

        const textVariantClass = {
            primary: 'text-primary-dark',
            success: 'text-green-600',
            warning: 'text-yellow-600',
            danger: 'text-red-600',
            info: 'text-cyan-600',
            white: 'text-gray-800 dark:text-gray-200',
            black: 'text-gray-200',
        }

        const handleClose = () => {
            emit('close-toast')
        }

        return () => (
            <div class="p-2">
                <div class={[
                        'relative p-3 rounded-md shadow-lg dark:bg-dark-eval-3 border-s-4',
                        toastBackgroundClass[variant],
                        {
                            'border-s-primary': variant == 'primary',
                            'border-s-green-500': variant == 'success',
                            'border-s-cyan-500': variant == 'info',
                            'border-s-yellow-500': variant == 'warning',
                            'border-s-red-500': variant == 'danger',
                            'border-s-gray-200': variant == 'white',
                            'border-s-gray-500': variant == 'black',
                        }
                    ]}
                >
                    <div class="flex items-start gap-2">
                        <Icon 
                            icon={icon} 
                            class={[
                                'w-8 h-8 -my-0.5',
                                iconColorClass[variant],
                            ]} 
                        />

                        <KuiButton
                            onClick={handleClose}
                            icon="tabler:x"
                            size="xs"
                            variant={props.variant}
                            class="absolute right-2 top-2"
                            sr-text="Close"
                        />

                        <div class="space-y-2">
                            <div 
                                class={[
                                    textVariantClass[variant]
                                ]}
                            >
                                {title}
                            </div>

                            <p class="text-gray-600 dark:text-gray-400">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})
