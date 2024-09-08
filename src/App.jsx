import { defineComponent, ref } from 'vue'
import userAvatar from './assets/57622665.jpeg'
import { Icon } from '@iconify/vue'

export default defineComponent({
    setup() {
        const types = ['filled', 'outline']
        const size = ['sm', 'base', 'lg']
        const variants = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
            'white',
            'black',
            'link',
        ]

        const showPanel = ref(false)
        const showModal = ref(false)
        return () => (
            <>
                <KuiPanel
                    title="PANEL"
                    show={showPanel.value}
                    onClose={() => {
                        showPanel.value = false
                    }}
                >
                    <p>Panel</p>
                </KuiPanel>

                <KuiModal
                    show={showModal.value}
                    onClose={() => {
                        showModal.value = false
                    }}
                >
                    <div class="p-10">
                        <p>Modal</p>
                    </div>
                </KuiModal>

                <div class="p-10 space-x-4">
                    <KuiButton
                        onClick={() => {
                            showPanel.value = true
                        }}
                    >
                        Panel
                    </KuiButton>

                    <KuiButton
                        onClick={() => {
                            showModal.value = true
                        }}
                    >
                        Modal
                    </KuiButton>
                </div>

                <div class="p-10 flex gap-6">
                    {size.map((s) => (
                        <KuiAvatar
                            size={s}
                            src={userAvatar}
                            alt="User Avatar"
                        />
                    ))}
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {size.map((s) => (
                                <div class="flex gap-2">
                                    {variants.map((v) => (
                                        <KuiButton
                                            outline={t == 'outline'}
                                            variant={v}
                                            size={s}
                                        >
                                            Button
                                        </KuiButton>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {size.map((s) => (
                                <div class="flex gap-2">
                                    {variants.map((v) => (
                                        <KuiButton
                                            icon-only
                                            outline={t == 'outline'}
                                            variant={v}
                                            size={s}
                                        >
                                            {({ iconSizeClasses }) => (
                                                <Icon
                                                    icon="tabler:home"
                                                    class={iconSizeClasses}
                                                ></Icon>
                                            )}
                                        </KuiButton>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {size.map((s) => (
                                <div class="flex gap-2">
                                    {variants.map((v) => (
                                        <KuiButton
                                            outline={t == 'outline'}
                                            variant={v}
                                            size={s}
                                            disabled
                                        >
                                            Button
                                        </KuiButton>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </>
        )
    },
})
