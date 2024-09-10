import { defineComponent, ref } from 'vue'
import { tabs } from './data.json'
import Avatar from './tabs/Avatar'
import Badge from './tabs/Badge'
import Button from './tabs/Button'
import ButtonGroup from './tabs/ButtonGroup'
import Form from './tabs/Form'
import Panel from './tabs/Panel'
import Modal from './tabs/Modal'

export default defineComponent({
    setup() {
        const activeTab = ref('Avatar')

        return () => (
            <>
                <div class="p-10">
                    <KuiButtonGroup outline variant="black">
                        {tabs.map((tab) => (
                            <button
                                onClick={() => {
                                    activeTab.value = tab
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </KuiButtonGroup>
                </div>

                <div>
                    <Avatar v-show={activeTab.value == 'Avatar'} />
                    <Badge v-show={activeTab.value == 'Badge'} />
                    <Button v-show={activeTab.value == 'Button'} />
                    <ButtonGroup v-show={activeTab.value == 'ButtonGroup'} />
                    <Form v-show={activeTab.value == 'Form'} />
                    <Panel v-show={activeTab.value == 'Panel'} />
                    <Modal v-show={activeTab.value == 'Modal'} />
                </div>
            </>
        )
    },
})
