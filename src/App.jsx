import { defineComponent, ref } from 'vue'
import Avatar from './tabs/Avatar'
import Badge from './tabs/Badge'
import Button from './tabs/Button'
import ButtonGroup from './tabs/ButtonGroup'
import Form from './tabs/Form'
import Panel from './tabs/Panel'
import Modal from './tabs/Modal'
import { isDark, toggleDarkMode } from './composables'

export default defineComponent({
    setup() {
        const activeTab = ref('Avatar')
        const tabs = [
            'Avatar',
            'Badge',
            'Button',
            'ButtonGroup',
            'Form',
            'Panel',
            'Modal',
        ]
        
        return () => (
            <div class={[
                isDark.value && 'dark bg-dark-eval-0'
            ]}>
                <div class="p-6 flex gap-4 items-center">
                    <KuiButton 
                        variant="transparent"
                        icon={isDark.value ? 'tabler:sun' : 'tabler:moon'}
                        onClick={() => {
                            toggleDarkMode()
                        }}
                    />
                </div>

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
            </div>
        )
    },
})
