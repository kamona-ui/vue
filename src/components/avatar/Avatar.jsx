import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import {
    positionProp,
    shapeProp,
    shapes,
    sizeProp,
    sizes,
    variantProp,
} from '@/support'

const AvatarStatus = defineComponent({
    props: {
        variant: variantProp({
            defaultVariant: 'success',
            variants: ['success', 'danger'],
        }),
        avatarShape: shapeProp({ defaultShape: 'circle' }),
        shape: shapeProp({ defaultShape: 'circle' }),
        avatarSize: sizeProp({ sizes: ['xs', ...sizes, 'xl', '2xl'] }),
        position: positionProp(),
        bordered: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {
        const colorClasses = {
            success: 'bg-green-500',
            danger: 'bg-red-500',
        }

        const shapeClasses = {
            square: 'rounded-none',
            rounded: 'rounded-md',
            circle: 'rounded-full',
        }

        const positionClasses = {
            tr: 'justify-end items-start',
            tl: 'justify-start items-start',
            br: 'justify-end items-end',
            bl: 'justify-start items-end',
        }

        const positionMarginClasses = {
            tr: {
                default: '*:-m-2',
                circle: {
                    xs: '*:-m-2',
                    sm: '*:-m-1',
                    base: '*:-m-0.5',
                    lg: '*:-m-0.5',
                    xl: '*:m-0.5',
                    '2xl': '*:m-2.5',
                },
            },
            tl: {
                default: '*:-m-2',
                circle: {
                    xs: '*:-m-2',
                    sm: '*:-m-1',
                    base: '*:-m-0.5',
                    lg: '*:-m-0.5',
                    xl: '*:m-0.5',
                    '2xl': '*:m-2.5',
                },
            },
            br: {
                default: '*:-m-2',
                circle: {
                    xs: '*:-m-2',
                    sm: '*:-m-1',
                    base: '*:-m-0.5',
                    lg: '*:-m-0.5',
                    xl: '*:m-0.5',
                    '2xl': '*:m-2.5',
                },
            },
            bl: {
                default: '*:-m-2',
                circle: {
                    xs: '*:-m-2',
                    sm: '*:-m-1',
                    base: '*:-m-0.5',
                    lg: '*:-m-0.5',
                    xl: '*:m-0.5',
                    '2xl': '*:m-2.5',
                },
            },
        }

        return () => (
            <div
                class={[
                    'col-[1/1] row-[1/1]',
                    'flex',
                    positionClasses[props.position],
                    props.avatarShape == 'circle'
                        ? positionMarginClasses[props.position]?.circle?.[
                              props.avatarSize
                          ]
                        : positionMarginClasses[props.position]?.default,
                ]}
            >
                <div
                    class={[
                        'w-4 h-4',
                        'ring ring-white dark:ring-dark-eval-0',
                        colorClasses[props.variant],
                        shapeClasses[props.shape],
                    ]}
                ></div>
            </div>
        )
    },
})

export default defineComponent({
    props: {
        variant: variantProp(),
        size: sizeProp({ sizes: ['xs', ...sizes, 'xl', '2xl'] }),
        shape: shapeProp({ shapes: shapes.filter((s) => s != 'pill') }),
        src: String,
        alt: String,
        status: {
            type: Boolean,
            default: false,
        },
        statusVariant: variantProp({
            defaultVariant: 'success',
            variants: ['success', 'danger'],
        }),
        statusPosition: positionProp(),
        statusShape: shapeProp({
            defaultShape: 'circle',
            shapes: shapes.filter((s) => s != 'pill'),
        }),
        bordered: {
            type: Boolean,
            default: false,
        },
        ringColorClass: {
            type: String,
            default: 'ring-primary',
        },
        placeholder: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: 'tabler:user',
        },
    },

    setup(props) {
        const shapeClasses = {
            'rounded-md': props.shape == 'rounded',
            'rounded-full': props.shape == 'circle',
            'rounded-none': props.shape == 'square',
        }

        const sizesClasses = {
            'w-6 h-6': props.size == 'xs',
            'w-10 h-10': props.size == 'sm',
            'w-14 h-14': props.size == 'base',
            'w-16 h-16': props.size == 'lg',
            'w-20 h-20': props.size == 'xl',
            'w-36 h-36': props.size == '2xl',
        }

        const broderColorClasses = {
            primary: 'ring-primary',
            success: 'ring-green-500',
            info: 'ring-cyan-500',
            warning: 'ring-yellow-500',
            danger: 'ring-red-500',
            white: 'ring-white',
            black: 'ring-black',
        }

        return () => (
            <div
                class={[
                    'grid aspect-square max-w-max',
                    sizesClasses,
                    shapeClasses,
                    {
                        'bg-gray-200 dark:bg-gray-800': !props.src,
                        'ring ring-offset-2 dark:ring-offset-dark-eval-0':
                            props.bordered,
                        [broderColorClasses[props.variant]]: props.bordered,
                    },
                ]}
            >
                <div class={['col-[1/1] row-[1/1]']}>
                    {props.src ? (
                        <img
                            class={[
                                'object-fit',
                                'w-full h-full',
                                shapeClasses,
                            ]}
                            src={props.src}
                            alt={props.alt}
                        />
                    ) : (
                        <Icon
                            icon={props.icon}
                            class={[
                                'w-full h-full dark:text-gray-200',
                                sizesClasses,
                            ]}
                        />
                    )}
                </div>

                {props.status && (
                    <AvatarStatus
                        avatar-shape={props.shape}
                        shape={props.statusShape}
                        avatar-size={props.size}
                        position={props.statusPosition}
                        variant={props.statusVariant}
                    />
                )}
            </div>
        )
    },
})
