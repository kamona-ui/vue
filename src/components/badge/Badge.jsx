import { defineComponent, Transition } from 'vue'

export const Dot = defineComponent({
    props: {
        variant: {
            type: String,
            default: 'danger',
            validator: (value) => {
                return ['success', 'warning', 'danger'].includes(value)
            },
        },
        shape: {
            type: String,
            default: 'circle',
            validator: (value) => {
                return ['circle', 'square', 'rounded'].includes(value)
            },
        },
        position: {
            type: String,
            default: 'tr',
            validator: (value) => {
                return ['tr', 'tl', 'br', 'bl'].includes(value)
            },
        },
        clickable: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['click'],

    setup(props, { slots, emit }) {
        const colorClasses = {
            success: 'bg-green-500',
            warning: 'bg-yellow-500',
            danger: 'bg-red-500',
        }

        const shapeClasses = {
            circle: 'rounded-full',
            square: 'rounded-none',
            rounded: 'rounded-md',
        }

        const positionClasses = {
            tr: '-top-2 -right-2',
            tl: '-top-2 -left-2',
            br: '-bottom-2 -right-2',
            bl: '-bottom-2 -left-2',
        }

        const hasChildClasses = [
            slots.default &&
                'text-white text-xs w-auto h-6 min-w-6 items-center justify-center leading-6',
            !slots.default && 'p-1 w-1 h-1',
        ]

        const handleClick = (e) => {
            if (!props.clickable) return

            e.preventDefault()
            emit('click', e)
        }

        return () => (
            <div
                class={[
                    'inline-flex',
                    ...hasChildClasses,
                    colorClasses[props.variant],
                    shapeClasses[props.shape],
                    positionClasses[props.position],
                    props.clickable && 'cursor-pointer',
                ]}
                onClick={handleClick}
            >
                {slots.default?.()}
            </div>
        )
    },
})

export default defineComponent({
    props: {
        shape: {
            type: String,
            default: 'circle',
        },
        count: {
            type: Number,
            default: 0,
        },
        overflowCount: {
            type: Number,
            default: 99,
        },
        showZero: {
            type: Boolean,
            default: false,
        },
        clickable: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { slots, attrs }) {
        return () => (
            <div class="relative max-w-max">
                <Transition
                    enterActiveClass="transition-all transform duration-300"
                    enterFromClass="opacity-20 scale-95 translate-y-2"
                    enterToClass="opacity-100 scale-100 translate-y-0"
                    leaveActiveClass="transition-all transform duration-300"
                    leaveFromClass="opacity-100 scale-100 translate-y-0"
                    leaveToClass="opacity-20 scale-95 -translate-y-2"
                >
                    {(props.count >= 1 || props.showZero) && (
                        <Dot
                            clickable={props.clickable}
                            class="absolute"
                            {...attrs}
                        >
                            {props.count <= props.overflowCount
                                ? props.count
                                : `+${props.overflowCount}`}
                        </Dot>
                    )}
                </Transition>

                {slots.default?.()}
            </div>
        )
    },
})
