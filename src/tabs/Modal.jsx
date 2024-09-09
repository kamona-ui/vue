import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const showModal = ref(false)

        return () => (
            <div>
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
                            showModal.value = true
                        }}
                        text="Modal"
                    />
                </div>
            </div>
        )
    },
})
