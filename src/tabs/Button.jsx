import { defineComponent } from 'vue'
import { types, size, variants } from '@/data.json'

export default defineComponent({
    setup() {
        return () => (
            <div>
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
                            {size.map((s) => (
                                <div class="flex gap-2">
                                    {variants.map((v) => (
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
            </div>
        )
    },
})
