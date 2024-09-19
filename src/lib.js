import * as components from './components'
import '@/css/main.css'
// import '@/css/tailwind.css'

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

function install(Vue) {
    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }
}

export default install
