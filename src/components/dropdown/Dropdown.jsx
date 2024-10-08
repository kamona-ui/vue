import { defineComponent, Transition, computed } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

// Placeholder

export const DropdownItem = defineComponent({
    props: {
        title: String,
    },

    setup(props, { slots, attrs }) {
        return () => (
            <MenuItem class="w-full">
                {({ active, disabled }) => (
                    <button
                        type="button"
                        {...attrs}
                        class={[
                            'block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-75 ease-in-out  focus:outline-none  dark:text-gray-400',
                            {
                                'bg-gray-100 dark:text-white dark:bg-dark-eval-3':
                                    active,
                                'pointer-events-none': disabled,
                            },
                        ]}
                    >
                        {slots.default ?? props.title}
                    </button>
                )}
            </MenuItem>
        )
    },
})

export default defineComponent({
    props: {
        align: {
            default: 'right',
        },
        width: {
            default: '48',
        },
        contentClasses: {
            default: () => ['py-1', 'bg-white dark:bg-dark-eval-1'],
        },
    },

    setup(props, { slots }) {
        const widthClass = computed(() => {
            return {
                48: 'w-48',
            }[props.width.toString()]
        })

        const alignmentClasses = computed(() => {
            if (props.align === 'left') {
                return 'origin-top-left left-0'
            } else if (props.align === 'right') {
                return 'origin-top-right right-0'
            } else {
                return 'origin-top'
            }
        })

        return () => (
            <Menu as="div" class="relative max-w-max">
                <MenuButton as="span">{slots.trigger?.()}</MenuButton>

                <Transition
                    enterActiveClass="transition ease-out duration-200"
                    enterFromClass="transform opacity-0 scale-95"
                    enterToClass="transform opacity-100 scale-100"
                    leaveActiveClass="transition ease-in duration-75"
                    leaveFromClass="transform opacity-100 scale-100"
                    leaveToClass="transform opacity-0 scale-95"
                >
                    <MenuItems
                        class={[
                            'absolute z-50 mt-2 rounded-md shadow-lg',
                            'focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-5',
                            // widthClass.value,
                            'min-w-full',
                            alignmentClasses.value,
                        ]}
                    >
                        <div class={['rounded-md', props.contentClasses]}>
                            {slots.content?.()}
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        )
    },
})
