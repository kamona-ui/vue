import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const showPanel = ref(false)

        return () => (
            <div>
                <KuiPanel
                    title="PANEL"
                    show={showPanel.value}
                    onClose={() => {
                        showPanel.value = false
                    }}
                >
                    <p>Panel</p>
                </KuiPanel>

                <div class="p-10 space-x-4">
                    <KuiButton
                        onClick={() => {
                            showPanel.value = true
                        }}
                        text="Panel"
                    />
                </div>
            </div>
        )
    }
})
