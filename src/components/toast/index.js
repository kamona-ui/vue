import { useToast } from 'vue-toastification'
import Toastification from './Toastification'

export const toast = useToast()

export const primaryToast = ({ title = 'Success', message = '', icon = 'tabler:circle-check' }) => {
    return toast.success({
        component: Toastification,
        props: {
            variant: 'primary',
            title,
            message,
            icon,
        },
    })
}

export const successToast = ({ title = 'Success', message = '', icon = 'tabler:circle-check' }) => {
    return toast.success({
        component: Toastification,
        props: {
            variant: 'success',
            title,
            message,
            icon,
        },
    })
}

export const warnToast = ({ title = 'Warning', message = '', icon = 'tabler:exclamation-circle' }) => {
    return toast.error({
        component: Toastification,
        props: {
            variant: 'warning',
            title,
            message,
            icon,
        },
    })
}

export const infoToast = ({ title = 'Info', message = '', icon = 'tabler:help-circle' }) => {
    return toast.error({
        component: Toastification,
        props: {
            variant: 'info',
            title,
            message,
            icon,
        },
    })
}


export const errorToast = ({ title = 'Error', message = '', icon = 'tabler:circle-x' }) => {
    return toast.error({
        component: Toastification,
        props: {
            variant: 'danger',
            title,
            message,
            icon,
        },
    })
}

export const whiteToast = ({ title = '', message = '', icon = 'tabler:circle-check' }) => {
    return toast.success({
        component: Toastification,
        props: {
            title,
            message,
            icon,
        },
    })
}

export const blackToast = ({ title = '', message = '', icon = 'tabler:circle-check' }) => {
    return toast.success({
        component: Toastification,
        props: {
            variant: 'black',
            title,
            message,
            icon,
        },
    })
}

