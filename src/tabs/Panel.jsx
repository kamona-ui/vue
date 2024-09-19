import { defineComponent, ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const Select = defineComponent({
    props: {},

    setup() {
        const types = [
            { id: 1, name: 'Base' },
            { id: 2, name: 'Auth' },
          ]
          const selectedType = ref(types[0])
        
        return () => (
            <Listbox v-model={selectedType.value}>
                <ListboxButton as="template">
                    <KuiButton 
                        outline
                        text={`type: ${selectedType.value.name}`}
                        variant="black"
                    />
                </ListboxButton>

                <ListboxOptions>
                    {types.map(p => (
                        <ListboxOption value={p} key={p.id}>
                            {p.name}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        )
    }
  })

export default defineComponent({
    setup() {
        const showRightPanel = ref(false)
        const showLeftPanel = ref(false)

        return () => (
            <div>
                <KuiPanel
                    title="Right Panel"
                    show={showRightPanel.value}
                    onClose={() => {
                        showRightPanel.value = false
                    }}
                    width="w-screen md:max-w-[880px]"
                    v-slots={{
                        footer: () => (
                            <div class="p-4">
                                Footer
                            </div>
                        )
                    }}
                >
                    {/* {Array(50).fill('').map(_ => (
                        <p>Panel</p>
                    ))} */}

                    <div class="flex items-end gap-4">
                        <KuiInput 
                            label="Name"
                            placeholder="eg `posts`"
                        />

                        <div class="flex-shrink-0 relative">
                            <Select />
                        </div>
                    </div>
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
