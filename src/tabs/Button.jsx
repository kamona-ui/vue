import { defineComponent } from 'vue'
import { sizes, variants } from '@/support'

export default defineComponent({
    setup() {
        const types = ['filled', 'outline']
        const buttonVariants = [...variants, 'link', 'transparent']

        return () => (
            <div>
                <div class="p-10">
                    <KuiDropdown
                        align="left"
                        width="48"
                        v-slots={{
                            trigger: () => (
                                <KuiButton
                                    variant="transparent"
                                    text="User Name"
                                    end-icon="tabler:chevron-down"
                                />
                            ),

                            content: () => (
                                <>
                                    <KuiDropdownItem href="#" title="Profile" />

                                    <KuiDropdownItem
                                        href="#"
                                        method="post"
                                        as="button"
                                        title="Log Out"
                                    />
                                </>
                            ),
                        }}
                    />
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {sizes.map((s) => (
                                <div class="flex gap-2">
                                    {buttonVariants.map((v) => (
                                        <KuiButton
                                            outline={t == 'outline'}
                                            variant={v}
                                            size={s}
                                            text="Button"
                                            start-icon="tabler:home"
                                            end-icon="tabler:home"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {sizes.map((s) => (
                                <div class="flex gap-2">
                                    {buttonVariants.map((v) => (
                                        <KuiButton
                                            icon-only
                                            outline={t == 'outline'}
                                            variant={v}
                                            size={s}
                                            icon="tabler:home"
                                            sr-text="Home"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <div class="flex flex-col gap-2">
                            {sizes.map((s) => (
                                <div class="flex gap-2">
                                    {buttonVariants.map((v) => (
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
            </div>
        )
    },
})
