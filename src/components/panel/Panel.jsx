import { defineComponent } from 'vue'
import { Button } from '../button'
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: 'right',
        },
        width: {
            type: String,
            default: 'w-screen max-w-md',
        },
    },

    emits: ['close'],

    setup(props, { emit, slots }) {
        const { title, position, width } = props

        const close = (e) => {
            emit('close')
        }

        const ifPosition = (pos) => {
            return position == pos
        }

        return () => (
            <TransitionRoot appear as="template" show={props.show}>
                <Dialog
                    as="div"
                    class="fixed inset-0 overflow-hidden z-50"
                    onClose={close}
                >
                    <div class="absolute inset-0 overflow-hidden">
                        <TransitionChild
                            as="template"
                            enter="transition-opacity ease-in-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-in-out duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <DialogOverlay class="absolute inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm" />
                        </TransitionChild>

                        <div
                            class={[
                                'fixed inset-y-0 max-w-full flex',
                                {
                                    'right-0 pl-10': ifPosition('right'),
                                    'left-0 pr-10': ifPosition('left'),
                                },
                            ]}
                        >
                            <TransitionChild
                                as="template"
                                enter="transform transition ease-out duration-300 sm:duration-500"
                                enter-from={
                                    ifPosition('left')
                                        ? '-translate-x-full'
                                        : 'translate-x-full'
                                }
                                enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-300 sm:duration-500"
                                leave-from="translate-x-0"
                                leave-to={
                                    ifPosition('left')
                                        ? '-translate-x-full'
                                        : 'translate-x-full'
                                }
                            >
                                <div class={[width]}>
                                    <div class="h-full duration-1000 w-full bg-white flex flex-col shadow-xl overflow-y-hidden dark:bg-gray-900">
                                        {slots.header ? (
                                            slots.header()
                                        ) : (
                                            <div class="px-4 flex-shrink-0 sm:px-6 pt-6">
                                                <div class="flex items-center justify-between">
                                                    <DialogTitle class="flex-1 text-lg font-medium text-gray-900 dark:text-gray-200">
                                                        {title}
                                                    </DialogTitle>

                                                    <Button
                                                        type="button"
                                                        class="flex-shrink-0"
                                                        onClick={close}
                                                        sr-text="Close panel"
                                                        icon-only
                                                        outline
                                                        variant="danger"
                                                    >
                                                        <Icon
                                                            icon="tabler:x"
                                                            aria-hidden="true"
                                                            class="w-6 h-6"
                                                        />
                                                    </Button>
                                                </div>
                                            </div>
                                        )}

                                        <div class="mt-6 relative flex-1 px-4 overflow-y-auto sm:px-6">
                                            {slots.default?.()}
                                        </div>

                                        {slots.footer?.()}
                                    </div>
                                </div>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        )
    },
})
