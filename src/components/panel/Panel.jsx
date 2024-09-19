import { defineComponent } from 'vue'
import { Button } from '../button'
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'

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
            emit('close', e)
        }

        const ifPosition = (pos) => {
            return position == pos
        }

        // TODO: Fix transition
        return () => (
            <TransitionRoot as="template" show={props.show}>
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
                            <div
                                class={[
                                    width,
                                    'fixed inset-y-0 flex',
                                    {
                                        'right-0': ifPosition('right'),
                                        'left-0': ifPosition('left'),
                                    },
                                ]}
                            >
                                <div class="h-full w-full bg-white flex flex-col shadow-xl overflow-y-hidden dark:bg-gray-900">
                                    {slots.header ? (
                                        slots.header()
                                    ) : (
                                        <div class="px-4 flex-shrink-0 pt-4">
                                            <div class="flex items-center justify-between">
                                                <DialogTitle class="flex-1 text-lg font-medium text-gray-900 dark:text-gray-200">
                                                    {title}
                                                </DialogTitle>

                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    class="flex-shrink-0"
                                                    onClick={close}
                                                    sr-text="Close panel"
                                                    icon-only
                                                    outline
                                                    variant="danger"
                                                    icon="tabler:x"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div class="mt-6 relative flex-1 px-4 overflow-y-auto">
                                        {slots.default?.()}
                                    </div>

                                    <div class="flex-shrink-0">
                                        {slots.footer?.()}
                                    </div>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>
        )
    },
})
