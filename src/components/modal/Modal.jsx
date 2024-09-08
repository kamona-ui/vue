import { defineComponent } from 'vue'
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
            default: false,
        },
        width: {
            type: String,
            default: 'w-full sm:max-w-2xl',
        },
    },

    emits: ['close'],

    setup(props, { slots, emit }) {
        const close = () => {
            emit('close')
        }

        return () => (
            <TransitionRoot appear as="template" show={props.show}>
                <Dialog
                    as="div"
                    class="fixed inset-0 overflow-hidden z-50"
                    onClose={close}
                >
                    <TransitionChild
                        as="template"
                        enter="transition-opacity ease-in-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in-out duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <DialogOverlay
                            onClick={close}
                            class="absolute inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
                        />
                    </TransitionChild>

                    {/* <div
                        class="fixed inset-0 pointer-events-none overflow-y-auto px-4 py-6 sm:px-0 z-50"
                    >
                        
                    </div> */}

                    <div class="p-6">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                class={[
                                    'mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:mx-auto',
                                    props.width,
                                ]}
                            >
                                {slots.default?.()}
                            </div>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>
        )
    },
})
