import * as components from './components'
import Toast from 'vue-toastification'
import '@/css/main.css'

export {
    Avatar as KuiAvatar,
    Badge as KuiBadge,
    Dot as KuiDot,
    Button as KuiButton,
    ButtonGroup as KuiButtonGroup,
    Dropdown as KuiDropdown,
    DropdownItem as KuiDropdownItem,
    Input as KuiInput,
    Label as KuiLabel,
    Checkbox as KuiCheckbox,
    DatePicker as KuiDatePicker,
    Panel as KuiPanel,
    Modal as KuiModal,
    Loading as KuiLoading,
} from './components'

export * as toast from './components/toast'

function install(Vue, options = {}) {
    const { 
        toast = true
     } = options

    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }

    if(toast) {
        Vue.use(Toast, {
            hideProgressBar: true,
            closeOnClick: false,
            closeButton: false,
            icon: false,
            timeout: false,
            transition: 'Vue-Toastification__fade',
        })
    }
}

export default install
