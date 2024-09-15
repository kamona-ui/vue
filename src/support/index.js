const sizes = ['sm', 'base', 'lg']
const shapes = ['square', 'rounded', 'pill', 'circle']
const variants = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'white', 'black']

const sizeProp = {
    type: String,
    default: 'base',
    validator(value) {
        return sizes.includes(value)
    },
}

const shapeProp = {
    type: String,
    default: 'rounded',
    validator(value) {
        return shapes.includes(value)
    },
}

const variantProp = {
    type: String,
    default: 'primary',
    validator(value) {
        return variants.includes(value)
    }
}


export { sizes, shapes, variants, sizeProp, shapeProp, variantProp }
