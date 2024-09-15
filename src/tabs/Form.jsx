import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const today = ref()

        const variants = [
            "primary",
            "success",
            "info",
            "warning",
            "danger",
            "black",
        ]

        const sizes = [
            'sm',
            'base',
            'lg'
        ]

        return () => (
            <div>
                <div class="p-10 flex gap-6">
                    <kuiInput placeholder="Text" />

                    <KuiDatePicker placeholder="Date" v-model={today.value} />
                </div>

                <div class="p-10 flex flex-wrap gap-6">
                    {variants.map(v => (
                        <kuiInput variant={v} placeholder="Text" />
                    ))}
                </div>

                <div class="p-10 flex flex-wrap gap-6">
                    {sizes.map(s => (
                        <kuiInput size={s} placeholder="Text" />
                    ))}
                </div>

                <div class="p-10 flex flex-wrap gap-6">
                    {sizes.map(s => (
                        <kuiInput icon="tabler:user" size={s} placeholder="Text" />
                    ))}
                </div>

                <div class="p-10 flex gap-6">
                    <kuiInput
                        placeholder="Text"
                        label="Text"
                        icon="tabler:user"
                    />

                    <KuiDatePicker
                        placeholder="Date"
                        label="Date"
                        icon="tabler:calendar"
                        v-model={today.value}
                    />
                </div>

                <div class="p-10 flex gap-6">
                    {sizes.map(s => (
                        <kuiCheckbox size={s} />
                    ))}
                </div>
            </div>
        )
    },
})
