import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const today = ref()

        return () => (
            <div>
                <div class="p-10 flex gap-6">
                    <kuiInput placeholder="Text" />

                    <KuiDatePicker placeholder="Date" v-model={today.value} />
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
                    <kuiCheckbox />
                </div>
            </div>
        )
    },
})
