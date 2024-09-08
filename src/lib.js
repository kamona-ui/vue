import './css/style.css'

import {
    Avatar,
    Button,
    Input,
    Label,
    Checkbox,
    Panel,
    Modal,
} from './components'

const components = {
    Avatar,
    Button,
    Input,
    Label,
    Checkbox,
    Panel,
    Modal,
}

function install(Vue) {
    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }
}

export default install

export {
    Avatar as KuiAvatar,
    Button as KuiButton,
    Input as KuiInput,
    Label as KuiLabel,
    Checkbox as KuiCheckbox,
    Panel as KuiPanel,
    Modal as KuiModal,
}
