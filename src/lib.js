import './css/style.css'

import * as components from './components'
export {
    Avatar as KuiAvatar,
    Badge as KuiBadge,
    Dot as KuiDot,
    Button as KuiButton,
    ButtonGroup as KuiButtonGroup,
    Input as KuiInput,
    Label as KuiLabel,
    Checkbox as KuiCheckbox,
    DatePicker as KuiDatePicker,
    Panel as KuiPanel,
    Modal as KuiModal,
} from './components'

function install(Vue) {
    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }
}

export default install
