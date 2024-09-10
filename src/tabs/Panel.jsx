import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const showRightPanel = ref(false)
        const showLeftPanel = ref(false)

        return () => (
            <div>
                <KuiPanel
                    title="PANEL"
                    show={showRightPanel.value}
                    onClose={() => {
                        showRightPanel.value = false
                    }}
                >
                    <p>Panel</p>
                </KuiPanel>

                <KuiPanel
                    title="PANEL"
                    position="left"
                    show={showLeftPanel.value}
                    onClose={() => {
                        showLeftPanel.value = false
                    }}
                >
                    <p>Panel</p>
                </KuiPanel>

                <div class="p-10 space-x-4">
                    <KuiButton
                        onClick={() => {
                            showRightPanel.value = true
                        }}
                        text="Right Panel"
                    />

                    <KuiButton
                        onClick={() => {
                            showLeftPanel.value = true
                        }}
                        text="Left Panel"
                    />
                </div>
            </div>
        )
    },
})
